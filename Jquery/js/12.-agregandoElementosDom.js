$(document).ready(function(){
	var contenedor = $('#contenedor');
	var contador = 1;
	// Creamos una nueva caja con Jquery
	// Y la guardamos en la variable Caja

	$('#agregar').on('click', function(){
		// Colocamos dentro el elemento que queremos crear en este caso
		// creamos un div <div></div>, luego le agregamos una clase y
		// el texto que va a ser el contador
		var caja = $('<div></div>').attr('class', 'caja').text(contador);
		contador++;

// Append agrega contenido al INICIO de un contenedor.
		contenedor.append(caja);
		
// Prepend agrega contenido al FINAL de un contenedor.
		// contenedor.prepend(caja);

// Before me permite posicionar un elemento ANTES de otro.
// En este caso, antes del mismo contenedor
		// contenedor.before(caja);
		
// After me permite posicionar un elemento DESPUES de otro.
// En este caso, despues del mismo contenedor
		// contenedor.after(caja);
	});
});