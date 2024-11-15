document.addEventListener('DOMContentLoaded', () => {
    const videoContainer = document.getElementById('videoContainer');
    const iframe = document.getElementById('liveStream');
    const loadingMessage = document.getElementById('loadingMessage');
    const initialOverlay = document.getElementById('initialOverlay');
    const fallbackMessage = document.querySelector('.fallback-message');
    const popupCounter = document.getElementById('popupCounter');

    let isLoading = true;

    // Función para mostrar el mensaje de carga
    function showLoading() {
        loadingMessage.style.display = 'flex';
        initialOverlay.style.display = 'none';
    }

    // Función para ocultar el mensaje de carga
    function hideLoading() {
        loadingMessage.style.display = 'none';
        isLoading = false;
    }

    // Función para mostrar el mensaje de fallback
    function showFallback() {
        fallbackMessage.style.display = 'flex';
        loadingMessage.style.display = 'none';
        initialOverlay.style.display = 'none';
    }

    // Manejar errores en el iframe
    iframe.addEventListener('error', () => {
        showFallback();
    });

    // Intentar reproducir automáticamente después de cargar
    iframe.addEventListener('load', () => {
        try {
            setTimeout(() => {
                hideLoading();
                iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
                console.log('Intentando reproducir automáticamente...');
            }, 1000);
        } catch (error) {
            console.error('No se pudo habilitar el autoplay:', error);
            showFallback();
        }
    });

    // Mostrar mensaje de carga inicial
    showLoading();
});
