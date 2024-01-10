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
menu.style.position="absolute";
menu.style.id="contieneMenu";


let contenidoMenu = document.createTextNode('<form action="#"><label for="color">Escoge Color:</label><select name="color" id="color"><option value="blue">Azul</option><option value="red">Rojo</option><option value="green">Verde</option><option value="yellow">Amarillo</option></select><input type="submit" value="Crear"/></form>');

menu.appendChild(contenidoMenu);

//url sacado el xódigo: https://estilow3b.com/generar-formulario-html-javascript/#codesyntax_2
function GeneraForm(){
    ////Crear el objeto formulario
    let formulario=document.createElement("form");
 
    ////Crear el objeto label de titulo
    let titulo=document.createElement("label");
 
    ////Crear el objeto caja de texto Nombres
    let colorRojo=document.createElement("input");
 
    ////Crear el objeto caja de texto Apellidos
    let colorVerde=document.createElement("input");
 
    ////Crear el objeto caja de texto Email
    let colorAzul=document.createElement("input");
 
    ////Crear el objeto caja de texto Asunto del Mensaje
    let colorGris=document.createElement("input");
 
    ////Crear el objeto boton
    let boton=document.createElement("input");
 
    ////Asignar atributos al objeto formulario
        formulario.setAttribute('method', "post");//Asignar el atributo method
        formulario.setAttribute('action', "");//Asignar el atributo action
        formulario.setAttribute('style', "width:300px;margin: 0px auto");//Asignar el atributo style
 
        ////Asignar atributos al objeto caja de texto de Nombres
        cajaTextNombres.setAttribute('type', "text");//Asignar el atributo type
        cajaTextNombres.setAttribute('placeholder', "Nombres");//Asignar el atributo placeholder
        cajaTextNombres.setAttribute('style', "width:100%;margin: 10px 0px;padding: 5px");//Asignar el atributo style
 
        ////Asignar atributos al objeto caja de texto de Apellidos
        cajaTextApellidos.setAttribute('type', "text");//Asignar el atributo type
        cajaTextApellidos.setAttribute('placeholder', "Apellidos");//Asignar el atributo placeholder
        cajaTextApellidos.setAttribute('style', "width:100%;margin: 10px 0px;padding: 5px");//Asignar el atributo style
 
        ////Asignar atributos al objeto caja de texto de Email
        cajaTextEmail.setAttribute('type', "text");//Asignar el atributo type
        cajaTextEmail.setAttribute('placeholder', "Email");//Asignar el atributo placeholder
        cajaTextEmail.setAttribute('style', "width:100%;margin: 10px 0px;padding: 5px");//Asignar el atributo style
 
        ////Asignar atributos al objeto caja de texto de Asunto
        cajaTextAsunto.setAttribute('type', "text");//Asignar el atributo type
        cajaTextAsunto.setAttribute('placeholder', "Asunto");//Asignar el atributo placeholder
        cajaTextAsunto.setAttribute('style', "width:100%;margin: 10px 0px;padding: 5px");//Asignar el atributo style
 
    ////Asignar atributos al objeto boton
    boton.setAttribute('type', "button");//Asignar el atributo type	
        boton.setAttribute('value', "Enviar");//Asignar el atributo value
        boton.setAttribute('style', "width:100px;margin: 10px 0px;padding: 10px;background:#F05133;color:#fff;border:solid 1px #000;");//Asignar el atributo style
        boton.setAttribute('onclick', "alert('Se envio el mensaje')");//Asignar el metodo onclick
 
        titulo.innerHTML='<h1>Contacto</h1>';//Asignar el texto de titulo en el objeto titulo
        formulario.appendChild(titulo);//Agregar el objeto titulo al objeto formulario
        formulario.appendChild(cajaTextNombres);//Agregar el objeto caja de texto Nombres al objeto formulario
        formulario.appendChild(cajaTextApellidos);//Agregar el objeto caja de texto Apellidos al objeto formulario
        formulario.appendChild(cajaTextEmail);//Agregar el objeto caja de texto Email al objeto formulario
        formulario.appendChild(cajaTextAsunto);//Agregar el objeto caja de texto Asunto al objeto formulario
        formulario.appendChild(cajaTextMensaje);//Agregar el objeto area de texto del Mensaje al objeto formulario
        formulario.appendChild(boton);//Agregar el objeto boton al objeto formulario
        document.getElementById('ContentFormulario').appendChild(formulario);//Agregar el formulario a la etiquete con el ID			
}
 
