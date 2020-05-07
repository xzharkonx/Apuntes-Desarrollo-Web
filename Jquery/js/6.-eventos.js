$(document).ready(function(){
	var boton = $('#boton');

	// boton.click(function(){
	// 	alert('Hola');
	// });

// Evento con funcion
	// function saludo(){
	// 	alert('Saludos');
	// }

	// boton.click(saludo);

// Evento con callback
	// boton.on('mouseenter', function(){
	// 	document.body.style.background = '#000';
	// });

	// boton.on('mouseleave', function(){
	// 	document.body.style.background = '#fff';
	// });

// Eliminando Eventos

	// boton.on('click', function(){
	// 	alert('Saludos');
	// 	console.log('Saludos');
	// });

	// Queremos desactivar el evento click
	// del boton cuando el usuario haga click
	// en el boton de desactivar
	// $('#desactivar').on('click', function(){
	// 	boton.off('click');
	// 	console.log('Boton de Ejecutar Desactivado');
	// });

// Previniendo el comportamiento de los enlaces
	$('a').on('click', function(e){
		e.preventDefault();
		alert('Link desactivado');
		//Redireccionando
		// location.href ="#";
	});

})