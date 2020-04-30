function suma(){
	var numero1 = parseInt(document.getElementById("numero1").value);
	var numero2 = parseInt(document.getElementById("numero2").value);
	var resultado = numero1 + numero2;
	var signo =document.getElementById("signo");
	signo.textContent = '+';
	document.getElementById("resultado").value = resultado;
}

var resta = function(){
	var numero1 = parseInt(document.getElementById("numero1").value);
	var numero2 = parseInt(document.getElementById("numero2").value);
	var resultado = numero1 - numero2;
	signo.textContent = '-';
	document.getElementById("resultado").value = resultado;
}