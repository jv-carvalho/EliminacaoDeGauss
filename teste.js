function escalonamento(matrizA, matrizB){
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
        console.log(b)
    }
    return matrizA;
   

}

function calcResultado(A){
    var X = [];
    console.log(b)
    for(i = A.length - 1; i >= 0; i--){
        X[i] = b[i];
        for(j = i + 1; j < A.length; j++){
            X[i] = X[i] - X[j] * A[i][j];
            console.log(X)
        }
        X[i] = X[i] / A[i][i];
    }
    return X;
}

var matriz = [[0, 2, 2],
[1, 2, 1],
[1, 1, 1]];

var b = [8, 9, 6];

console.log(calcResultado(escalonamento(matriz, b)))