
document.getElementById("registrarEstudiante").addEventListener("click", estudiante);
document.getElementById("mostrarPromedio").addEventListener("click", mostrarPromedio);
document.getElementById("mostrarNotaMayor").addEventListener("click", mostrarNotaMayor);
document.getElementById("mostrarNotaMenor").addEventListener("click", mostrarNotaMenor);


// ----------------------------------------------------
// ----------------------------------------------------


function estudiante (){
	guardarEstudiante();
	mostrarEstudiante();
}


// ----------------------------------------------------
// ----------------------------------------------------


function guardarEstudiante(){

	var sCodigo = document.getElementById("codigo").value,
		sNombre = document.getElementById("nombre").value,
		nNota = document.getElementById("nota").value;

	registrarEstudiante(sCodigo, sNombre, nNota);
}


function mostrarEstudiante (){

	var lista = listarEstudiantes();

	var mostrarEstudiante = "";

	for (var i = 0; i < lista.length; i++){

		mostrarEstudiante +="<tr><td>"+ lista[i].codigo +
								"<td>"+ lista[i].nombre +
		 						"<td>"+ lista[i].nota +
		 					"</tr>";
	} 

	document.getElementById("tbodyestudiantes").innerHTML = mostrarEstudiante;

	document.getElementById("codigo").value = "";
	document.getElementById("nombre").value = "";
	document.getElementById("nota").value = "";
}


function mostrarPromedio (){

	var lista = listarEstudiantes();
	var sumaNota = 0;
	var cantNota = 0;

	for (var i = 0; i < lista.length; i++){

		sumaNota+= parseInt(lista[i].nota);
		cantNota++;

	}

	alert("La Nota Promedio de todos los Estudiantes es: " + sumaNota/cantNota);

}


function mostrarNotaMayor (){

	var lista = listarEstudiantes();
	var notaMayor=lista[0].nota;

	for (var i = 0; i < lista.length; i++) {
		
		notaMayor = Math.max(notaMayor,parseInt(lista[i].nota));

	}

	alert("La Nota Mayor de todos los Estudiantes es: " + notaMayor);

}


function mostrarNotaMenor (){

	var lista = listarEstudiantes();
	var notaMenor=lista[0].nota;

	for (var i = 0; i < lista.length-1; i++) {
		
		notaMenor = Math.min(notaMenor,lista[i+1].nota);

	}

	alert("La Nota Menor de todos los Estudiantes es: " + notaMenor);

}


// ----------------------------------------------------
// ----------------------------------------------------


var listadoEstudiantes = [];

function registrarEstudiante (sCodigo, sNombre, nNota){

	var estudiante = {codigo : sCodigo , nombre : sNombre , nota : nNota};

	listadoEstudiantes.push(estudiante);

} 


function listarEstudiantes (){

	return listadoEstudiantes;

}