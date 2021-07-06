/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numero1;
	var numero2;
	var resultado;

	numero1 = parseInt(document.getElementById('txtIdNumeroUno').value);
	numero2 = parseInt(document.getElementById('txtIdNumeroDos').value);
	
	resultado = (numero1 + numero2);

	alert("La suma es igual a: " + resultado);
}

function restar()
{
	var numero1;
	var numero2;
	var resultado;

	numero1 = parseInt(document.getElementById('txtIdNumeroUno').value);
	numero2 = parseInt(document.getElementById('txtIdNumeroDos').value);

	resultado = (numero1 - numero2);

    alert("La resta es igual a: " + resultado);	
}

function multiplicar()
{ 
	var numero1;
	var numero2;
	var resultado;

	numero1 = parseInt(document.getElementById('txtIdNumeroUno').value);
	numero2 = parseInt(document.getElementById('txtIdNumeroDos').value);

	resultado = (numero1 * numero2);

	alert("La multiplicacion es igual a: " + resultado);
	
}

function dividir()
{
	var numero1;
	var numero2;
	var resultado;

	numero1 = parseInt(document.getElementById('txtIdNumeroUno').value);
	numero2 = parseInt(document.getElementById('txtIdNumeroDos').value);

	resultado = (numero1 / numero2);

	alert("La division es igual a: " + resultado);
	
}

//txtIdNumeroUno
//txtIdNumeroDos