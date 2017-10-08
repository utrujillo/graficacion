(function() {

  // Variables
  var canvas, context, code, point, style, drag = null, dPoint;

  // Definiendo puntos iniciales
  function init(cName) {

    point = {
      p1: { x:100, y:250 },
      p2: { x:400, y:250 }
    };
    
    // Si queremos aplicar un bezier Cuadratico
    if (cName == 'quadratic') {
      point.cp1 = { x: 250, y: 100 };
    }
    else {
      // Si deseamos aplicar un bezier normal
      point.cp1 = { x: 150, y: 100 };
      point.cp2 = { x: 350, y: 100 };
    }
    
    // Default Styles
    style = {
      curve:  { width: 6, color: "#333" },
      cpline: { width: 1, color: "#C00" },
      point: { radius: 10, width: 2, color: "#900", fill: "rgba(200,200,200,0.5)", arc1: 0, arc2: 2 * Math.PI }
    }
    
    // line style defaults
    context.lineCap = "round";
    context.lineJoin = "round";

    // Event Handlers
    canvas.onmousedown = dragStart;
    canvas.onmousemove = dragging;
    canvas.onmouseup = canvas.onmouseout = dragEnd;
    
    // Dibujando Canvas
    drawCanvas();
  }
  
  
  // Dibunando Canvas
  function drawCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    
    // Lineas de control
    context.lineWidth = style.cpline.width;
    context.strokeStyle = style.cpline.color;
    context.beginPath();
    context.moveTo(point.p1.x, point.p1.y);
    context.lineTo(point.cp1.x, point.cp1.y);

    // Si seleccionamos bezier normal
    if (point.cp2) {
      context.moveTo(point.p2.x, point.p2.y);
      context.lineTo(point.cp2.x, point.cp2.y);
    }
    else {
      // Si seleccionamos bezier cuadratico
      context.lineTo(point.p2.x, point.p2.y);
    }
    context.stroke();
    
    // Curva
    context.lineWidth = style.curve.width;
    context.strokeStyle = style.curve.color;
    context.beginPath();
    context.moveTo(point.p1.x, point.p1.y);
    if (point.cp2) {
      context.bezierCurveTo(point.cp1.x, point.cp1.y, point.cp2.x, point.cp2.y, point.p2.x, point.p2.y);
    }
    else {
      context.quadraticCurveTo(point.cp1.x, point.cp1.y, point.p2.x, point.p2.y);
    }
    context.stroke();

    // Puntos de control
    for (var p in point) {
      context.lineWidth = style.point.width;
      context.strokeStyle = style.point.color;
      context.fillStyle = style.point.fill;
      context.beginPath();
      context.arc(point[p].x, point[p].y, style.point.radius, style.point.arc1, style.point.arc2, true);
      context.fill();
      context.stroke();
    }
    
    showCode();
  }
  
  
  // show canvas code
  function showCode() {
    if (code) {
      code.firstChild.nodeValue = 
        "canvas = document.getElementById(\"canvas\");\n"+
        "context = canvas.getContext(\"2d\")\n"+
        "context.moveTo(" + point.p1.x + ", " + point.p1.y +");\n" +
        (point.cp2 ? 
          "context.bezierCurveTo("+point.cp1.x+", "+point.cp1.y+", "+point.cp2.x+", "+point.cp2.y+", "+point.p2.x+", "+point.p2.y+");" :
          "context.quadraticCurveTo("+point.cp1.x+", "+point.cp1.y+", "+point.p2.x+", "+point.p2.y+");"
        ) +
        "\ncontext.stroke();"
      ;
    }
  }
  
  
  // start dragging -> Se ejecuta para calcular cuando se empezo a realizar el arrastre
  function dragStart(e) {
    e = mousePos(e);
    var dx, dy;
    for (var p in point) {
      dx = point[p].x - e.x;
      dy = point[p].y - e.y;
      if ((dx * dx) + (dy * dy) < style.point.radius * style.point.radius) {
        // p -> el punto de control que se ha presionado
        drag = p;
        // e -> es la posición actual del puntero 
        dPoint = e;
        // Cambiamos el estilo de cursor, para identificar que estamos arrastrando
        canvas.style.cursor = "move";
        return;
      }
    }
  }
  
  
  // dragging -> Se ejececuta y actualiza el canvas durante todo el arraste del mouseclick
  function dragging(e) {
    if (drag) {
      // Actualizamos la posicion del cursor
      e = mousePos(e);
      // Actualizamos las nuevas posiciones del punto de control con las nuevas coordenadas
      // e.x -> Es la posicion actual de mi puntero
      // dPoint.x -> Es la posicion del puntero cuando se inicio el arrastre
      // e.x - dPoint.x -> Calcula la cantidad de elementos que se desplazo el raton en x
      point[drag].x += e.x - dPoint.x;
      point[drag].y += e.y - dPoint.y;
      dPoint = e;

      // Redibujamos el canvas
      drawCanvas();
    }
  }
  
  
  // dragEnd -> Se ejecuta para terminar el proceso de arrastre y restaurar las variables 
  function dragEnd(e) {
    // Se pone drag null, para indicar que no se esta arrastrando ningun punto
    drag = null;
    canvas.style.cursor = "default";
    drawCanvas();
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
  code = document.getElementById("code");
  context = canvas.getContext("2d");

  // Tipo de bezier a utilizar
  // bezier -> usa bezier
  // quadratic -> usa bezier cuadratico
  init(canvas.className);
  
})();
