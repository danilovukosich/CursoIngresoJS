/*
Julio-Agosto: "abrigate que hace frio";
Septiembre-Febrero: "calorcito papaaa";
Marzo-Junio: "falta para el invierno";
*/


function mostrar()
{
	//tomo el mes
	var mesDelAño;
	var mensaje;
	mesDelAño =txtIdMes.value;

	switch(mesDelAño)
	{
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
			mensaje = "falta para el invierno";
		break;
		case "Julio":
		case "Agosto":
			mensaje = "abrigate que hace frio";
		break;
		/*case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
		case "Enero":
		case "Febrero":*/
		default:
			mensaje = "calorcito papaaa";
		break;
		/*
		case "Enero":
			mensaje = "calorcito papaaa";
		break;
		case "Febrero":
			mensaje = "calorcito papaaa";
		break;
		case "Marzo":
			mensaje = "falta para el invierno";
		break;
		case "Abril":
			mensaje = "falta para el invierno";
		break;
		case "Mayo":
			mensaje = "falta para el invierno";
		break;
		case "Junio":
			mensaje = "falta para el invierno";
		break;
		case "Julio":
			mensaje = "abrigate que hace frio";
		break;
		case "Agosto":
			mensaje = "abrigate que hace frio";
		break;
		case "Septiembre":
			mensaje = "calorcito papaaa";
		break;
		case "Octubre":
			mensaje = "calorcito papaaa";
		break;
		case "Noviembre":
			mensaje = "calorcito papaaa";
		break;
		case "Diciembre":
			mensaje = "calorcito papaaa";
		break;
		*/
	}

	alert(mensaje);






}//FIN DE LA FUNCIÓN
//Resolver tp4: solo con if, con if y con switch y solo con switch.


