document.addEventListener('DOMContentLoaded', () => {
    // Inicializar Video.js
    var player = videojs('liveStream', {
        autoplay: true,
        muted: true, // Necesario para autoplay en algunos navegadores
        controls: true,
        fluid: true, // Hace que el reproductor sea responsivo
        preload: 'auto',
        playsinline: true // Importante para reproducir inline en móviles
    }, function() {
        console.log('Video.js está listo');
    });

    // Manejar errores de reproducción
    player.on('error', function() {
        var error = player.error();
        console.error('Error de reproducción:', error);
        alert('Hubo un problema al reproducir la transmisión. Por favor, intenta de nuevo más tarde.');
    });
});
