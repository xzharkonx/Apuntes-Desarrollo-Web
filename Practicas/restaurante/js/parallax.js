$(document).ready(function(){
	//Para acceder al scroll de la ventana
	// Funcion que se ejecuta cuando se hace scroll con el mouse
	$(window).scroll(function(){
		//Para saber el ancho de la pantalla
		var windowWidth = $(window).width();
		// Si el ancho de la ventana es mayor a 800px
		//Aplica el movimento
		//El parallax es conocido por el movimiento de 2
		//objetos a velocidades distintas
		if(windowWidth > 800){
			// Si se hace scroll en la página nos dice
			// cuantos pixeles hay hacia arriba.
			var scroll = $(window).scrollTop();
			//Con este valor haremos el efecto parallax
			//para variar el movimiento
			//Seleccionamos los textos y aplicamos estilos.
			$('header .textos').css({
				//Para transladar la posición de la caja de textos
				//de la parte del header, translate(x=horizontal y=vertical).
				'transform' : 'translate(0px,'+ scroll / 1.5 +'%)'
			});

			$('.acerca-de article').css({
				//Para transladar la posición de la caja de textos
				//de la parte acerca de, translate(x=horizontal y=vertical)
				//Se utiliza un valor - para que vaya verticalmente hacia arriba.
				'transform' : 'translate(0px, -'+ scroll / 18 +'%)'
			});
		}
	});

	// Un poco de seguridad
	/*Se ejecuta cuando el usuario gira la pantalla*/
	// Cuando hay un cambio en el tamaño del a página
	$(window).resize(function() {
		//Para saber el ancho de la pantalla
		var windowWidth = $(window).width();
		// Si el ancho de la ventana es menor a 800px
		//Restablece el valor predeterminado
		//Para que no hallan errores visibles por el efecto
		if(windowWidth < 800){
			// Para que ya no se mueva y este en su posición original
			$('.acerca-de article').css({
				'transform' : 'translate(0px, 0px)'
			});
		}
	});
});