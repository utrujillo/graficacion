var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

// Especificaciones generales
context.lineJoin = 'round';
context.lineWidth = 15;
context.font = '24px Helvetica';

// Escribimos el texto
context.fillText('Da clic para borrar', 175, 155);

// Contorno
context.strokeStyle = '#012D41';
context.strokeRect(75, 50, 200, 200);

// Relleno
context.fillStyle = 'rgba(27,165,184,.8)';
context.fillRect(325, 50, 200, 200);

context.canvas.onmousedown = function (e) {
   context.clearRect(0, 0, canvas.width, canvas.height);
};
