let nome    = prompt("Nome: ");
let peso    = Number(prompt("Peso: "));
let altura  = Number(prompt("Altura: "));
let imc = peso / (altura * altura);

let confirme = confirm(`Os dados estão corretos?\nNome: ${nome}\nPeso: ${peso}\nAltura: ${altura}`);

alert(confirme ? `${nome}, seu IMC é ${imc}.` : "Você saiu do programa.");