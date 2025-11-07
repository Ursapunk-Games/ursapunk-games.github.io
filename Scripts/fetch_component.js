function FetchComponent(id, absolutePath) {
    path = '';

    if (typeof absolutePath === 'string' && absolutePath.match(/\.html?$/i)) {
        const normalized = absolutePath.replace(/^\/+|^\.+/, '');
        path = './' + normalized;
    } else {
        console.error("Invalid HTML file path:", absolutePath);
    }

    fetch(path)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load component ${response.status}`);
            }
            return response.text();
        })
        .then(html => {
            const container = document.getElementById(id);
            container.innerHTML = html;

            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = html;
            const scripts = tempDiv.querySelectorAll('script');

            scripts.forEach(script => {
                const newScript = document.createElement('script');
                if (script.src) {
                    newScript.src = script.src;
                    newScript.async = false;
                } else {
                    newScript.textContent = script.textContent;
                }
                document.head.appendChild(newScript);
            });
        })
        .catch(error => {
            console.error(error);
        });
}