$(document).ready(function(){
	//$(selector).accion();

	/*
		$ - Indicamos que vamos acceder a jquery.
		selector - Accedemos al elemento que queramos trabajar.
		accion - Lo que queremos hacer con el elementos seleccionado.
	*/
	var aparecer = function(){			
			$('h1').show(3000);
			alert('No te desaras de mi xD JAJAJAJA');
		}

	$('h1').hide(2000,function(){
		alert('Desaparesi JAJAJAJA');
		// aparecer();
		aparecer();
	});	
});