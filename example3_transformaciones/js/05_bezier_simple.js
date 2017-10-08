canvas = document.getElementById("canvas");
context = canvas.getContext("2d")

context.moveTo(120, 150);
context.bezierCurveTo(173, 304, 386, 29, 467, 173);
context.stroke();
