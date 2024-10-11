document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener('load', function () {
        setTimeout(function () {
            const preloader = document.getElementById("preloader");
            if (preloader) {
                preloader.style.opacity = "0";  // Desvanecer el preloader
                setTimeout(function () {
                    preloader.remove();  // Eliminar del DOM
                }, 500);  // Tiempo para la transición
            }
        }, 2000);  // 2 segundos de espera antes de ocultar el preloader
    });
});