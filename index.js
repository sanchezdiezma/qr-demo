function redirectToStore() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Detecta si el dispositivo es Android
    if (/android/i.test(userAgent)) {
        window.location.href = "https://play.google.com/store/apps/details?id=com.hoteligy.princess&gl=ES";
    }
    // Detecta si el dispositivo es iOS
    else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        window.location.href = "https://apps.apple.com/es/app/princess-hotels-resorts/id6446177684";
    } else {
        // Si no es Android ni iOS, muestra un mensaje o redirige a una página web
        document.getElementById("message").innerText = "Por favor, visita esta página desde un dispositivo móvil para descargar la app.";
    }
}

window.onload = redirectToStore;
