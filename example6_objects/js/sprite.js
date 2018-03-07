(function(){

  var canvas, mario, marioSprite;

  function init () {
    window.requestAnimationFrame(init);
    mario.update();
    mario.render();
  }

  function sprite(options){
    var that = {},
        frameIndex = 0,
        tickCount = 0,
        ticksPerFrame = options.ticksPerFrame || 0,
        numberOfFrames = options.numberOfFrames || 1;

    that.context = options.context;
    that.width = options.width;
    that.height = options.height;
    that.image = options.image;
    

    that.render = function () {
      that.context.clearRect(0, 0, that.width, that.height);
      // console.log( that.width / numberOfFrames );
      // Draw the animation
      // Donde s -> source, d -> destiny
      // context.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh)
      // console.log( frameIndex );
      that.context.drawImage(
        that.image, // Imagen original
        frameIndex * that.width, // sx -> Source x (Frame actual)
        0, // sy -> Source y
        that.width, // sw -> Frame width
        that.height, // sh -> Frame height
        0, // dx -> Destination x
        0, // dy -> Destination y
        that.width, // dw -> Frame width
        that.height // dy -> Frame height
      );

    };

    that.loop = options.loop;

    that.update = function () {
      tickCount += 1;

      if (tickCount > ticksPerFrame) {
        tickCount = 0;
        
        // If the current frame index is in range
        if (frameIndex < (numberOfFrames - 1) ) {  
            // Go to the next frame
            frameIndex += 1;
        } else {
            frameIndex = 0;
        }
      }
    };

    return that;
  }

  // Especifica Lienzo
  canvas = document.getElementById("canvas");
  canvas.width = 800;
  canvas.height = 400;

  // Creo el sprite Mario
  var zeroSprite = new Image();
  

  var mario = sprite({
    context: canvas.getContext("2d"),
    width: 52,
    height: 51,
    image: zeroSprite,
    // Frames
    numberOfFrames: 16,
    ticksPerFrame: 4
  });


  zeroSprite.addEventListener("load", init);
  zeroSprite.src = "images/zeroSprite.png";

} ());
