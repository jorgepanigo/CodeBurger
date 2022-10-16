const botonMenuResp = document.querySelector(".fa-bars")
const menuMobile = document.querySelector(".navbar__menu")


botonMenuResp.addEventListener("mousedown",toggleMenu,false)


function toggleMenu(event){

     console.log(event)

     menuMobile.classList.toggle("navbar__menu__mostar")
     menuMobile.classList.toggle("navbar__menu__ocultar")
}