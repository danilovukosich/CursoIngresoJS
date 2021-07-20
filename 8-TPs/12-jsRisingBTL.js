/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	var edadIngresada;
 	var sexoIngresado;
 	var estadoCivilIngresado;
    var sueldoIngresado;
    var sueldoBruto;
    var numeroLegajo;
    var nacionalidadIngresada;

    //A
    edadIngresada = prompt("ingrese su edad");
    edadIngresada = parseInt(edadIngresada);

    while(edadIngresada < 18 || edadIngresada > 90)
    {
        edadIngresada = prompt("ingrese una edad valida");
        edadIngresada = parseInt(edadIngresada);
    }
    txtIdEdad.value = edadIngresada;

    //B
    sexoIngresado = prompt("ingrese sexo su sexo: M: Masculino, F: Femenino y NB: No binario");
    sexoIngresado = sexoIngresado.toUpperCase()// .toLowerCase()

    while(sexoIngresado!="M" && sexoIngresado!="F" && sexoIngresado!="NB")
    {
        sexoIngresado = prompt("ingrese un sexo valido");
        sexoIngresado = sexoIngresado.toUpperCase()
    }
    switch(sexoIngresado)
    {
        case "M":
        sexoIngresado="Masculino";
        break;
        case "F":
        sexoIngresado="Femenino";
        break;
        case "NB":
        sexoIngresado="No binario"
        break;
    }
    txtIdSexo.value = sexoIngresado;

    //C
    estadoCivilIngresado = prompt("Ingrese su estado civil sea soltero, casado o divorciado");
    while(estadoCivilIngresado!="soltero" && estadoCivilIngresado!="casado" && estadoCivilIngresado!="divorciado")
    {
        estadoCivilIngresado = prompt("Ingrese un estado civil valido.");
    }
    txtIdEstadoCivil.value = estadoCivilIngresado;

    //D
    sueldoBruto = prompt("Ingrese su sueldo bruto");//D
    while(sueldoBruto<8000)
    {
        sueldoBruto = prompt("ingrese un sueldo valido");
        sueldoBruto = parseFloat(sueldoBruto);
    }
    txtIdSueldo.value = sueldoBruto;

    //E
    numeroLegajo = prompt("Ingrese su numero de legajo");
    while(numeroLegajo<1000 || numeroLegajo>9999)
    {
        numeroLegajo = prompt("ingrese un numero de legajo valido");
        numeroLegajo = parseInt(numeroLegajo);
    }
    txtIdLegajo.value = numeroLegajo;

    //F
    nacionalidadIngresada = prompt("Ingrese su nacionalidad : A (argentino/a), E (extranjero/a) o N(nacionalizado/a).");
    nacionalidadIngresada = nacionalidadIngresada.toUpperCase();
    while(nacionalidadIngresada!="A" && nacionalidadIngresada!="E" && nacionalidadIngresada!="N")
    {
        nacionalidadIngresada = prompt("Ingrese una nacionalidad valida");
        nacionalidadIngresada = nacionalidadIngresada.toUpperCase();
    }
    switch(nacionalidadIngresada)
    {
        case "A":
        nacionalidadIngresada = "Argentino/a";
        break;
        case "E":
        nacionalidadIngresada = "Extranjero/a";
        break;
        case "N":
        nacionalidadIngresada = "Nacionalizado/a";
        break;
    }
    txtIdNacionalidad.value = nacionalidadIngresada;



















}
//txtIdEdad
//txtIdSexo
//txtIdEstadoCivil
//txtIdSueldo
//txtIdLegajo
//txtIdNacionalidad