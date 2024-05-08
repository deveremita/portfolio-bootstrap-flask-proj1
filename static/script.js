/*Abre e fecha menu lateral em modo mobile*/

const menuMobile = document.querySelector('.menu-mobile');
const body = document.querySelector('body');

menuMobile.addEventListener('click', () => {
    menuMobile.classList.contains("bi-list")
        ? menuMobile.classList.replace("bi-list", "bi-x")
        : menuMobile.classList.replace("bi-x", "bi-list");
    body.classList.toggle("menu-nav-active");
});

/*Fecha o menu quando clicar em algum item e muda o icone para list*/

const navItems = document.querySelectorAll(".nav-item");

navItems.forEach(navItem => {
    navItem.addEventListener("click", () => {
        if (body.classList.contains("menu-nav-active")) {
            body.classList.remove("menu-nav-active");
            menuMobile.classList.replace("bi-x", "bi-list");
        }
    });
});

/*Animar todos os itens na tela que tiverem meu atributo data-anime */

const items = document.querySelectorAll("[data-anime]");

const animeScroll = () => {
    const windowTop = window.scrollY + window.innerHeight * 0.85;
    console.log(windowTop);
    items.forEach(element => {
        if (windowTop > element.offsetTop) {
            element.classList.add('animate');
        } else {
            element.classList.remove("animate");
        }
    });
};

animeScroll();
window.addEventListener("scroll", () => {
    animeScroll();
});
/*Ativar o carregamento no botão de enviar formulário*/
const btnEnviar = document.querySelector("#btn-enviar")
const btnEnviarLoader = document.querySelector("#btn-enviar-loader")

btnEnviar.addEventListener("click", ()=>{
    btnEnviarLoader.style.display = "block";
    btnEnviar.style.display="none"
})
//tira a mensagem de sucesso despois de 5 segundos
setTimeout(() => {
    document.querySelector('#alerta').style.display = 'none';
}, 5000)