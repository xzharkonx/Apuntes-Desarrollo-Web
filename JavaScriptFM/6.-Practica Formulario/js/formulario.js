(function(){
	var formulario = document.getElementById('formulario'),
		nombre = formulario.nombre,
		correo = formulario.correo,
		sexo = formulario.sexo,
		terminos = formulario.terminos,
		error = document.getElementById('error');

		function validarNombre(e){
			if(nombre.value == '' || nombre.value ==null){
				error.style.display = 'block';
				error.innerHTML+= '<li>Por favor completa el nombre</li>'
				e.preventDefault();
			}else{
				validacion = true;
			}
		}

		function validarCorreo(e){
			if(correo.value == '' || correo.value ==null){
				error.style.display = 'block';
				error.innerHTML+= '<li>Por favor completa el correo</li>'
				e.preventDefault();
			}else{
				validacion = true;
			}
		}
		function validarSexo(e){
			if(sexo.value == '' || sexo.value ==null){
				error.style.display = 'block';
				error.innerHTML+= '<li>Por favor completa el sexo</li>'
				e.preventDefault();
			}else{
				validacion = true;
			}
		}
		function validarTerminos(e){
			if(terminos.checked == false){
				error.style.display = 'block';
				error.innerHTML+= '<li>Por favor completa los terminos</li>'
				e.preventDefault();
			}else{
				validacion = true;
			}
		}
		function validarFormulario(e) {
			// Limpiamos lo que tengamos de errores
			error.innerHTML = '';
			error.style.display = 'none';
			// Esta validacion la agregue yo, Luis Eduardo Garcia Mercado
			//Esto hace que si algúno no está validado que no los oculte
			var validacion = false;
			// Invocamos cada funcion
			validarNombre(e);
			validarCorreo(e);
			validarSexo(e); 
			validarTerminos(e)
			if(validacion){error.style.display = 'none';}
		}

	formulario.addEventListener('submit',validarFormulario);
}())