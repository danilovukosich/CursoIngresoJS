function mostrar()
{
	//tomo el mes
	
	var mesDelAño;
	var mensaje;
	mesDelAño =txtIdMes.value;

	switch(mesDelAño)
	{
		case "Enero":
			mensaje = "comienza bien tu año";
		//alert("comienza bien tu año");
		break;

		case "Marzo":
			mensaje = "a clases";
		//alert("a clases");
		break;

		case "Julio":
			mensaje = "vacaciones";
		//alert("vacaciones");
		break;

		case "Diciembre":
			mensaje = "felices fiestas!!!";
		//alert("felices fiestas!!!");
		break;

		default:
			mensaje = "no se ingreso";
		break;


	}
	alert(mensaje);



}//FIN DE LA FUNCIÓN