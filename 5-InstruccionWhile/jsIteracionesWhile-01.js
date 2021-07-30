/*
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/
function mostrar()
{
	var i;
	i = 0;

	while(i < 10)
	{
		document.write( (i+1) + "<br>");
		i = i + 1;//INCREMENTO de la variable de control.
		//o i++;

	}

}//FIN DE LA FUNCIÓN







/*
while(condicion)
{
	sentencias... //lo que quiero repetir
	sentencia/s.... //que me permitan cambiar el valor de la condicion.
}
*/