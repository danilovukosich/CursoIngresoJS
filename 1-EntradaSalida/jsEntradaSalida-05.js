/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var nombre;// =txtIdEdad.value;
    var edad;// =txtIdEdad.value;

	nombre = document.getElementById('txtIdNombre').value;
	edad = document.getElementById('txtIdEdad').value;

	alert("Usted se llama " + nombre + " y tiene" + edad + "años ");//concatenacion de ambas variables
	//console.log("Usted se llama " + nombre + " y tiene" + edad + "años ")  (para q aparezca en la consola)
	//document.write("Usted se llama " + nombre + " y tiene" + edad + "años ")  (para q aparezca en un doc en otra pestaña)


}

