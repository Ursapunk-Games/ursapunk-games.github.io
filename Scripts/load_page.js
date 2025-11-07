function LoadHTML(absolutePath) {
    if (typeof absolutePath === 'string' && absolutePath.match(/\.html?$/i)) {
        const normalized = absolutePath.replace(/^\/+|^\.+/, '');
        const path = './' + normalized;
        window.location.href = path;
    } else {
        console.error("Invalid HTML file path:", absolutePath);
    }
}