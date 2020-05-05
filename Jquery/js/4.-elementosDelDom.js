$(document).ready(function(){

	
	
	// Parent (acceder solo al padre)
	// $('#tercera').parent().css({
	// 	background: '#1b3d82'
	// });

	// O bien
	// var padre =$('#tercera').parent();
	// padre.css({
	// 	background: '#1b3d82'
	// });


	// Parents (acceder a todos los padres)
	// $('#tercera').parents();

	// Children (Accedemos a todos los hijos desde el padre)
	// $('#padre').children().fadeOut(500);

	// Acceder aun hijo en especial
	// $('#padre').children('#tercera').fadeOut(500);

	// Find (Encuentra todos los elementos div con la clase caja)
	// Sin importar desde donde se busque
	// $('#contenedor').find('div.caja').slideUp();

	// Siblings (Para todos los hermanos de la caja con id tercera
	// exceptuando esta)
	// $('#tercera').siblings().fadeOut(1500);

	// Next - Prev (Para el elemento anteror al seleccionado..
	// acciones)
	// $('#tercera').prev();

	// (Para el elemento siguiente al seleccionado..
	// acciones)
	// $('#tercera').next();

	// (Para todos los elementos antes al seleccionado..
	// acciones)
	// $('#tercera').prevAll();

	// (Para todos los elementos despues al seleccionado..
	// acciones)
	// $('#tercera').nextAll();

	// Ejemplo
	$('#tercera').nextAll().css({
		background: '#000',
		color: '#ea3201'
	});

	// Para saber cuantos hijos tiene un padre
	// $('#padre').children().length

	// Para acceder al primer hijo de una caja padre
	// $('#padre').children()[0]

	// Para acceder al último hijo de una caja padre
	//Buscamos el elemento padre y luego entre corchetes
	//Lo volvemos a buscar pero ahora su tamaño
	//Y para encontrar al último elemento, hay que restar -1
	//Porque como $('#padre').children() nos devuelve arreglo
	//empieza desde 0
	$('#padre').children()[$('#padre').children().length-1]

	//Encontrando al último hijo (sin clase ni id)
	// Poniendole estilos al último hijo
	//Una forma de hacerlo es con find y le pasamos el elemento
	//Para hacerlo más fácil ve a la siguiente sección.

	$('#contenedor').find(
			// Aquí lo encontramos
			$('#padre').children()[$('#padre').children().length-1]
		//Aquí le definimos los estilos
		).css({
			width: '240px',
			height: '240px',
			'font-size': '120px',
			'border-radius': '10px',
			'font-family': 'serif, Arial, Sans-serif'
		})

});