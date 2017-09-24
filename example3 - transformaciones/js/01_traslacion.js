// Declaración de mi canvas
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

// Declaracion de variables de boton
var btnMove = document.getElementById("move");
var btnReset = document.getElementById("reset");

// Creamos un rectangulo
context.fillRect(10,10, 20, 20);

/*
  La primera forma de utilizar listeners es la siguiente:
  Se crea el listener y se pasa como parametro:
  1.- El metodo activador, en este caso click
  2.- La funcion a ejecutar directamente
*/

btnReset.addEventListener("click", function(){
  location.reload();
})

/*
  La segunda forma de utilizar listeners es la siguiente:
  Se crea el listener y se pasa como parametro:
  1.- El metodo activador, en este caso click
  2.- El nombre de la funcion a ejecutar
*/
btnMove.addEventListener("click", squareMove);

/*
  Agregamos las funciones
*/
function squareMove()
{
  // Obtenemos el objecto positionX y positionY
  var posX = document.getElementById("positionX");
  var posY = document.getElementById("positionY");
  
  // Comparamos si 
  if( posX.value.length > 0 && posY.value.length > 0 )
  {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillRect(posX.value, posY.value, 20, 20);
  }
  else
  {
    alert("Favor de ingresar una posicion X y Y \n para desplazar el cuadro");
  }
}
