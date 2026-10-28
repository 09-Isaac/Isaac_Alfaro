
var alumnos = [];
var alumnosIniciales = [];

function agregarAlumno() {
    var nombre = document.getElementById("txtNombre").value;

    if (nombre == "") {
        alert("Escribe un nombre");
        return;
    }

    if (alumnos.length >= 10) {
        alert("Ya son 10 alumnos");
        return;
    }

    alumnos.splice(alumnos.length, 0, nombre);
    alumnosIniciales.push(nombre);

    document.getElementById("txtNombre").value = "";

    mostrarListas();
}

function eliminarAlumno() {
    var buscar = document.getElementById("txtEliminar").value;
    var posicionEncontrada = -1;

    for (var i = 0; i < alumnos.length; i++) {
        if (alumnos[i] == buscar) {
            posicionEncontrada = i;
            break;
        }
    }

    if (posicionEncontrada != -1) {
        alumnos.splice(posicionEncontrada, 1);

        alert("Alumno eliminado");

        document.getElementById("txtEliminar").value = "";

        mostrarListas();
    } else {
        alert("No se encontró ese alumno");
    }
}

function mostrarListas() {
    var textoInicial = "";
    var textoFinal = "";

    alumnosIniciales.forEach(function(item) {
        textoInicial += "<li>" + item + "</li>";
    });

    alumnos.forEach(function(item) {
        textoFinal += "<li>" + item + "</li>";
    });

    document.getElementById("listaInicial").innerHTML = textoInicial;
    document.getElementById("listaFinal").innerHTML = textoFinal;
}
