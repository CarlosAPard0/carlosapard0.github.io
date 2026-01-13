document.addEventListener('DOMContentLoaded', () => {
    const TRANSLATIONS_PATH = '/assets/data/translations.json';
    let translationsData = null;

    // --- LÓGICA DEL CARRUSEL DINÁMICO ---
    const setupCarousel = () => {
        const list = document.querySelector('.hero-technologies-list');
        if (!list) return;

        // Limpiamos clones previos si existieran (útil al cambiar de idioma)
        const originalItems = list.querySelectorAll('.technology-item:not(.clone)');
        list.querySelectorAll('.clone').forEach(clone => clone.remove());

        // 1. Clonamos los elementos para asegurar el loop infinito sin duplicar HTML manualmente
        originalItems.forEach(item => {
            const clone = item.cloneNode(true);
            clone.classList.add('clone'); // Marcamos como clon
            list.appendChild(clone);
        });

        // 2. Calculamos el ancho real de la lista original para el desplazamiento
        const gap = 24; 
        const totalWidth = [...originalItems].reduce((acc, item) => acc + item.offsetWidth + gap, 0);

        // 3. Aplicamos la variable al CSS y activamos la animación
        list.style.setProperty('--scroll-distance', `-${totalWidth}px`);
        list.style.animation = `scroll-infinite ${originalItems.length * 3}s linear infinite`;
    };

    const fetchTranslations = async () => {
        try {
            const response = await fetch(TRANSLATIONS_PATH);
            if (!response.ok) throw new Error(`Error: ${response.statusText}`);
            translationsData = await response.json();
            return translationsData;
        } catch (error) {
            console.error('Error al cargar traducciones:', error);
            return null;
        }
    };

    const updateContent = (lang) => {
        if (!translationsData || !translationsData[lang]) return;
        const langData = translationsData[lang];

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (langData[key]) {
                if (key === 'page-title') {
                    document.title = langData[key];
                } else {
                    el.textContent = langData[key];
                }
            }
        });

        document.documentElement.setAttribute('lang', lang);
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });
        localStorage.setItem('portfolio-lang', lang);
        
        // RECALCULAR CARRUSEL: Al cambiar el idioma, el ancho de los textos (captions) 
        // puede cambiar, por lo que reiniciamos el cálculo.
        setTimeout(setupCarousel, 100); 
    };

    const init = async () => {
        const translations = await fetchTranslations();
        if (!translations) return;

        const initialLang = localStorage.getItem('portfolio-lang') || 'es';
        updateContent(initialLang);

        // Iniciamos carrusel por primera vez
        setupCarousel();

        document.querySelectorAll('.lang-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                updateContent(e.target.getAttribute('data-lang'));
            });
        });
    };

    // --- LÓGICA DE FILTRADO (Se mantiene igual) ---
    const filterSelect = document.getElementById('category-filter');
    const projects = document.querySelectorAll('.proyecto-item');

    if (filterSelect) {
        filterSelect.addEventListener('change', (e) => {
            const selectedCategory = e.target.value;
            projects.forEach(project => {
                const categoriesAttr = project.getAttribute('data-category') || '';
                const projectCategories = categoriesAttr.split(' ');
                const isVisible = selectedCategory === 'all' || projectCategories.includes(selectedCategory);

                if (isVisible) {
                    project.style.display = 'block';
                    setTimeout(() => project.classList.add('fade-in'), 10);
                } else {
                    project.style.display = 'none';
                    project.classList.remove('fade-in');
                }
            });
        });
    }

    init();
});