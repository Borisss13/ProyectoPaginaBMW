// JavaScript para el menú responsive

document.addEventListener('DOMContentLoaded', function() {
    
    // Seleccionar elementos
    const menuToggle = document.getElementById('menuToggle');
    const sideMenu = document.getElementById('sideMenu');
    const closeBtn = document.getElementById('closeBtn');
    
    // Abrir menú
    menuToggle.addEventListener('click', function() {
        sideMenu.classList.add('menu-open');
    });
    
    // Cerrar menú
    closeBtn.addEventListener('click', function() {
        sideMenu.classList.remove('menu-open');
    });
    
    // Cerrar con clic fuera del menú
    document.addEventListener('click', function(event) {
        const clickFuera = !sideMenu.contains(event.target) && !menuToggle.contains(event.target);
        
        if (clickFuera && sideMenu.classList.contains('menu-open')) {
            sideMenu.classList.remove('menu-open');
        }
    });
    
    // Cerrar al hacer clic en un enlace
    const enlaces = document.querySelectorAll('.menu-links a');
    enlaces.forEach(function(enlace) {
        enlace.addEventListener('click', function() {
            sideMenu.classList.remove('menu-open');
        });
    });
    
});