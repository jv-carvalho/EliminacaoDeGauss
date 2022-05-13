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
    matrizA = []
    matrizB= []

    for (row = 0; row < quantidade; row += 1) {
        let aux = []
        let aux2 =[]
        for (col = 0; col < parseInt(quantidade) + 1; col += 1) {

                //If que pega valores da matriz A
                if(col  != (parseInt(quantidade)) && col < parseInt(quantidade)+1){ 
                aux.push(parseFloat(document.getElementById(`a${row.toString() + col.toString()}`).value))
                }else 
                //If que pega valores da matriz B 
                if(col  == (parseInt(quantidade)) && col < parseInt(quantidade)+1){
                    aux2.push(parseFloat(document.getElementById(`a${row.toString() + col.toString()}`).value))
                }
            
        }
        matrizA.push(aux)
        matrizB.push(aux2)
    }
    matrix=[matrizA, matrizB]
    
    console.log(matrizA)
    console.log(matrizB)

}

function retornaMatrizA(){
    var aux = getMatrixValues()
    return aux[0]
}

function retornaMatrizB(){
    var aux = getMatrixValues()
    return aux[1]
}



    /**
     * Faz o calculo abaixo
     */
     function escalonamento(){

   
        var matrizA = retornaMatrizA()
        var b = retornaMatrizB()

        console.log("Esca")
        console.log(b)

        var aux1, aux2, aux3, l, m;
    
        for(aux1 = 0; aux1 < matrizA.length - 1; aux1++){
    
            var max = Math.abs(matrizA[aux1][aux1]);
            var maxIndex = aux1;
            for(aux2 = aux1 + 1; aux2 < matrizA.length; aux2++){
                if(max < Math.abs(matrizA[aux2][aux1])){
                    max = Math.abs(matrizA[aux2][aux1]);
                    maxIndex = aux2;
                }
            }
            if(maxIndex != aux1){
    
                for(aux3 = 0; aux3 < matrizA.length; aux3++){
                    var temp = matrizA[aux1][aux3];
                    matrizA[aux1][aux3] = matrizA[maxIndex][aux3];
                    matrizA[maxIndex][aux3] = temp;
                }
                var temp = b[aux1];
                b[aux1] = b[maxIndex];
                b[maxIndex] = temp;
            }
    
            if(matrizA[aux1][aux1] == 0){
                return null;
            }else{
    
                for(m = aux1 + 1; m < matrizA.length; m++){
                    var mult = -matrizA[m][aux1] / matrizA[aux1][aux1];
                    matrizA[m][aux1] = 0; 
                    b[m] = b[m] + mult * b[aux1];
                    for(l = aux1 + 1; l < matrizA.length; l++){
                        matrizA[m][l] = matrizA[m][l] + mult * matrizA[aux1][l];
                    }
                }
            }
        }
        console.log("Resusult b")
        console.log(b)
        var matrizResult= [matrizA, b]
        return matrizResult
     
    
    }
    
    function calcResultado(){

        var matrizResult = escalonamento()
        var A = matrizResult[0]
        var b = retornaMatrizB()
        console.log(matrizResult)
        console.log(A)
        console.log(b)
        var X = [];
        for(i = A.length - 1; i >= 0; i--){
            X[i] = b[i];
            for(j = i + 1; j < A.length; j++){
                X[i] = X[i] - X[j] * A[i][j];
                console.log(X)
            }
            X[i] = X[i] / A[i][i];
            console.log(X)
        }
       
            // MOSTRA NO FRONT-END O VALOR DA VARIAVEL "resultado"
    const div = document.createElement('div');
    div.innerHTML = X;
    // Adiciona valor do resultado no front
    document.getElementById("result").appendChild(div)
    // Mostra div no front
    document.getElementById("result").style.display = ""

    return X;
    }



function calcular() {
    getMatrixValues()
    retornaMatrizA()
    retornaMatrizA()
    var resultadoF= escalonamento()
    console.log(calcResultado())

}


