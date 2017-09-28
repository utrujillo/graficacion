// Declaración de mi canvas
var canvas  = document.getElementById("canvas");
var context = canvas.getContext("2d");

// Declaracion de variables de boton
var btnScale = document.getElementById("scale");
var btnReset = document.getElementById("reset");

// Declaración de variables de input/selects
var tipoEscalado = document.getElementById("tipoEscalado");
var posX         = document.getElementById("positionX");
var posY         = document.getElementById("positionY");

// Variables con valores base
var initW = 20;
var initH = 20;
var escalaX = 0;
var escalaY = 0;

// Creamos un rectangulo
context.font = "14pt Helvetica";
context.fillText('20, escala actual 1:1', 10, 20);
context.fillRect( ( canvas.width/2 - initW/2 ), ( canvas.height / 2 - initH / 2 ) , initW, initH );

/*
  Operación y funcionamiento del Select Option(Lista Menú)
*/
tipoEscalado.addEventListener( "change", enableInputs );

// Funcion creada para habilitar y deshabilitar los input text
// 1.- Si se seleciona Escalamiento Uniforme se habilita el input para posicion "X"
// 2.- Si se selecciona Escalamiento diferencial se habilita el input para la posicion "X" y "Y"
function enableInputs(){

  switch( this.value )
  {
    case "1":{
      posX.disabled = false;
      posY.disabled = true;
    } break;
    case "2":{
      posX.disabled = false;
      posY.disabled = false;
    } break;
    default: {
      posX.disabled = true;
      posY.disabled = true;
    }
  }

}


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
btnScale.addEventListener( "click", squareScale );

/*
  Agregamos las funciones para el escalamiento
*/
function squareScale()
{
  // Comparamos si 
  if( posY.disabled == true && posX.value.length > 0 )
  {
    // En el termino de la escala seria el siguiente 1:5, indicando que por cada centimetro, mi escala sera de 5
    // algo como escala = initW / posX.value
    escalaX = initW * posX.value;

    // Limpiamos el lienzo y dibujamos la nueva imagen a escala
    context.clearRect( 0, 0, canvas.width, canvas.height );
    context.fillText('20, Escalamiento Uniforme 1:'+ posX.value  , 10, 20);
    context.fillRect( ( canvas.width/2 - escalaX/2 ) , ( canvas.height/2 - escalaX/2 ) , escalaX, escalaX );
  }
  else if( posY.disabled == false && posX.disabled == false && posX.value.length > 0 && posY.value.length > 0 )
  {
    // En el termino de la escala seria el siguiente 1:5, indicando que por cada centimetro, mi escala sera de 5
    // algo como escala = initW / posX.value
    escalaX = initW * posX.value;
    escalaY = initH * posY.value;

    // Limpiamos el lienzo y dibujamos la nueva imagen a escala
    context.clearRect( 0, 0, canvas.width, canvas.height );
    context.fillText( "20, Escalamiento Diferencial, En X 1:"+ posX.value +" , En Y 1:"+ posY.value, 10, 20);
    context.fillRect( ( canvas.width/2 - escalaX/2 ) , ( canvas.height/2 - escalaY/2 ) , escalaX, escalaY );
  }
  else
  {
    alert("1.- Favor de seleccionar el tipo de escalamiento deseado\n2.- Ingresar sus valores correspondientes en X o Y segun sea el caso");
  }
}
