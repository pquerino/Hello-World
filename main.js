let nomeUsuário =  "";
let elemento = document.querySelector("#usuário");

while(nomeUsuário == ""){
    nomeUsuário = prompt("Qual o seu nome?");
}

if(nomeUsuário == null){
    elemento.textContent = "seja muito bem vindo!";
}else{
    elemento.textContent = nomeUsuário;
}

;
