document.addEventListener('DOMContentLoaded', () => {
    // 1. Create Mobile Menu Button
    const mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.className = 'md:hidden text-white p-2 ml-auto'; // Changed to text-white for visibility on dark header
    mobileMenuBtn.innerHTML = '<span class="material-symbols-outlined text-3xl">menu</span>';
    mobileMenuBtn.setAttribute('aria-label', 'Toggle Mobile Menu');

    // 2. Insert Button into Header
    // Target the main container in header
    const headerContainer = document.querySelector('header > div');
    if (headerContainer) {
        // We want it to be visible on mobile.
        // The header has [Logo] [Nav (hidden md)] [CTA (hidden sm)].
        // So on mobile: [Logo] [Hidden] [Hidden].
        // Appending it will put it on the right.
        headerContainer.appendChild(mobileMenuBtn);
    } else {
        // Header container not found - mobile menu will not be available
    }

    // 3. Create Mobile Menu Container
    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'fixed inset-0 z-40 bg-white dark:bg-primary transform translate-x-full transition-transform duration-300 md:hidden flex flex-col pt-24 px-6 gap-6 shadow-2xl';

    // Get current page to highlight active link
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    // Helper to determine if link is active
    const isActive = (page) => {
        if (page === 'index.html' && (currentPage === '' || currentPage === 'index.html')) return true;
        return currentPage === page;
    };

    // Helper to create link class
    const getLinkClass = (page) => {
        const baseClass = 'mobile-link text-2xl font-medium border-b border-gray-100 dark:border-gray-800 pb-4 transition-colors';
        if (isActive(page)) {
            return `${baseClass} text-accent font-bold border-accent`;
        }
        return `${baseClass} text-secondary dark:text-gray-300 hover:text-accent`;
    };

    mobileMenu.innerHTML = `
        <div class="flex justify-end mb-4">
             <!-- Close button handled by toggle -->
        </div>
        <a href="index.html" class="${getLinkClass('index.html')}">Home</a>
        <a href="servicos.html" class="${getLinkClass('servicos.html')}">Serviços</a>
        <a href="abordagem.html" class="${getLinkClass('abordagem.html')}">Abordagem</a>
        <a href="inovacao.html" class="${getLinkClass('inovacao.html')}">Inovação</a>
        <a href="agendar.html" class="w-full py-4 px-6 rounded bg-accent hover:bg-accent-hover text-white uppercase font-bold shadow-md transition-colors mt-4 text-center inline-block">Agendar Consulta</a>
    `;

    document.body.appendChild(mobileMenu);

    // 4. Toggle Logic
    const toggleMenu = () => {
        const isOpen = !mobileMenu.classList.contains('translate-x-full');
        if (isOpen) {
            // Close
            mobileMenu.classList.add('translate-x-full');
            mobileMenuBtn.innerHTML = '<span class="material-symbols-outlined text-3xl">menu</span>';
            document.body.style.overflow = ''; // Restore scrolling
        } else {
            // Open
            mobileMenu.classList.remove('translate-x-full');
            mobileMenuBtn.innerHTML = '<span class="material-symbols-outlined text-3xl">close</span>';
            document.body.style.overflow = 'hidden'; // Lock scrolling
        }
    };

    mobileMenuBtn.addEventListener('click', toggleMenu);

    // Close on link click
    mobileMenu.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', toggleMenu);
    });
});

// Scroll Animation Observer by Antigravity
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Trigger even sooner to avoid blank spaces
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal-on-scroll, .reveal-stagger, .reveal-from-left, .reveal-from-right');
    revealElements.forEach(el => observer.observe(el));
});

// Timeline Scroll Animation
document.addEventListener('scroll', () => {
    // Support both timeline-section and index-timeline-section IDs
    const timelineSection = document.getElementById('timeline-section') || document.getElementById('index-timeline-section');
    const progressBar = document.getElementById('timeline-progress') || document.getElementById('index-timeline-progress');

    if (timelineSection && progressBar) {
        const rect = timelineSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Start filling when the top of the section is 40% down the viewport
        const startOffset = windowHeight * 0.4;

        // Calculate how much of the section has been scrolled past the start point
        const scrolled = (windowHeight - rect.top) - startOffset;

        // Determine the total scrollable distance for the line (section height)
        const totalDistance = rect.height;

        let percentage = (scrolled / totalDistance) * 100;

        // Clamp between 0 and 100
        percentage = Math.max(0, Math.min(100, percentage));

        progressBar.style.height = `${percentage}%`;

    }
});

// Form Validation
document.addEventListener('DOMContentLoaded', () => {
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            // Clear previous errors
            const errorMessages = form.querySelectorAll('.form-error');
            errorMessages.forEach(msg => msg.remove());

            let isValid = true;

            // Validate required fields
            const requiredFields = form.querySelectorAll('[required]');
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    showError(field, 'Este campo é obrigatório');
                }

                // Email validation
                if (field.type === 'email' && field.value.trim()) {
                    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailPattern.test(field.value)) {
                        isValid = false;
                        showError(field, 'Por favor, insira um e-mail válido');
                    }
                }

                // Phone validation (basic)
                if (field.type === 'tel' && field.value.trim()) {
                    const phonePattern = /^[\d\s\(\)\-\+]+$/;
                    if (!phonePattern.test(field.value)) {
                        isValid = false;
                        showError(field, 'Por favor, insira um telefone válido');
                    }
                }
            });

            if (isValid) {
                // Form is valid - you can submit to backend here
                // Form is valid - would submit to backend here
                // Show success message
                showSuccessMessage(form);
            }
        });
    });

    function showError(field, message) {
        const error = document.createElement('div');
        error.className = 'form-error text-sm text-red-600 mt-1';
        error.textContent = message;
        field.parentNode.appendChild(error);
        field.classList.add('border-red-500');

        // Remove error on input
        field.addEventListener('input', () => {
            error.remove();
            field.classList.remove('border-red-500');
        }, { once: true });
    }

    function showSuccessMessage(form) {
        const successDiv = document.createElement('div');
        successDiv.className = 'bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded mt-4 animate-fade-in';
        successDiv.innerHTML = `
            <div class="flex items-center">
                <span class="material-symbols-outlined mr-2">check_circle</span>
                <p class="font-semibold">Mensagem enviada com sucesso!</p>
            </div>
            <p class="text-sm mt-1">Entraremos em contato em breve.</p>
        `;
        form.appendChild(successDiv);

        // Reset form
        setTimeout(() => {
            form.reset();
            successDiv.remove();
        }, 5000);
    }
});

// Dynamic Copyright Year
document.addEventListener('DOMContentLoaded', () => {
    const currentYear = new Date().getFullYear();
    const copyrightElements = document.querySelectorAll('.copyright-year');
    copyrightElements.forEach(el => {
        el.textContent = currentYear;
    });
});
