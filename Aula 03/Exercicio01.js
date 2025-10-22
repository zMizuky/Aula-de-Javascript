let ano = prompt("Qual sua idade?"), anoAtual = 2025, check = anoAtual - ano;

if(check >= 18){
    console.log(`Você completa ${check} anos em ${anoAtual} e poderá tirar a habilitação.`);
}
else if(check <= 0){
    console.log("Valor inválido");
}
else{
    console.log(`Você completa ${check} anos em ${anoAtual} e ainda não poderá tirar a habilitação.`)
}