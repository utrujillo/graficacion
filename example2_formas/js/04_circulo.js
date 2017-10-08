// Creamos el canvas para poder trabajar con javascript
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

// Especificamos el tamaño de nuestro canvas
canvas.width = 600;
canvas.height = 150;
var radius = 50;

// Dibujando el circulo completo
context.beginPath();
// context.arc(x,y,radius,startAngle,endAngle,counterclockwise);
context.arc(70, canvas.height/2, radius, 0*Math.PI, 2*Math.PI, false);
context.fillStyle = 'green';
context.fill();
context.lineWidth = 5;
context.strokeStyle = '#003300';
context.stroke();
context.closePath();

// Dibujando medio circulo
context.beginPath();
context.arc(canvas.width/2, canvas.height/2, radius, 0, Math.PI, false);
context.lineWidth = 3;
context.fillStyle = '#FF404C';
context.fill();
context.strokeStyle = '#012C40';
context.stroke();
context.closePath();

// Dibujando circulo 3/4
context.beginPath();
context.arc(520, canvas.height/2, radius, 0, 0.5*Math.PI,true);
context.lineWidth = 5;
context.strokeStyle = '#707070';
context.stroke();
context.closePath();

// Dibujando circulo 1/4
context.beginPath();
context.strokeStyle = '#363636';
context.arc(525, canvas.height/2 + 5, radius, 0, 0.5*Math.PI,false);
context.stroke();
context.closePath();


