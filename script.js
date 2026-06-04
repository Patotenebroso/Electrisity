function calcular(){

    let anterior = Number(document.getElementById("anterior").value);
    let actual = Number(document.getElementById("actual").value);
    let tarifa = Number(document.getElementById("tarifa").value);

    let consumo = actual - anterior;
    let costo = consumo * tarifa;

    document.getElementById("resultado").innerHTML =
        `Consumo: ${consumo} kWh <br>
         Costo estimado: $${costo.toFixed(2)}`;
}
