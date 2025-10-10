let nome = prompt("Qual é o seu nome? ");
let idade = prompt("Qual é sua idade? ");
let altura = prompt("Qual a sua altura? ");
let genero = prompt("Qual o seu gênero? ");
let estudante = confirm("È etudante? ");

console.log(`Bem-vindo(a), ${nome}!\n\nSeu perfil:\nNome: ${nome}\nIdade: ${idade}\nAltura: ${altura}\nGênero: ${genero}\nEstudante: ${estudante ? "verdadeiro" : "falso"}`);