/*
Al ingresar una edad debemos informar si la persona es mayor de edad, 
sino informar que es un menor de edad.
*/
function mostrar()
{
	var edad;
	
	edad = document.getElementById('txtIdEdad').value;
	edad = parseInt(edad);
	
	if(edad > 17)//(edad > 17) esta e la correcta.
	{
		alert("la persona es mayor de edad");
	}
	else
	{
		alert("la persona no es mayor de edad");
	}

	alert("chau");

	/*Operadores:
	aritmeticos: + - * / %
	relacionales: >, <, >=, <=, ==, !=: verdadero-falso
	logicos: y (&&), o (||), no (!)
	*/


	

}
//txtIdEdad
//FIN DE LA FUNCIÓN