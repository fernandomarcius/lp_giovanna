# PRD - Pagina "Inovacao & Tecnologia Juridica"

## Visao Geral

Nova pagina `inovacao.html` para a landing page da consultoria Giovanna Seabra, posicionando a oferta de servicos de tecnologia aplicada ao juridico corporativo. A pagina deve ser integrada a navegacao existente (novo item "Inovacao" no menu, entre "Abordagem" e o CTA "Agendar Consulta").

**Objetivo**: Apresentar solucoes de tecnologia e automacao juridica como extensao natural da consultoria estrategica, demonstrando que a equipe tem vivencia real em operacoes corporativas de grande porte e consegue traduzir essa experiencia em eficiencia para o cliente.

**Tom**: Consultivo e confiavel. Nao e uma pagina de vendas de software - e uma pagina que mostra como a tecnologia potencializa os resultados juridicos que o cliente ja busca. Persuasivo por evidencia, nao por pressao.

---

## Selecao de Servicos (Perspectiva do Cliente)

Priorizacao baseada em **dor real do cliente corporativo** e **retorno percebido imediato**:

### Tier 1 - Ganho imediato e tangivel
1. **Contratos Inteligentes & Assinatura Digital** - Todo cliente lida com contratos diariamente. Reducao de tempo e risco e sentida na primeira semana.
2. **Dashboards & Visibilidade Executiva** - Diretores e C-levels querem ver numeros, nao ler PDFs de 40 paginas. Impacto direto na tomada de decisao.
3. **Monitoramento Automatico** - Prazos, legislacao, licitacoes. O cliente paga caro por surpresas. Monitoramento proativo elimina esse medo.

### Tier 2 - Ganho estrategico de medio prazo
4. **Agentes de IA para Operacao Juridica** - Triagem de demandas, rascunhos de pareceres, pesquisa jurisprudencial. Libera o time juridico para decisoes de alto valor.
5. **Compliance & LGPD Automatizado** - Risco regulatorio e uma preocupacao crescente. Automacao gera evidencia auditavel e tranquilidade.
6. **Jurimetria & Inteligencia de Contencioso** - Decisoes de acordo e provisao baseadas em dados, nao em intuicao. Impacto financeiro direto.

---

## Estrutura da Pagina

### Secao 1 - Hero
- **Badge**: "Inovacao Juridica"
- **Titulo**: "Tecnologia a Servico da Estrategia Juridica"
- **Subtitulo**: Algo como: "Aplicamos mais de uma decada de vivencia em operacoes juridicas de grandes corporacoes para implementar tecnologia que gera resultado real: menos risco, mais velocidade, decisoes melhores."
- **Background**: Mesmo padrao do site (bg-primary com overlay, gradiente escuro)
- **Estilo**: Identico ao hero de `abordagem.html` - badge pill com dot animado, h1 com gradient text no accent, paragrafo com border-l accent

### Secao 2 - Credenciais da Equipe de Tecnologia
- **Layout**: Faixa horizontal sobre fundo branco, logo apos o hero (similar ao card de metricas da `index.html`)
- **Conteudo**:
  - Icone `engineering` ou `code` (Material Symbols)
  - "+10 anos de mercado"
  - Logos ou nomes das empresas: **Itau, Grupo Saga, Cogna, RTSC Holding**
  - Texto curto: "Nossa equipe de tecnologia traz experiencia de quem ja operou por dentro de grandes corporacoes. Entendemos a complexidade porque vivemos ela."
- **Tom**: Nao e curriculo. E prova social sutil. O cliente precisa sentir que quem vai implementar ja viu ambientes parecidos com o dele.
- **Estilo visual**: Card elevado com shadow-2xl, -mt-4 md:-mt-8 (sobrepoe levemente o hero, exatamente como o card de metricas na index.html). Grid de 3-4 colunas com icone + numero/texto.

### Secao 3 - Servicos Principais (Tier 1)
- **Titulo da secao**: "Resultados que Voce Sente no Primeiro Mes"
- **Subtitulo**: "Solucoes que impactam diretamente a operacao do seu juridico desde o primeiro dia."
- **Layout**: Timeline alternado identico ao de `abordagem.html` (imagem de um lado, texto do outro, numeracao 01/02/03, linha vertical com progress bar animada)

