function LoadHTML(absolutePath) {
    if (typeof absolutePath === 'string' && absolutePath.match(/\.html?$/i)) {
        const path = absolutePath.startsWith("/") ? absolutePath : "/" + absolutePath;
        window.location.href = path;
    } else {
        console.error("Invalid HTML file path:", path);
    }
}