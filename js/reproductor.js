const botonPlay = document.querySelector("#botonPlay");
console.log(botonPlay)

const reproductor = document.querySelector("#reproductor");
console.log(reproductor);

botonPlay.addEventListener("click",cambiarVista);

const botonCerrar = document.querySelector("#botonCerrar");
botonCerrar.addEventListener("click",cerrarVista);

function cambiarVista(){
    reproductor.classList.add("fullscreen_show")
    reproductor.classList.remove("fullscreen_close")
}



function cerrarVista(){
    reproductor.classList.add("fullscreen_close")
    reproductor.classList.remove("fullscreen_show")
    const frame = document.getElementById("youTube");
    frame.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
    
}
