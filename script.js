document.addEventListener('DOMContentLoaded', () => {
    // Intentar habilitar autoplay en el iframe
    const iframe = document.getElementById('liveStream');

    // Verificar si el navegador permite autoplay
    const playStream = () => {
        iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
    };

    // Intenta reproducir automáticamente después de cargar
    iframe.addEventListener('load', () => {
        try {
            // Agregar un retraso para intentar reproducir
            setTimeout(playStream, 1000);
            console.log('Intentando reproducir automáticamente...');
        } catch (error) {
            console.error('No se pudo habilitar el autoplay:', error);
        }
    });
});
