$(document).ready(function(){
	//Efecto Menu
	// each Es como un for, ahí que cuando inicie
	// para todos los elementos...
	//A la función se lee pasan 2 elementos:
	// index y elemento
	//Recuerda que traes un conjuto de elementos a

	//Segunda forma de aplicar el tiempo con una variable
	// var tiempo = 2000;
	$('.menu a').each(function(index, elemento) {
		$(this).css({
			'top': '-200px'
		});
		$(this).animate({
			top:'0'
			//Se le pasa index para que varie el tiempo
			//de ejecución y se ececute cada uno en un 
			//intervalo de 500
		}, 2000 + (index * 500));
		//Segunda forma de aplica el tiempo con una variable
		//Comentar la línea del index
		// }, tiempo +=500);
	});

//Efecto Header
	if( $(window).width() > 800){
		$('header .textos').css({
			opacity:0,
			marginTop:0
		});

		$('header .textos').animate({
			opacity:1,
			marginTop: '-52px'
		}, 1500);
	}

//Scroll Elementos Menu
	// e.preventDefault(); es para evitar poner # en la url
	// Al hacer click

	// offset Sirve obtener para la posicion del elemento
	// se combina con top para ir a la parte superior. 
	// de ese elemento

	// scrollTop: 0px; sirve para ir a esa posición 
	// en la página. Se resta 100 para ir un poquito más
	//arriba del elemento seleccionado y se vea bien.

	// e.preventDefault(); prevenimos que se envie a
	//la página, como es un enlace, lo evitaremos así.

	var acercaDe = $('#acerca-de').offset().top,
		menu = $('#platillos').offset().top,
		galeria = $('#galeria').offset().top,
		ubicacion = $('#ubicacion').offset().top;

	$('#btn-acerca-de').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: acercaDe - 100
		}, 500);
	});

	$('#btn-menu').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: menu - 100
		}, 500);
	});

	$('#btn-galeria').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: galeria - 100
		}, 500);
	});

	$('#btn-ubicacion').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: ubicacion - 100
		}, 500);
	});
});