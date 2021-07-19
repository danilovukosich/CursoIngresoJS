function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;
	//var promedio;
	var seguir;

	contador=0;
	acumulador=0;
	seguir = "si"
	
	while(contador<5)//contador == "si" para utilizar la cantidad de numeros q se deseen.
	{
		numeroIngresado = prompt("ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);
		

		acumulador = acumulador + numeroIngresado;
		
		contador = contador + 1;

		seguir = prompt("desea ingresar otro nimero si/no")

	}
	//promedio= acumulador/5

	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/5;// tmb lo puedo dividir por contador.
	//txtIdPromedio.value = promedio.


}//FIN DE LA FUNCIÓN

/*
entradas:5 numeros(dentro de while)
procesos: suma de numeros(dentro del while) y promedio(afuera del while).
salida: suma de numeros y promedoio.

*/