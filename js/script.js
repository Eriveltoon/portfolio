
//Mapeia o evento de scroll na pág.
window.addEventListener("scroll", function() {
    const header = document.querySelector('#header .header-bg');
    if (window.scrollY > 600) {
        header.classList.add('rolagem');// Adiciona a classe quando a página é scrollada
    } else {
        header.classList.remove('rolagem');
    }
});