
function calcularTotal() {
    let puesto = document.getElementById("puesto").value;
    let nivel = document.getElementById("nivel").value;
    let horas = document.getElementById("horas").value;

    let sueldos = [
        [120, 180, 280],
        [120, 280, 340],
        [240, 520, 890]
    ];

    if (puesto !== "" && nivel !== "" && horas !== "") {
        let pago = sueldos[puesto][nivel];
        let total = pago * Number(horas);

        document.getElementById("total").value = total;
    }
}
