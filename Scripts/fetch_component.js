function FetchComponent(id, relativePath) {
    fetch(relativePath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load component ${response.status}`);
            }
            return response.text();
        })
        .then(html => {
            document.getElementById(id).innerHTML = html;
        })
        .catch(error => {
            console.error(error);
        });
}