function mostrar()
{
	var edadIngresada;
	var estadoCivil;

	edadIngresada = document.getElementById('txtIdEdad').value;
	edadIngresada = parseInt(edadIngresada);
	estadoCivil = document.getElementById('estadoCivil').value;

	if(edadIngresada<18 && estadoCivil != "Soltero")
	{
		alert("Es muy pequeño para NO ser soltero.");
	}

	
	
	


}//FIN DE LA FUNCIÓN
/*
Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", mostrar 
el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'
*/