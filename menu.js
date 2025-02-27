let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')


btnMenu.addEventListener('click',() =>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click',() =>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click',() =>{
    menu.classList.remove('abrir-menu')
})

document.addEventListener("DOMContentLoaded", function() {
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('visible');
        }, index * 150); // Delay para cada card
    });
});