$(document).ready(function(){
	// Funcion que se ejecuta cuando se hace scroll con el mouse
	$(window).scroll(function(){
		var windowWidth = $(window).width();
		// Si el ancho de la ventana es mayor a 800px
		//Aplica el movimento
		//El parallas es conocido por el movimiento de 2
		//objetos a velocidades distintas
		if(windowWidth > 800){
			var scroll = $(window).scrollTop();

			$('header .textos').css({
				'transform' : 'translate(0px,'+ scroll / 1.5 +'%)'
			});

			$('.acerca-de article').css({
				'transform' : 'translate(0px, -'+ scroll / 18 +'%)'
			});
		}
	});

	$(window).resize(function() {
		/*Cuando el usuario gira la pantalla*/
		var windowWidth = $(window).width();
		// Si el ancho de la ventana es menor a 800px
		//Restablece el valor predeterminado
		//Para que no hallan errores visibles por el efecto
		if(windowWidth < 800){

			$('.acerca-de article').css({
				'transform' : 'translate(0px, 0px)'
			});
		}
	});
});