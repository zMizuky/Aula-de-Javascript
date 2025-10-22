let senha = 1234, user;

do{
    user = prompt("Qual a senha? ");
    if(user == senha){
        console.log("Acesso liberado!");
        break;
    }
    else{
        console.log("Senha incorreta. Tente novamente.")
    }
}while(true);