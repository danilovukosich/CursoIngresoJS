/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precio1;
	var precio2;
	var precio3;
	var resultado;

	precio1 = parseInt(document.getElementById('txtIdPrecioUno').value);
	precio2 = parseInt(document.getElementById('txtIdPrecioDos').value);
	precio3 = parseInt(document.getElementById('txtIdPrecioTres').value);
	resultado = precio1 + precio2 + precio3;

	alert("La suma de los productos es igual a: " + resultado);
}

function Promedio () 
{
	var precio1;
	var precio2;
	var precio3;
	var promedio;

	precio1 = parseFloat(document.getElementById('txtIdPrecioUno').value);
	precio2 = parseFloat(document.getElementById('txtIdPrecioDos').value);
	precio3 = parseFloat(document.getElementById('txtIdPrecioTres').value);
	promedio = (precio1 + precio2 + precio3) / 3;

	alert("Su promedio es de: " + promedio.toFixed(2));

}
function PrecioFinal () 
{
	var precio1;
	var precio2;
	var precio3;
	var iva1;
	var iva2;
	var iva3;
	var precioFinal;

	precio1 = parseFloat(document.getElementById('txtIdPrecioUno').value);
	precio2 = parseFloat(document.getElementById('txtIdPrecioDos').value);
	precio3 = parseFloat(document.getElementById('txtIdPrecioTres').value);

	iva1 = precio1 * (21/100);
	iva2 = precio2 * (21/100);
	iva3 = precio3 * (21/100);

	precioFinal = (precio1 + iva1) + (precio2 + iva2) + (precio3 + iva3);

	alert("Su precio final es de: " + precioFinal.toFixed(2) + " pesos");


}
/*
txtIdPrecioUno
txtIdPrecioDos
txtIdPrecioTres
*/