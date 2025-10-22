let operacao = Number(prompt("Escolha uma operação:\n1 - Para soma\n2 - Para subtração\n3 - Para multiplicação\n4 - Para divisão"));
let numero1 = Number(prompt("Digite o primeiro número:"));
let numero2 = Number(prompt("Digite o segundo número:"));

switch(operacao){
    case 1: 
        console.log(`O resultado é: ${numero1 + numero2}`);
        break;
    case 2: 
        console.log(`O resultado é: ${numero1 - numero2}`);
        break;
    case 3: 
        console.log(`O resultado é: ${numero1 * numero2}`);
        break;
    case 4: 
        console.log(`O resultado é: ${numero1 / numero2}`);
        break;
    default:
        console.log("Inválido");
}