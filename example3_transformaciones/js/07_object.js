/*
  Para la creación de objetos, recomendable dar una leida a la siguiente URL
  https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Trabajando_con_objectos
 */

var canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");

function square(posX, posY, w, h){
  this.posX = posX;
  this.posY = posY;
  this.width = w;
  this.heigth = h;
}

var square1 = new square( 30, 30, 20, 20 );
var square2 = new square( 100, 100, 50, 50 );
var square3 = new square( 200, 200, 80, 80 );
var square4 = {
  posX: 350,
  posY: 50,
  width: 10,
  heigth: 10,
  saludo: function(){
    console.log("Ejecutando la funcion saludo");
  }

}

var squares = [ square1, square2, square3, square4 ];

for (var i = 0; i <= squares.length - 1; i++) {
  context.fillRect( squares[i].posX, squares[i].posY, squares[i].width, squares[i].heigth);
}


square4.saludo();


// niveles = {
//   level1: [
//     ["a","s","d","f","g","h","j","k","l","ñ","a","s","d","f","g","h","j","k","l","ñ","a","s","d","f","g","h","j","k","l","ñ"],
//     ["g","f","d","s","a","h","j","k","l","ñ","g","f","d","s","a","h","j","k","l","ñ","g","f","d","s","a","h","j","k","l","ñ"],
//     ["a","d","s","f","g","h","j","l","k","ñ","a","d","s","f","g","h","j","l","k","ñ","a","d","s","f","g","h","j","l","k","ñ"],
//      ...
//     ]
//   level2: [
//       //...
//     ]
//   }
