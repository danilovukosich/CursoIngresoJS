/*
al presionar el botón mostrar 10 repeticiones 
con números DESCENDENTES, desde el 10 al 1.*/
function mostrar()
{
	var contador;
	contador=10; 

	while(contador>0)
	{
		document.write(contador + "<br>");
		contador= contador - 1;// o contador--;
	}

}//FIN DE LA FUNCIÓN