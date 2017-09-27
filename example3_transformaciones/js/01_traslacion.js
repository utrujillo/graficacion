// Declaración de mi canvas
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

// Declaracion de variables de boton
var btnMove  = document.getElementById("move");
var btnAnimar= document.getElementById("animar");
var btnReset = document.getElementById("reset");

// Creamos un rectangulo
context.fillRect(0,0, 20, 20);

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

// Se crea el listener que se ejecuta cuando se presiona el boton Animar
btnAnimar.addEventListener( "click", squareAnimate );

// Funcion ejecutada cuando se manda a llamar el listener al presionar el boton Animar
function squareAnimate()
{
  // Obtenemos el objecto positionX y positionY
  var posX = document.getElementById("positionX");
  var posY = document.getElementById("positionY");

  // Posiciones iniciales para realizar la animación
  var initPositionX = 0;
  var initPositionY = 0;
  
  // Comparamos si 
  if( posX.value.length > 0 && posY.value.length > 0 )
  {
    // Realizamos la animación utilizando un metodo con recursividad
    // en donde estaremos llamando el metodo squareAnimate hasta que se cumpla la condición
    slowMotion( posX, posY, initPositionX, initPositionY, context );
  }
  else
  {
    alert("Favor de ingresar una posicion X y Y \n para desplazar el cuadro");
  } 
}


function slowMotion( posX, posY, initPositionX, initPositionY, context )
{
  if (initPositionX < posX.value)
  {
    setTimeout(function(){
      // Limpiamos mi canvas
      context.clearRect(0, 0, canvas.width, canvas.height);
      // Actualizamos las coordenadas
      incrementoEnY = posY.value/posX.value;
      initPositionX = ( initPositionX < posX.value ) ? initPositionX+1 : posX.value ;
      initPositionY += incrementoEnY;
      
      // Posicionamos el punto en las nuevas coordenadas
      context.fillRect(initPositionX, initPositionY, 20, 20);
      slowMotion( posX, posY, initPositionX, initPositionY, context );
    }, 1);
  }
}
