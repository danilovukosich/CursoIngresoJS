function mostrar()
{
	var nombrePareja1;
	var nombrePareja2;
	var pesoPareja1;
	var pesoPareja2;
	var sumaPesos;
	var promedioPesos;

	nombrePareja1 = prompt("Ingrese su nombre: ");
	pesoPareja1 = prompt("Ingrese su peso: ");
	pesoPareja1 = parseFloat(pesoPareja1);
	nombrePareja2 = prompt("Ingrese su nombre: ");
	pesoPareja2 = prompt("Ingrese su peso");
	pesoPareja2 = parseFloat(pesoPareja2);
	sumaPesos = pesoPareja1 + pesoPareja2;
	promedioPesos = (pesoPareja1 + pesoPareja2) / 2; 

	alert("Ustedes se llaman " + nombrePareja1 + " y " + nombrePareja2 + " y pesan " + pesoPareja1 + "kg y "
		+ pesoPareja2 + "kg, que sumados son: " + promedioPesos + "kg");

	
  
}
