function mostrar()
{
	var edad;
	edad = txtIdEdad.value;
	edad = parseInt(edad);
//hacelo de la mejor forma para optimizar si es para una poblacion mas joven




//FORMA 1 MAYOR A MENOR SI ES UNA POBLACION MAS JOVEN.
	if(edad>17)
	{
		alert("Es mayor de edad");
	}
	else
	{
		if(edad>12)
		{
			alert("Es adolescente");
		}
		else
		{
			alert("Es un niño");
		}

	}
/*. *****MAL****
	if(edad>12 && edad<18)
	{
		alert("Es adolescente");
	}
	if(edad>17)
	{
		alert("Es mayor de edad");

	}
	if(edad<13)
	{
		alert("Es menor un niño");

	}
*/	
}

//FIN DE LA FUNCIÓN
//txtIdEdad
/*
Al ingresar una edad debemos informar si la persona es mayor de
 edad (mas de 18 años) o adolescente (entre 13 y 17 años) o niño (menor a 13 años).
*/ 
