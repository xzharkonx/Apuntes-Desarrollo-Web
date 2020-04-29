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
		background: '#000'
	});

});