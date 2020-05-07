$(document).ready(function(){
	$('#ejecutar').on('click', function(){
		/* 	Stop por defecto va a parar la animacion en curso y pasar a la siguiente.
			Podemos parar la cola de animaciones siguientes
			y tambien podemos saltar al final de la animacion.
		*/

		$('.caja').animate({
			marginLeft: '500px'
		}, 5000);


		$('.caja').animate({
			marginLeft:  '0px'
		}, 5000);
	});

	$('#parar').on('click', function(){
		//.stop(limpiarcoladeAnimaciones, Saltar al final);
		// Para la animación
		$('.caja').stop();

		// El colocarle los parametros
		// Sirve para cuando tengamos varias animaciones
		
		// Cuando se precione, la animación actual se para
		// pero no salta a la última animación se va a parar
		//Si fuera en la última animación, lo que hace es reiniciar
		//el ciclo
		// $('.caja').stop(true, false);

		// Para las animaciones y salta a la última
		// $('.caja').stop(false, true);

		// $('.caja').stop(true, true);

		//Limpiar la cola de animaciones significa que al acabar
		// la animación actual, todas las demás que se ivan a ejecutar
		// ya no lo harán
	});
});