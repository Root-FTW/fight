document.addEventListener('DOMContentLoaded', () => {
    // Intentar habilitar autoplay en el iframe
    const iframe = document.getElementById('liveStream');
    const fallback = document.querySelector('.fallback-message');

    // Detectar errores en iframe
    iframe.addEventListener('error', () => {
        fallback.style.display = 'flex';
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
            fallback.style.display = 'flex';
        }
    });
});