#### Card 01 - Contratos Inteligentes & Assinatura Digital
- **Icone**: `description` (Material Symbols)
- **Badge**: "Eficiencia Contratual"
- **Titulo**: "Contratos Inteligentes & Assinatura Digital"
- **Descricao** (tom consultivo, nao tecnico):
  > "Sua equipe ainda monta contratos copiando e colando de modelos antigos? Implementamos um fluxo onde o contrato certo nasce pronto a partir de regras que voce define - com as clausulas certas, os riscos mapeados e a assinatura digital integrada. Sem papel, sem retrabalho, sem risco de versao errada."
- **Bullets com icone verified**:
  - Templates inteligentes que se adaptam ao tipo de operacao
  - Revisao automatica de clausulas criticas por IA
  - Assinatura digital com validade juridica (ICP-Brasil)
  - Fluxo de aprovacao por alcada integrado
- **Imagem**: Placeholder para imagem ilustrativa (escritorio moderno / tela de sistema)

#### Card 02 - Dashboards & Visibilidade Executiva
- **Icone**: `analytics` (Material Symbols)
- **Badge**: "Inteligencia de Dados"
- **Titulo**: "Dashboards & Visibilidade Executiva"
- **Descricao**:
  > "O juridico da sua empresa ainda reporta por planilhas e PDFs? Criamos paineis executivos que mostram em tempo real o que importa: volume de processos, risco financeiro, SLA de escritorios, taxas de acordo. Seu diretor abre o painel e entende a operacao juridica em 30 segundos."
- **Bullets**:
  - KPIs juridicos automatizados e atualizados em tempo real
  - Relatorios gerenciais gerados sem intervencao manual
  - Performance de escritorios terceirizados com metricas claras
  - Previsao de provisoes e custos com base em dados historicos
- **Imagem**: Placeholder

#### Card 03 - Monitoramento Proativo & Alertas
- **Icone**: `notifications_active` (Material Symbols)
- **Badge**: "Vigilancia Continua"
- **Titulo**: "Monitoramento Proativo & Alertas Automaticos"
- **Descricao**:
  > "Mudou uma lei que impacta seu contrato? Saiu uma publicacao no Diario Oficial sobre sua empresa? Venceu o prazo de um aditivo? Voce fica sabendo automaticamente. Implementamos sistemas de monitoramento que vigiam prazos, legislacao e publicacoes 24 horas por dia - e avisam antes que vire problema."
- **Bullets**:
  - Monitoramento de prazos processuais com alertas automaticos
  - Acompanhamento de mudancas legislativas e regulatorias
  - Alertas de vencimento de contratos e procuracoes
  - Captura automatica de publicacoes no Diario Oficial
- **Imagem**: Placeholder

### Secao 4 - Servicos Estrategicos (Tier 2)
- **Titulo da secao**: "Inteligencia para Decisoes de Alto Impacto"
- **Subtitulo**: "Solucoes que transformam a forma como seu juridico opera e decide."
- **Layout**: Grid de 3 colunas (identico ao grid de "Competencias Essenciais" na `index.html` - cards com icone de fundo grande, hover com border-t accent, animacao de elevacao)

#### Card A - Agentes de IA para Operacao Juridica
- **Icone**: `smart_toy` (Material Symbols)
- **Titulo**: "Agentes de IA para Operacao Juridica"
- **Descricao curta**:
  > "Assistentes inteligentes que pesquisam jurisprudencia, geram rascunhos de pareceres e classificam demandas por urgencia. Seu time foca no que exige julgamento humano."
- **Link**: "Saiba mais" apontando para secao de detalhes ou para agendar.html

#### Card B - Compliance & LGPD Automatizado
- **Icone**: `shield` (Material Symbols)
- **Titulo**: "Compliance & LGPD Automatizado"
- **Descricao curta**:
  > "Gestao de consentimento, mapeamento de dados e resposta a incidentes com trilha de auditoria. Conformidade continua, nao so no dia da fiscalizacao."
- **Link**: "Saiba mais"

#### Card C - Jurimetria & Inteligencia de Contencioso
- **Icone**: `query_stats` (Material Symbols)
- **Titulo**: "Jurimetria & Inteligencia de Contencioso"
- **Descricao curta**:
  > "Qual a chance real de ganhar esse processo? Qual o valor provavel de condenacao? Dados concretos para decidir se vale litigar, negociar ou provisionar."
