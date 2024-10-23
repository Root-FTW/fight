document.addEventListener('DOMContentLoaded', () => {
    // Variables para el video
    const videoContainer = document.getElementById('videoContainer');
    const loadingMessage = document.getElementById('loadingMessage');
    const initialOverlay = document.getElementById('initialOverlay');
    
    // Función para manejar la carga del video
    function handleVideoLoad() {
        loadingMessage.style.display = 'none';
        initialOverlay.style.display = 'none';
    }
    
    // Función para manejar errores del video
    function handleVideoError() {
        loadingMessage.textContent = 'Error al cargar la transmisión. Por favor, intenta más tarde.';
    }
    
    // Configuración del botón de compartir
    const shareButton = document.getElementById('shareButton');
    
    shareButton.addEventListener('click', async () => {
        try {
            if (navigator.share) {
                await navigator.share({
                    title: 'SportsFTW',
                    text: '¡Mira esta transmisión deportiva en vivo!',
                    url: window.location.href,
                });
                showShareSuccess();
            } else {
                // Fallback: copiar al portapapeles
                await navigator.clipboard.writeText(window.location.href);
                showShareSuccess();
            }
        } catch (error) {
            console.error('Error al compartir:', error);
        }
    });

    function showShareSuccess() {
        const originalContent = shareButton.innerHTML;
        shareButton.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            <span>¡Compartido!</span>
        `;
        shareButton.classList.add('shared');

        setTimeout(() => {
            shareButton.innerHTML = originalContent;
            shareButton.classList.remove('shared');
        }, 2000);
    }
});
