$(document).ready(function(){

// .remove()
	// Elimina el elemento y sus elementos hijo.
	// Los elimina totalmente del DOM
	
	// $('#contenedor').remove();
	//Seleccionamos el hijo, si no seleccionariamos un conjunto
	// de hijos que se eliminarian
	$('#contenedor').children('#segunda').remove();

// .empty()
	// Elimina los elementos hijos del elemento seleccionado.
	// $('#contenedor').empty();
});