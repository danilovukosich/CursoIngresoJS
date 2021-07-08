/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var centigrados;
	var fahrenheit;

	fahrenheit = parseInt(document.getElementById('txtIdTemperatura').value);
	centigrados = (fahrenheit - 32) * 5/9;

	alert("La termperatura en grados centigrados es igual a: " + centigrados.toFixed(2));
	
}

function CentigradosFahrenheit () 
{
	var centigrados;
	var fahrenheit;

	centigrados = parseInt(document.getElementById('txtIdTemperatura').value);
	fahrenheit = (centigrados * 9/5) + 32;

	alert("La tenperatura en fahrenheit es igual a: " + fahrenheit.toFixed(2));
}
//txtIdTemperatura