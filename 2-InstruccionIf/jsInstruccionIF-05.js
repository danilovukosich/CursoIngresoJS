function mostrar()
{
	var edad;
	edad = txtIdEdad.value;
	edad = parseInt(edad);

	if(edad<13 || edad>17)//   if!(edad>12 && edad<18)
	{
		alert("no es adolescente");
	}
	
}
//FIN DE LA FUNCIÓN
//Al ingresar una edad solo debemos informar si la persona NO es adolescente.
//txtIdEdad