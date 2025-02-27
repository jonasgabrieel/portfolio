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

document.getElementById('telefone').addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 10) {
        e.target.value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    } else {
        e.target.value = value.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
    }
});

document.getElementById('contato').addEventListener('submit', function (e) {
    e.preventDefault();

    let form = e.target;
    let formData = new FormData(form);

    fetch(form.action, {
        method: form.method,
        body: formData,
        headers: { 'Accept': 'application/json' }
    }).then(response => {
        if (response.ok) {
            let toast = document.getElementById('toast');
            toast.style.display = 'block';

            // Remove após 4 segundos
            setTimeout(() => {
                toast.style.animation = 'fadeOut 0.5s ease-in-out';
                setTimeout(() => {
                    toast.style.display = 'none';
                    toast.style.animation = 'fadeIn 0.5s ease-in-out'; // Reseta a animação
                }, 500);
            }, 4000);

            form.reset();
        } else {
            alert("Erro ao enviar o formulário. Tente novamente.");
        }
    }).catch(error => {
        alert("Erro ao enviar o formulário. Verifique sua conexão.");
    });
});