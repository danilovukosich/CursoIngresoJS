/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var contador;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	
	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	seguir=true;

	while(seguir==true)
	{
		numeroIngresado=prompt("ingrese un numero");
		numeroIngresado=parseInt(numeroIngresado);

		if(numeroIngresado>0)
		{
			sumaPositivos=sumaPositivos+numeroIngresado;
			contador++;
		}
		else
		{
			multiplicacionNegativos=multiplicacionNegativos*numeroIngresado;
			contador++;
		}	

		seguir=confirm("desea continuar? ");
	}


	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN