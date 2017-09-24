var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d');
context.font = '38pt Arial';
// context.fillStyle = 'cornflowerblue';
// context.strokeStyle = 'blue';
context.fillStyle = '#F2C777';
context.strokeStyle = '#024959';
saludo = "Hola mundo en Canvas";
context.fillText( saludo, canvas.width/2 - 265, canvas.height/2 + 15);
context.strokeText( saludo, canvas.width/2 - 265, canvas.height/2 + 15 );
