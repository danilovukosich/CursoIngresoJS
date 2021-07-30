/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var numeroIngresado;
	var acumulador;
	var contador;
	var seguir;
	var promedio;

	acumulador = 0;
	contador = 0;
	seguir=true;

	while(seguir==true)
	{	
		numeroIngresado = prompt("ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);

		acumulador = acumulador + numeroIngresado;
		contador = contador + 1;

		seguir = confirm("desea continuar?");
	}

	promedio=acumulador/contador;

	txtIdSuma.value = acumulador;
	txtIdPromedio.value = promedio.toFixed(2);

}//FIN DE LA FUNCIÓN