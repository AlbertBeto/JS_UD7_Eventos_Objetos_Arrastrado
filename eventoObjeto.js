'use strict'

//Html vacio, elemento al body y dond pulsemos el raton nos dibuje un div rojo de 10x10 px.


let elemento = document.getElementById("prueba22");
let creado = document.getElementsByClassName("flotante");
function cuadraditoClick(event){
    
    
    console.log(event.clientX);
    console.log(event.clientY);
    

    let izq = event.clientX + "px"
    let alto = event.clientY + "px"
    let flotante=document.createElement("div");

    flotante.style.width="10px";
    flotante.style.height="10px"
    flotante.style.backgroundColor="red";

    flotante.style.position="absolute";
    flotante.style.top=alto;
    flotante.style.left=izq;

    flotante.style.class="flotante";

    elemento.appendChild(flotante);

    flotante.addEventListener("mousedown", function(evento){
        evento.target.remove();
        evento.stopPropagation();
    })
};




elemento.addEventListener("mousedown",cuadraditoClick);
