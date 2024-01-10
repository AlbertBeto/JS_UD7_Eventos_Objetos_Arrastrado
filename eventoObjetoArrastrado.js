'use strict'
let elemento = document.body
elemento.style.width="100%";
elemento.style.width="100vh";

let flotante = document.createElement("div");

flotante.style.width="100px";
flotante.style.height="100px"
flotante.style.backgroundColor="red";
flotante.style.position="absolute";
flotante.style.top="0px";
flotante.style.left="0px";

elemento.appendChild(flotante);

flotante.addEventListener("mousedown",(event)=>seleccion=event.target);
flotante.addEventListener("mouseup",()=>seleccion=null);



flotante = document.createElement("div");

flotante.style.width="100px";
flotante.style.height="100px"
flotante.style.backgroundColor="green";
flotante.style.position="absolute";
flotante.style.top="0px";
flotante.style.right="0px";

elemento.appendChild(flotante);
flotante.addEventListener("mousedown",(event)=>seleccion=event.target);
flotante.addEventListener("mouseup",()=>seleccion=null);

let seleccion = null;


document.body.addEventListener("mousemove", function(raton){
    if (seleccion){
        seleccion.style.left=raton.clientX-50+"px";
        seleccion.style.top=raton.clientY-50+"px";
    }
})


