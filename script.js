function showLoading() {
    document.getElementById('loading').style.display = 'flex';
}

function hideLoading() {
    document.getElementById('loading').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
    const iframe = document.getElementById('player');
    showLoading();
    
    // Cargar el reproductor
    iframe.src = `https://v3.bestsolaris.com/solaris.php?postid=69405&t=${Date.now()}&nopopup=true`;
    
    iframe.onload = function() {
        hideLoading();
    };
});
