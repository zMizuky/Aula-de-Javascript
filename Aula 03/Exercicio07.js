let numero, positivo = 0, negativo = 0;

while(true){
    numero = Number(prompt("Digite um número: "));
    if(numero == 0){
        console.log("Quantidade de números positivos: " + positivo);
        console.log("Quantidade de números negativos: " + negativo);
        break;
    }
    else if(numero > 0){
        positivo+=1;
    }
    else if(numero < 0){
        negativo+=1;
    }
    else{
        console.log("Inválido");
    }
}