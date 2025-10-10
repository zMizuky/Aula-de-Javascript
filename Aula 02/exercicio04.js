estoque = Number(prompt("Estoque: "));
remover = Number(prompt("Remover: "));

console.log(estoque >= remover ? `Estoque atualizado: ${estoque - remover}` : `Operação inválida: quantidade insuficiente no estoque`);