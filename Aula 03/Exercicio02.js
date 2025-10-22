let idade = prompt("Qual a sua idade?");

if(idade >= 65){
    console.log("Você é um idoso.");
}
else if(idade >= 18 && idade < 65){
    console.log("Você é um adulto.");
}
else if(idade >= 13 && idade < 18){
    console.log("Você é um adolescente.");
}
else{
    console.log("Você é um criança.");
}