document.addEventListener('DOMContentLoaded', () => {
    const includeElements = document.querySelectorAll('[data-include]');
    
    includeElements.forEach(el => {
        const file = el.getAttribute('data-include');
        fetch(file)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Error loading ${file}`);
                }
                return response.text();
            })
            .then(html => {
                el.outerHTML = html;
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });
});
