function mostrar()
{
	var precio;
	var descuento;
	var resultado;

	precio = prompt("ingrese precio: ");
	precio = parseFloat(precio);
	descuento = prompt("ingrese descuento");
	descuento = parseFloat(descuento);
	resultado = precio - (precio * (descuento/100));

	document.getElementById('elPrecioFinal').value = resultado;

}
