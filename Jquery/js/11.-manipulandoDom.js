$(document).ready(function(){
	// .text() //Para agregar simple contendo de texto
	// $('#titulo').text('Encabezado Modificado con Jquery');

// .html() //Para agregar etiquetas html
	$('#titulo').html('<u>Encabezado Modificado con Jquery</u>');

// .val() //Para conocer o cambiar el valor
	var nombre = $('#nombre');
	nombre.on('change', function(){
		$('#titulo').text(nombre.val());
	});
	
// .attr()
	$('#enlace').text('FalconMasters.com');
	$('#enlace').attr('href', 'http://www.falconmasters.com');
	
	// Multiples atributos.
	$('#enlace').attr({
		'class': 'azul',
		'target': '_blank'
	});	
})