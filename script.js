document.addEventListener('DOMContentLoaded', () => {
    // 1. Create Mobile Menu Button
    const mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.className = 'md:hidden text-primary dark:text-white p-2 ml-auto'; // ml-auto to push to right if needed
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
        console.error("Header container not found!");
    }

    // 3. Create Mobile Menu Container
    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'fixed inset-0 z-40 bg-white dark:bg-primary transform translate-x-full transition-transform duration-300 md:hidden flex flex-col pt-24 px-6 gap-6 shadow-2xl';
    mobileMenu.innerHTML = `
        <div class="flex justify-end mb-4">
             <!-- Close button handled by toggle, but we can add one here too or just use the main one -->
        </div>
        <a href="#" class="mobile-link text-2xl font-medium text-secondary dark:text-gray-300 hover:text-accent border-b border-gray-100 dark:border-gray-800 pb-4">Home</a>
        <a href="#" class="mobile-link text-2xl font-bold text-primary dark:text-accent border-b border-gray-100 dark:border-gray-800 pb-4">Serviços</a>
        <a href="#" class="mobile-link text-2xl font-medium text-secondary dark:text-gray-300 hover:text-accent border-b border-gray-100 dark:border-gray-800 pb-4">Sobre</a>
        <a href="#" class="mobile-link text-2xl font-medium text-secondary dark:text-gray-300 hover:text-accent border-b border-gray-100 dark:border-gray-800 pb-4">Contato</a>
        <button class="w-full py-4 rounded bg-primary text-white uppercase font-bold shadow-md hover:bg-primary/90 mt-4">Agendar Consulta</button>
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
    const timelineSection = document.getElementById('timeline-section');
    const progressBar = document.getElementById('timeline-progress');

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
