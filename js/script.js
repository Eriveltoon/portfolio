
//Mapeia o evento de scroll na pág.
window.addEventListener("scroll", function () {
    const header = document.querySelector('#header .header-bg');
    if (window.scrollY > 600) {
        header.classList.add('rolagem');// Adiciona a classe quando a página é scrollada
    } else {
        header.classList.remove('rolagem');
    }
});


//Ativa o menu Hamburguer p/ quando for clicado add a classe active e aparecer as opções do menu
const menuHamburguer = document.querySelector('.menu-hamburguer');
const menuMobile = document.querySelector('.menu-mobile');
const menuLinks = document.querySelectorAll('.header-menu-hamburguer a');

menuHamburguer.addEventListener('click', function () {
    menuMobile.classList.toggle('active');
});

menuLinks.forEach(function (link) {
    link.addEventListener('click', function () {
        menuMobile.classList.remove('active');
    });
});

//Efeito do nome sendo digitado
function escreverNome(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => {
            elemento.innerHTML += letra;
        }, 110 * i);
    })
}

const titulo =  document.querySelector(".texto");
escreverNome(titulo);