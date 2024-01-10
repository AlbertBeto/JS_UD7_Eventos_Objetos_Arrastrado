'use strict'

//Crea un desplegable o inbox parte superior donde escoger el color
//Boton de crear que crea un rectangulo del color escogido en el centro
// Podemos crear varios rectangulos.
//Los rectangulos se deben poder mover
//Crear rectangulo negro o icono papelera abajo derecha
//Los rectangulos arrastros o que toquen el rectangulo negro se deben eliminar.

let elemento = document.body
elemento.style.width="100%";
elemento.style.width="100vh";

let menu = document.createElement("div");
let contenidoMenu = document.createTextNode(
<form action="#">
      <label for="color">Escoge Color:</label>
      <select name="color" id="color">
        <option value="blue">Azul</option>
        <option value="red">Rojo</option>
        <option value="green">Verde</option>
        <option value="yellow">Amarillo</option>
      </select>
      <input type="submit" value="Crear"/>
</form>);

menu.appendChild(contenidoMenu);