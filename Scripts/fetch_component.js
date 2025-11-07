function FetchComponent(id, relativePath) {
    fetch(relativePath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load component ${response.status}`);
            }
            return response.text();
        })
        .then(html => {
            const container = document.getElementById(id).innerHTML;
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