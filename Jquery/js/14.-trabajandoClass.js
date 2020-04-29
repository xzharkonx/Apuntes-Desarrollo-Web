$(document).ready(function(){
	$('#boton').on('click', function(){
		// $(this).addClass('naranja');
		// $(this).removeClass('boton');

		$(this).toggleClass('naranja');

		// Es más recomendable trabajar las clases desde css y luego
		// cambiarlas, aunque también existe está forma:
		
		// $(this).css({
		// 	'height': '100px',
		// 	'width': '100px'
		// });
	});
});