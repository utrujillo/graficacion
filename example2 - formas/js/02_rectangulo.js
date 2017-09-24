var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

/* 
  Canvas API provee 3 metodos para
  - Limpiar -> clearRect(double x, double y, double w, double h)
  - Dibujar -> strokeRect(double x, double y, double w, double h)
  - Rellenar -> fillRect(double x, double y, double w, double h)
*/

context.lineJoin = 'round';
context.lineWidth = 15;
context.font = '24px Helvetica';
context.fillText('Da un click para borrar', 175, 40);

// Creamos el contorno de un rectangulo
context.strokeRect(75,60, 200, 200);

// Rellenamos un rectangulo
context.fillRect(325,60, 200, 200);

context.canvas.onmousedown = function (e) {
   context.clearRect(0, 0, canvas.width, canvas.height);
};

