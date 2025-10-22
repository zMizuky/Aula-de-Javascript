let peso = Number(prompt("Qual o seu peso(kg)?")), altura = parseFloat(prompt("Qual a sua altura(m)?")), IMC = peso / (altura * altura);

console.log(IMC);

if(IMC >= 40){
    console.log("Obesidade grau 3");
}
else if(IMC >= 35 && IMC < 40){
    console.log("Obesidade grau 2");
}
else if(IMC >= 30 && IMC < 35){
    console.log("Obesidade grau 1");
}
else if(IMC >= 25 && IMC < 30){
    console.log("Sobrepeso");
}
else if(IMC >= 18.5 && IMC < 25){
    console.log("Peso normal");
}
else{
    console.log("Abaixo do peso");
}