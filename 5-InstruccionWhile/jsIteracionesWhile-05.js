/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;
	sexoIngresado = prompt("ingrese F ó M.");
	sexoIngresado = sexo.toUpperCase();

	while(sexoIngresado!="F" && sexoIngresado!="M")
	{
		sexoIngresado = prompt("ingrese un sexo valido");
		sexoIngresado = sexo.toUpperCase();
		
	}
	switch(sexoIngresado)
	{
		case "M":
		sexoIngresado="Masculino";
		break;
		case "F":
		sexoIngresado="Femenino";
		break;
	}
 
	txtIdSexo.value = sexoIngresado;
}//FIN DE LA FUNCIÓN