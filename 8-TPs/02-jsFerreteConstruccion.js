/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largoTerreno;
	var anchoTerreno;
	var resultado;

	largoTerreno = parseInt(document.getElementById('txtIdLargo').value);
	anchoTerreno = parseInt(document.getElementById('txtIdAncho').value);

	resultado = ((largoTerreno * 2) + (anchoTerreno * 2)) * 3;

	alert("Los metros necesarios para hacer el peririmetro del terreno son: " + resultado);

}

function Circulo () 
{
	var radioTerreno;
	var resultado;

	radioTerreno = parseFloat(document.getElementById('txtIdRadio').value);
	resultado = 2 * 3.14 * radioTerreno;

	alert("Se necesita " + resultado + "mts de alambre.");
}

function Materiales () 
{
	var largoTerreno;
	var anchoTerreno;
	var areaTerreno;
	var resultadoCemento;
	var resultadoCal;

	largoTerreno = parseInt(document.getElementById('txtIdLargo').value);
	anchoTerreno = parseInt(document.getElementById('txtIdAncho').value);

	areaTerreno = largoTerreno * anchoTerreno;
	resultadoCemento = areaTerreno * 2;
	resultadoCal = areaTerreno * 3;

	alert("Se necesitaran " + resultadoCemento + " bolsas de cemento y " + resultadoCal + " bolsas de Cal");


	

	
}

/*
txtIdLargo
txtIdAncho
txtIdRadio
*/