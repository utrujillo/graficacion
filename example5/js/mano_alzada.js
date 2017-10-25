(function() {

  // Variables
  var canvas, context, point, style;

  // Definiendo puntos iniciales
  function init() {

    point = {
      drag: { x:10, y:10 },
      canDraw: false
    };
    
    // Default Styles
    style = {
      point: { radius: 3, width: 2, color: "#900", fill: "rgba(200,200,200,0.5)", arc1: 0, arc2: 2 * Math.PI },
      canvasSize: { width: 600, height: 300 }
    }

    // Event Handlers
    canvas.onmousedown = dragStart;
    canvas.onmousemove = dragging;
    canvas.onmouseup = canvas.onmouseout = dragEnd;
    
    // Dibujando Canvas
    drawCanvas();
  }
  
  // Dibunando Canvas
  function drawCanvas() {
    canvas.width = style.canvasSize.width;
    canvas.height = style.canvasSize.height;
  }
  
  // start dragging -> Se ejecuta para calcular cuando se empezo a realizar el arrastre
  function dragStart(e) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    e = mousePos(e);
    point.canDraw = true;
  }
  
  // dragging -> Se ejececuta y actualiza el canvas durante todo el arraste del mouseclick
  function dragging(e) {
    if (point.canDraw) {
      // Actualizamos la posicion del cursor
      e = mousePos(e);
      point.drag.x = e.x;
      point.drag.y = e.y;

      context.beginPath();
      context.fillStyle = style.point.fill;
      context.arc(point.drag.x, point.drag.y, style.point.radius, style.point.arc1, style.point.arc2, true);
      context.fill();
      context.stroke();
    }
  }
   
  // dragEnd -> Se ejecuta para terminar el proceso de arrastre y restaurar las variables 
  function dragEnd(e) {
    // Se pone canDraw false, para indicar que no ya no se permitira dibujar
    point.canDraw = false;
  }

  // event parser -> Obteniendo la posicion del cursor
  function mousePos(event) {
    event = (event ? event : window.event);
    return {
      x: event.pageX - canvas.offsetLeft,
      y: event.pageY - canvas.offsetTop
    }
  }
  
  // Variables iniciales
  canvas = document.getElementById("canvas");
  context = canvas.getContext("2d");

  init();
  
})();