- **Link**: "Saiba mais"

### Secao 5 - Como Funciona (Processo de Implementacao)
- **Background**: bg-primary (fundo escuro, texto claro - mesmo padrao da secao "Legal Operations" em servicos.html)
- **Titulo**: "Da Estrategia a Operacao"
- **Subtitulo**: "Nosso processo de implementacao segue o mesmo rigor da nossa consultoria juridica."
- **Layout**: 3 itens horizontais com icone, numero e texto (similar ao "Eficiencia Operacional / Gestao Baseada em Dados / Reducao de Custos" de servicos.html)

#### Etapa 1 - Diagnostico Tecnologico
- **Icone**: `search_insights`
- **Titulo**: "Diagnostico Tecnologico"
- **Descricao**: "Entendemos como sua operacao juridica funciona hoje - ferramentas, fluxos, dores - e identificamos onde a tecnologia gera mais impacto com menos atrito."

#### Etapa 2 - Implementacao Sob Medida
- **Icone**: `build`
- **Titulo**: "Implementacao Sob Medida"
- **Descricao**: "Configuramos e integramos as solucoes ao seu ambiente. Sem projetos genericos - cada implementacao reflete a realidade da sua operacao."

#### Etapa 3 - Acompanhamento & Evolucao
- **Icone**: `trending_up`
- **Titulo**: "Acompanhamento & Evolucao"
- **Descricao**: "Monitoramos os resultados, ajustamos o que precisa e evoluimos a solucao conforme seu negocio cresce. Tecnologia que acompanha, nao que trava."

### Secao 6 - Frase de Impacto / Quote
- **Layout**: Faixa simples, bg-gray-100, texto centralizado (similar ao CTA final de abordagem.html)
- **Citacao estilizada** (font-serif italic, grande):
  > "Tecnologia nao substitui o advogado. Mas o advogado que usa tecnologia substitui o que nao usa."
- **Sem atribuicao de autor** (frase propria da consultoria)

### Secao 7 - CTA Final
- **Background**: bg-white
- **Titulo**: "Pronto para modernizar sua operacao juridica?"
- **Subtitulo**: "Agende um diagnostico tecnologico sem compromisso. Vamos mapear juntos onde a tecnologia pode gerar mais resultado no seu juridico."
- **Botoes**:
  - Primario: "Agendar Diagnostico" (link para agendar.html, estilo btn-accent)
  - Secundario: "Fale Conosco no WhatsApp" (link para WhatsApp, estilo btn-outline)
- **Estilo**: Identico ao CTA final de servicos.html

### Footer
- Identico as demais paginas (reutilizar o mesmo footer)

---

## Padroes Visuais (Referencia Obrigatoria)

### Cores
| Token | Hex | Uso |
|-------|-----|-----|
| primary | `#0a192f` | Fundos escuros, headers, textos de titulo |
| secondary | `#2d3748` | Texto corpo |
| accent | `#c5a059` | Destaques, badges, icones, CTAs, borders |
| accent-light | `#d4b077` | Gradientes de texto |
| accent-hover | `#b08d4b` | Hover de botoes |
| background-light | `#f8f9fa` | Fundo claro de secoes |
| navy-light | `#172a45` | Cards em fundo escuro |

### Tipografia
| Elemento | Fonte | Peso | Tracking |
|----------|-------|------|----------|
| h1 (hero) | Playfair Display | bold | tight |
| h2 (secao) | Playfair Display | bold | - |
| h3 (card) | Public Sans | bold | tight |
| h4 (subtitulo) | Public Sans | bold | wide, uppercase |
| Corpo | Public Sans | light (300) | - |
| Badge/label | Public Sans | bold (700) | widest, uppercase |

