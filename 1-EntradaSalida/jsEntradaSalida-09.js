/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var importeSueldo;
	var aumento;
	var resultado;

	importeSueldo = parseFloat(document.getElementById('txtIdSueldo').value);
	aumento = importeSueldo * (10/100);// o * 0,1 --->forma 3

	resultado = (importeSueldo + aumento);
	//resultado = importeSueldo * 1,1; --->forma 1

	document.getElementById('txtIdResultado').value = resultado.toFixed(2);

}
//txtIdSueldo---> entrada
//txtIdResultado---> salida