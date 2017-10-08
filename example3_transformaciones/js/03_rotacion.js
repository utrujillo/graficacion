// Declaración de mi canvas
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

// Declaracion de variables de boton
var btnRotate  = document.getElementById("rotacion");
var btnReset = document.getElementById("reset");

// Variables con valores base
var initW = 100;
var initH = 100;

// Traslado mi punto base para rotar
context.translate( ( canvas.width/2 ), ( canvas.height / 2 ) );
// Creamos un rectangulo
context.fillRect( 0, 0 , initW, initH );

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
btnRotate.addEventListener("click", squareRotate);

/*
  Agregamos las funciones
*/
function squareRotate()
{
  cantidadRotar = document.getElementById("rotarCantidad");

  // Comparamos si 
  if( cantidadRotar.value > 0 )
  {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.rotate( Math.PI / 180 * cantidadRotar.value );
    context.fillRect( 0, 0 , initW, initH );
  }
  else
  {
    alert("La cantidad a rotar es incorrecta o es 0\n Favor de ingresar otra cantidad");
  }
}
