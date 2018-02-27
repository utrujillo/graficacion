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

var squares = [ square1, square2, square3 ];

for (var i = 0; i <= squares.length - 1; i++) {
  context.fillRect( squares[i].posX, squares[i].posY, squares[i].width, squares[i].heigth);
}
