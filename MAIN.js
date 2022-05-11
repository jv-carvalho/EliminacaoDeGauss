var quantidade = 0;
var matrix = [];

function gerar() {
    const div = document.createElement('div');
    var tableString = "<table>";
    quantidade = document.getElementById("quantidade_matriz").value;
    body = document.getElementById('body')
    body.innerHTML = '';

    for (row = 0; row < quantidade; row += 1) {

        tableString += "<tr>";
        for (col = 0; col < parseInt(quantidade) + 1; col += 1) {
            tableString += `<td><input id="a${row.toString() + col.toString()}"></input></td>`;
        }
        tableString += "</tr>";
    }

    tableString += "</table>";
    div.innerHTML = tableString;
    body.appendChild(div);
}

function getMatrixValues() {
    matrix = []

    for (row = 0; row < quantidade; row += 1) {
        let aux = []
        for (col = 0; col < parseInt(quantidade) + 1; col += 1) {
            if (col != quantidade) {
                aux.push(parseFloat(document.getElementById(`a${row.toString() + col.toString()}`).value))
            }
        }
        matrix.push(aux)
    }
}

function calculateMatrix(matrix) {
    if (matrix.length == 0) {
        return;
    }

    let resultado = "";

    console.log(matrix)

    /**
     * Faz o calculo abaixo
     */


    // MOSTRA NO FRONT-END O VALOR DA VARIAVEL "resultado"
    const div = document.createElement('div');
    div.innerHTML = resultado;
    // Adiciona valor do resultado no front
    document.getElementById("result").appendChild(div)
    // Mostra div no front
    document.getElementById("result").style.display = ""
}

function calcular() {
    getMatrixValues();
    calculateMatrix(matrix);
}