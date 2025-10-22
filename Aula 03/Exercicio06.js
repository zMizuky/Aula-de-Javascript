let numero = Number(prompt("Qual numero?")), soma = 0;

for(i=1; i <= numero; i++){
    if(i % 2 == 0){
        soma += i;
    }
}
console.log(`A soma dos números pares de 1 até ${numero} é: ${soma}`);