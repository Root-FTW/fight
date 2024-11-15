document.addEventListener('DOMContentLoaded', () => {
    // Intentar habilitar autoplay en el iframe
    const iframe = document.getElementById('streamFrame');
    const fallback = document.querySelector('.fallback-message'); // Asegúrate de tener esta clase en tu HTML si la usas

    if (iframe) {
        // Detectar errores en iframe
        iframe.addEventListener('error', () => {
            if (fallback) {
                fallback.style.display = 'flex';
            }
        });

        // Intentar reproducir automáticamente después de cargar
        iframe.addEventListener('load', () => {
            try {
                setTimeout(() => {
                    iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
                    console.log('Intentando reproducir automáticamente...');
                }, 1000);
            } catch (error) {
                console.error('No se pudo habilitar el autoplay:', error);
                if (fallback) {
                    fallback.style.display = 'flex';
                }
            }
        });
    } else {
        console.warn('No se encontró el iframe con el ID "streamFrame".');
    }
});
