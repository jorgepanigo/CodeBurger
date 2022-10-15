const botonPlay = document.querySelector("#botonPlay");
const reproductor = document.querySelector("#reproductor");
const botonCerrar = document.querySelector("#botonCerrar");

botonPlay.addEventListener("click",cambiarVista);
botonCerrar.addEventListener("click",cerrarVista);

function cambiarVista(){
    reproductor.classList.add("fullscreen_show")
    reproductor.classList.remove("fullscreen_close")
}

function cerrarVista(){
    reproductor.classList.add("fullscreen_close")
    reproductor.classList.remove("fullscreen_show")
    
    const frame = document.querySelector("#youTube");
    frame.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');  
}
