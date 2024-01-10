'use strict'

//let elemento = document.getElementById("prueba");


//Es importante que al crear el evento llamemos a la función y no le pongamos los()
//No poner los parentesis a la funcion para que no la realice solo la tenga guardada.


/*
//Este era para combinarlo con el evento en el html.
function inputClick(element, event) {
    // Mostrará "Un evento click ha sido detectado en #input1"
    alert("Un evento " + event.type + " ha sido detectado en " + element.id);
}
*/

/*
// Esto solo permite capturar un evento y no muy fino.
elemento.onclick=inputClick2; 
function inputClick2(event) {
    // Mostrará "Un evento click ha sido detectado en #input1"
    alert("Un evento " + event.type + " ha sido detectado en " + this.id);
}
*/

//RECOMENDADO EVENT LISTENERS

// Crea un div flotante a la derecha que muestre un contador de las veces que haces doble click
// en el input. 

/*
let contador = document.getElementById("contador");
let cuenta = 1;

function inputClickSumaContador(event) {
    // Mostrará "Un evento click ha sido detectado en #input1"
    contador.textContent=cuenta;
    cuenta++;
}

elemento.addEventListener("click",inputClickSumaContador);
*/




function inputClick(event){
//Vamos a ver si xiste un elemento que se llame contador
    let contador=document.getElementById("contador");

if(event.button==0){


    console.log(event.target.id)
    if(contador == undefined){
        //Si no existe, lo creo
        contador=document.createElement("div");
        contador.style.float="right";
        contador.style.backgroundColor="pink";
        contador.textContent="1";
        contador.id="contador";
        document.body.appendChild(contador);
    }
    else{
        contador.textContent=(parseInt(contador.textContent)+1);
    }

}

}
let elemento = document.getElementById("prueba1");
elemento.addEventListener("mousedown",inputClick);

elemento = document.getElementById("prueba2");
elemento.addEventListener("mousedown",inputClick);

