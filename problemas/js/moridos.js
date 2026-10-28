
function calcular() {
    let notas = [];
    let suma = 0;
    let impreso = "";

    for (let i = 1; i <= 7; i++) {
        let nota = document.getElementById("n" + i).value;

        if (nota === "") {
            alert("Captura los 7 datos");
            return;
        }

        notas.push(Number(nota));
    }

    for (let indice in notas) {
        suma += notas[indice];

        impreso += "Día " + (Number(indice) + 1) +
            ": " + notas[indice] + "<br>";
    }

    let promedio = suma / notas.length;
    let maximo = Math.max(...notas);
    let minimo = Math.min(...notas);

    document.getElementById("impreso").innerHTML = impreso;

    document.getElementById("resultado").innerHTML =
        "Promedio: " + promedio.toFixed(2) + "<br>" +
        "Máximo: " + maximo + "<br>" +
        "Mínimo: " + minimo;
}
