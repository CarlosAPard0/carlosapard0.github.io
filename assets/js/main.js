document.addEventListener('DOMContentLoaded', () => {
    const TRANSLATIONS_PATH = '/assets/data/translations.json';
    let translationsData = null;

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
    };

    const init = async () => {
        const translations = await fetchTranslations();
        if (!translations) return;

        const initialLang = localStorage.getItem('portfolio-lang') || 'es';
        updateContent(initialLang);

        document.querySelectorAll('.lang-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                updateContent(e.target.getAttribute('data-lang'));
            });
        });
    };

    // --- LÓGICA DE FILTRADO CON VALIDACIÓN ---
    const filterSelect = document.getElementById('category-filter');
    const projects = document.querySelectorAll('.proyecto-item');

    // Solo ejecutamos esto si estamos en la página que tiene el filtro
    if (filterSelect) {
        filterSelect.addEventListener('change', (e) => {
            const selectedCategory = e.target.value;
            projects.forEach(project => {
                const projectCategory = project.getAttribute('data-category');
                if (selectedCategory === 'all' || projectCategory === selectedCategory) {
                    project.style.display = 'block';
                    project.classList.add('fade-in');
                } else {
                    project.style.display = 'none';
                }
            });
        });
    }

    init();
});