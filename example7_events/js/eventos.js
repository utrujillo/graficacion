// http://keycode.info/
(function(){
  var canvas, context;

  canvas = document.getElementById("canvas");
  context = canvas.getContext("2d");

  canvas.width = 800;
  canvas.height = 400;

  //Identificando tecla presionada
  function callkeydownhandler( evt ) {
    var ev   = (evt) ? evt : event;
    var code = (ev.which) ? ev.which : event.keyCode;

    methods.verifyKey( code );
  }

  // Escuchando tecla presionada
  if (window.document.addEventListener) {
    window.document.addEventListener( "keydown", callkeydownhandler, false );
  } else {
    window.document.attachEvent( "onkeydown" , callkeydownhandler);
  }

  methods = {
    pos: 0,
    noErrors: 0,
    showKeyToPress: function(){
      levelCheck =  methods.niveles['level1'][0];
      if (methods.pos < levelCheck.length){
        console.log( "Presionar "+ levelCheck[methods.pos] );
      }else{
        console.log("Juego Terminado: "+ methods.noErrors );
      }
    },
    verifyKey: function( keyCode ){
      userKeyPressed = String.fromCharCode( keyCode ).toLowerCase();
      levelCheck     =  methods.niveles['level1'][0];
      
      if( levelCheck[methods.pos] == userKeyPressed || ( (levelCheck[methods.pos] == "ñ") && keyCode == 186 ) ){
        methods.pos++;
        methods.showKeyToPress();
      }else{
        methods.noErrors++;
      }
      // switch( key ){
      //   case 65: { console.log("Tecla a presionada") } break;
      //   case 66: { console.log("Tecla b presionada") } break;
      //   case 67: { console.log("Tecla c presionada") } break;
      // }
    },
    niveles : {
      level1: [
        ["a","s","d","f","g","h","j","k","l","ñ","a","s","d","f","g","h","j","k","l","ñ","a","s","d","f","g","h","j","k","l","ñ"],
        ["g","f","d","s","a","h","j","k","l","ñ","g","f","d","s","a","h","j","k","l","ñ","g","f","d","s","a","h","j","k","l","ñ"],
        ["a","d","s","f","g","h","j","l","k","ñ","a","d","s","f","g","h","j","l","k","ñ","a","d","s","f","g","h","j","l","k","ñ"],
      ]
    }
  }

  methods.showKeyToPress();

}());
