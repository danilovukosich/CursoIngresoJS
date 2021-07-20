/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */

//10 bis.
//10 el maximo de los valores ungresados.
//11 el minimo de los positivos.

function mostrar()
{
	//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var sumaNegativos;
	var sumaPositivos;
	var cantidadNegativos;//contadores
	var cantidadPositivos;
	var cantidadCeros;
	var cantidadPares;
	var promedioNegativos;
	var promedioPositivos;
	var diferencia;


	respuesta="si";
	sumaNegativos = 0;
	sumaPositivos = 0;
	cantidadNegativos = 0;
	cantidadPositivos = 0;
	cantidadCeros = 0;
	cantidadPares = 0;

	while(respuesta=="si")
	{
		numeroIngresado = prompt("ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);
		if(numeroIngresado<0)
		{
			//sumaNegativos = sumaNegativos + numeroIngresado;
			sumaNegativos += numeroIngresado;
			cantidadNegativos++;
			//cantidaddeNegativos = cantidaNegativos + 1;
		}
		else
		{
			if(numeroIngresado>0)
			{
				sumaPositivos = sumaPositivos + numeroIngresado;
				cantidadPositivos++;
			}
			else
			{
				cantidadCeros++;
			}
		}

		if(numeroIngresado%2==0)
		{
			cantidadPares++;
		}


		respuesta=prompt("desea continuar?");
	}//fin del while

	promedioNegativos= sumaNegativos/cantidadNegativos;
	promedioPositivos= sumaPositivos/cantidadPositivos;

	diferencia = sumaPositivos - sumaNegativos;

	document.write("la suma de negativos es :" + sumaNegativos + "<br>");
	document.write("la suma de positivos es : " + sumaPositivos + "<br>");
	document.write("la cantidad de negativos es:" + cantidadNegativos + "<br>");
	document.write("la cantidad de positivos es de:" + cantidadPositivos + "<br>");
	document.write("la cantidad de ceros es de:" + cantidadCeros + "<br>");
	document.write("la cantidad de pares es de:"  + cantidadPares + "<br>");
	document.write("el promedio de los negativos es de:" + promedioNegativos + "<br>");
	document.write("el promedio de los positivos es:" + promedioPositivos + "<br>");
	document.write("la diferenciaes de:" + diferencia);
}//FIN DE LA FUNCIÓN