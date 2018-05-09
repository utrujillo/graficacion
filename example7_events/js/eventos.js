// http://keycode.info
(function(){
	var canvas, context;
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");

	canvas.width = 600;
	canvas.height = 400;

	context.fillRect(100,100, 40, 40);
	context.stroke();

	function callkeydownhandler( evt ){
		var ev = (evt) ? evt : event;
		var code = (ev.wich) ? ev.wich : event.keyCode;

		methods.verifyKey( code );
	}

	if(window.document.addEventListener){
		window.document.addEventListener("keydown", callkeydownhandler, false);
	}else{
		window.document.attachEvent("onkeydown", callkeydownhandler);
	}

	methods = {
		pos: 0,
		noErrors: 0,
		noAcepts: 0,
		ctx: context,
		niveles : {
		  level1: [
			    // ["a","s","d","f","g","h","j","k","l","ñ","a","s","d","f","g","h","j","k","l","ñ","a","s","d","f","g","h","j","k","l","ñ"],
			     ["a","s"],
			    ["g","f","d","s","a","h","j","k","l","ñ","g","f","d","s","a","h","j","k","l","ñ","g","f","d","s","a","h","j","k","l","ñ"],
			    ["a","d","s","f","g","h","j","l","k","ñ","a","d","s","f","g","h","j","l","k","ñ","a","d","s","f","g","h","j","l","k","ñ"],
		  ]
		},
		showKeyToPress: function(){
			
			var arrayToCheck = methods.niveles['level1'][0];

			console.log( arrayToCheck[methods.pos] );

		},
		verifyKey: function( key ){
			var character = String.fromCharCode(key).toLowerCase();
			var arrayToCheck = methods.niveles['level1'][0];

			// console.log( (arrayToCheck[methods.pos] == "ñ" &&  key == 192 ) );
			
			if( character ==  arrayToCheck[methods.pos] || (arrayToCheck[methods.pos] == "ñ" &&  key == 192 ) ){
				methods.pos++;
				methods.noAcepts++;
				console.log( arrayToCheck.length+ " "+ methods.pos );
				if( arrayToCheck.length > methods.pos ){
					methods.showKeyToPress();
				}else{
					methods.createGraphic();
          var basePath = window.location.href.substring(0, window.location.href.lastIndexOf("/")+1);
				}
			}else{
				methods.noErrors++;
			}


			// console.log( "Aciertos: "+ methods.noAcepts+" Errores: "+ methods.noErrors );

		},
		createGraphic: function(){

			var config = {
				type: 'doughnut',
				data: {
					datasets: [{
						data: [
							methods.noAcepts,
							methods.noErrors,
						],
						backgroundColor: [
							'rgb(255, 159, 64)',
							'rgb(255, 205, 86)',
						],
						label: 'Resultados'
					}],
					labels: [
						'Orange',
						'Yellow',
					]
				},
				options: {
					responsive: true,
					legend: {
						position: 'top',
					},
					title: {
						display: true,
						text: 'Chart.js Doughnut Chart'
					},
					animation: {
						animateScale: true,
						animateRotate: true
					}
				}
			};

			context.clearRect(0,0, canvas.width, canvas.height);
			new Chart(canvas, config);

		}
	}

	methods.showKeyToPress();
	

}());
