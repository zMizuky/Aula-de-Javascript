let compra = parseInt(prompt("Informe o valor da compra: "));
let desconto = compra >= 100 ? (compra*0.10) : (compra*0.05);
let final = compra-desconto;
console.log(`Valor original: ${compra}\nDesconto aplicado: ${desconto}\nValor final: ${final}`);