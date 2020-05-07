$(document).ready(function(){

	/*Los callbacks son funciones que se ejecutan 
	despues de que una animacion haya terminado.*/

	// Si quieres trabajar con una funcion o cualquier
	// otro codigo que se ejecute despues de una animación,
	// utiliza callbacks

	$('#ejecutar').on('click', function(){
		$('.caja').slideUp(1000, function(){
			$(this).slideDown(1000,function(){
				alert('Antes de hacerme ancho');
				//Recuerda que sigue corriendo el tiempo
				//Si tardas en dar click, el tiempo en ejcutar
				//la siguiente animación empezara
				//Creo que se deberia dejar un animate vacio
				//Con algo de tiempo o un mensaje que se quite
				//en un tiempo de forma automatica
				//para que permita que las animaciones sigan 
				//fluidas
				$(this).animate({
				width: '300px'

				},5000,function(){
					alert('Callbacks');
				});
			});
		});
	});

	/* Si no existieran los callbacks se ejecutarian las 
	siguientes acciones justo despues del inicio de la animacion.
	Esto nos podria provocar errores en el diseño.
	*/

	// // Esto no funcionaria correctamente sin un callback:
	// $('#ejecutar').on('click', function(){
	// 	$('.caja').slideUp(300);
	// Esta línea de codigo se ejecuta inmediatamente despues
	// de la de arriba, el problema es que no nos deja ver 
	// la animación 
	// 	alert('Animacion Iniciada');
	// 	$('.caja').slideDown(300);
	// });

});