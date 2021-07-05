/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var nombreDelUsuarioIngresado;//lowerCamelCase
	
	nombreDelUsuarioIngresado = prompt("Ingrese su nombre: ");//tomando dato por promt
	
	document.getElementById('txtIdNombre').value = nombreDelUsuarioIngresado;// muestro el dato por id
	
	}

//txtIdNombre