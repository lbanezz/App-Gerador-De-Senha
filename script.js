
let sliderElement = document.querySelector("#slider");
let buttonElemente= document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("container-password");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!@";
let novaSenha = "";


sizePassword.innerHTML = sliderElement.value;

slider.oninput = function(){
    sizePassword.innerHTML = this.value;

}

function generatePassword(){
    
    let pass = "";
    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
    pass += charset.charAt(Math.floor(Math.random() * n));
    }

    
    password.innerHTML = pass;
    novaSenha = pass;
}

function copyPassword(){
    alert("Sernha copiada com Sucesso!")
    navigator.clipboard.writeText(novaSenha);
}