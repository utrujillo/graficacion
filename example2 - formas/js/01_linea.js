var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

// Dibujando la primera linea
context.beginPath();
context.strokeStyle = "#000000";
context.moveTo(100, 150);
context.lineTo(450, 50);
context.lineWidth = 15;
context.stroke();
context.closePath();

// Dibujando una segunda linea
context.beginPath();
context.strokeStyle = "#00ff00";
context.moveTo(100, 75);
context.lineTo(250, 300);
context.lineWidth = 2;
context.stroke();
context.closePath();

