/**
 * Component Loader Module
 * Знаходить елементи з атрибутом [data-include] і підвантажує в них HTML-файли.
 */
function initComponentLoader() {
    const includeElements = document.querySelectorAll('[data-include]');
    
    includeElements.forEach(el => {
        const file = el.getAttribute('data-include');
        if (!file) return;

        fetch(file)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Не вдалося завантажити компонент: ${file}`);
                }
                return response.text();
            })
            .then(html => {
                el.innerHTML = html;
                // Повідомляємо інші скрипти, що компонент завантажено
                el.dispatchEvent(new CustomEvent('component:loaded', { 
                    bubbles: true,
                    detail: { file: file }
                }));
            })
            .catch(error => {
                console.error('Loader Error:', error);
            });
    });
}

// Запускаємо завантаження компонентів після побудови DOM-дерева
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initComponentLoader);
} else {
    initComponentLoader();
}