### Componentes Reutilizaveis
- **Badge pill**: `inline-flex items-center gap-3 px-4 py-1.5 rounded-sm bg-white/5 border border-accent/30 backdrop-blur-md` com dot animado `w-2 h-2 rounded-full bg-accent`
- **Section header**: Label accent uppercase tracking-widest + h3 display bold + divider `w-24 h-1 bg-accent mx-auto`
- **Card de servico (grid)**: `group relative bg-gray-50 p-10 rounded-sm hover:-translate-y-2 hover:shadow-2xl border-t-4 border-transparent hover:border-accent` com icone de fundo grande `opacity-10`
- **Timeline item**: Grid 2 colunas com numeracao grande (`text-8xl font-display text-gray-100`), icone em box primary, lista com `verified` icons
- **CTA button accent**: `rounded-sm h-14 px-10 bg-accent text-white text-sm uppercase tracking-widest font-bold shadow-lg shadow-accent/20 hover:bg-accent-hover`
- **CTA button outline**: `rounded-sm h-14 px-10 bg-transparent border border-gray-300 text-primary text-sm uppercase tracking-widest font-bold hover:bg-gray-50`

### Animacoes
- `reveal-on-scroll`: fadeIn + translateY(30px) com IntersectionObserver
- `reveal-stagger`: Filhos com delay escalonado (0.1s, 0.2s, 0.3s...)
- `reveal-from-left` / `reveal-from-right`: translateX(-30px/+30px)
- Timeline progress bar: Barra accent com shadow glow que preenche conforme scroll

### Icones
- Biblioteca: Material Symbols Outlined
- Tamanhos: `text-xl` (inline), `text-3xl` (cards), `text-4xl` (destaques), `text-5xl` (secoes), `text-8xl` (fundo decorativo)

---

## Navegacao

Adicionar item "Inovacao" ao menu de navegacao em **todas as paginas**:

```
Home | Servicos | Abordagem | Inovacao | [Agendar Consulta]
```

- Estado ativo: `text-accent border-b-2 border-accent`
- Estado normal: `text-gray-300 hover:text-accent`
- Mobile menu (script.js): Adicionar link para `inovacao.html`

---

## Conteudo Textual - Diretrizes de Tom

### Fazer:
- Falar de resultados, nao de funcionalidades ("voce vê em 30 segundos" em vez de "dashboard com 12 widgets")
- Usar perguntas retoricas que espelham a dor do cliente ("Sua equipe ainda monta contratos copiando e colando?")
- Referenciar a experiencia corporativa de forma natural, nao como lista de curriculo
- Usar verbos de acao direta: "implementamos", "criamos", "monitoramos"
- Manter o padrao formal-acessivel do restante do site (sem girias, sem excesso de jargao tech)

### Nao fazer:
- Nao listar nomes de ferramentas/softwares na pagina (cliente nao se importa se e Power BI ou Metabase)
- Nao usar termos como "machine learning", "pipeline de dados", "API REST" - o cliente nao e tecnico
- Nao prometer porcentagens de melhoria ("reducao de 70%") - soa marketing demais
- Nao usar superlativos vazios ("a melhor", "lider de mercado", "revolucionario")
- Nao colocar precos ou pacotes na pagina - o CTA leva para conversa

---

## Requisitos Tecnicos

- HTML semantico (`section`, `article`, `nav`, `footer`)
- Acessibilidade: `role`, `aria-label`, `alt` em imagens, contraste AA
- SEO: meta tags OG/Twitter, canonical, title e description unicos
- Performance: imagens com `loading="lazy"`, `width/height` explicitos
- Mesmo stack: Tailwind CDN + tailwind-config.js + animations.css + styles.css + script.js
- Responsivo: Mobile-first, breakpoints md/lg conforme paginas existentes

---

## Imagens Necessarias

| Local | Descricao | Dimensoes sugeridas | Formato |
|-------|-----------|---------------------|---------|
| Hero background | Escritorio moderno com tecnologia (monitor/dados) | 2600x1200 | WebP/JPG |
| Timeline 01 | Pessoa revisando contrato em tela | 900x600 | WebP |
| Timeline 02 | Dashboard executivo em tela grande | 900x600 | WebP |
| Timeline 03 | Notificacoes/alertas em dispositivos | 900x600 | WebP |

Todas as imagens devem seguir o tratamento visual existente: grayscale parcial (`filter grayscale-[20%]`), overlay `bg-primary/20 mix-blend-multiply`, hover que remove o grayscale.

---

## Metricas de Sucesso

- Taxa de clique no CTA "Agendar Diagnostico" partindo desta pagina
- Tempo medio na pagina (objetivo: >2 minutos)
- Scroll depth >75%
- Leads qualificados mencionando "tecnologia" ou "inovacao" no formulario de contato