$(document).ready(function(){
	// $(selector).animate({parametros}, velocidad, callback);
	
	$('#boton').on('click',function(){
		$('#caja').animate({
			width: '300px',
			opacity: '0.2'

			// marginLeft: '20px'

			// Para ir sumando los pixeles cada vez
			// que se da click
			// marginLeft: '+=100px'

			// Las animaciones de color no estan incluidas en Jquery.
			// backgroundColor: '#ff8000'
		},3000);

			// Animando el color con Animaciones en CSS3
			$('#caja').addClass('animacion');
			// $('#caja').toggleClass('animacion');
					// Podemos ejecutar multiples animaciones
		$('.caja').animate({
			marginLeft: '-=50px'
		}, 300);
	});
});