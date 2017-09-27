var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d');

context.font = '38pt Arial';
context.strokeStyle = 'blue';
saludo = "Hola mundo en Canvas";

context.fillText( saludo, canvas.width/2 - 265, canvas.height/2 + 15);
context.strokeText( saludo, canvas.width/2 - 265, canvas.height/2 + 15 );
