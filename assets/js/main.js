document.addEventListener('DOMContentLoaded', () => {
    // Definimos la ruta de las traducciones. Ajusta si tu archivo JSON está en otra carpeta.
    const TRANSLATIONS_PATH = 'assets/data/translations.json';
    let translationsData = null;

    // 1. Cargar las traducciones desde el JSON
    const fetchTranslations = async () => {
        try {
            const response = await fetch(TRANSLATIONS_PATH);
            if (!response.ok) {
                throw new Error(`Error al cargar el archivo JSON: ${response.statusText}`);
            }
            translationsData = await response.json();
            return translationsData;
        } catch (error) {
            console.error('Error crítico al cargar las traducciones:', error);
            return null;
        }
    };

    // 2. Función principal para traducir el contenido
    const updateContent = (lang) => {
        if (!translationsData) return;

        const langData = translationsData[lang];
        if (!langData) return;

        const elements = document.querySelectorAll('[data-i18n]');
        
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (langData[key]) {
                // Caso especial para el TÍTULO de la página
                if (key === 'page-title') {
                    document.title = langData[key];
                } 
                // Actualiza el texto visible del elemento (h2, p, a, legend, etc.)
                el.textContent = langData[key];
            }
        });

        // Actualizar el atributo 'lang' del HTML
        document.documentElement.setAttribute('lang', lang);
        
        // Actualizar el estilo 'active' de los botones
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            }
        });
        
        // Guardar la preferencia del usuario
        localStorage.setItem('portfolio-lang', lang);
    };

    // 3. Inicializar la aplicación y configurar los eventos
    const init = async () => {
        const translations = await fetchTranslations();
        if (!translations) return;

        // Determinar el idioma inicial: preferencia guardada, o por defecto 'es'
        const initialLang = localStorage.getItem('portfolio-lang') || 'es';
        updateContent(initialLang);

        // Configurar el evento de clic para los botones
        document.querySelectorAll('.lang-btn').forEach(button => {
            button.addEventListener('click', (event) => {
                const newLang = event.target.getAttribute('data-lang');
                updateContent(newLang);
            });
        });
    };

    init();
});