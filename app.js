let volumeElement = document.querySelector("#volume");
let botaoElement = document.querySelector("#botao");

let clElement = document.querySelector("#cl");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset = "abcedfghijklmnopqrstuvwxyzABCEDFGHIJKLMNOPQRSTUVWXYZ0123456789!@";
let novaSenha = ""

clElement.innerHTML = volumeElement.value;

volume.oninput = function () {
    clElement.innerHTML = this.value;
}

function generatePassword() {
    let pass = "";
    for (let i = 0, n = charset.length; i < volumeElement.value; ++i) {
        pass += charset.charAt(Math.floor(Math.random() * n));
    }

    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    novaSenha = pass;
}

function copyPassword() {
    navigator.clipboard.writeText(novaSenha);
    alert("Senha copiada com sucesso!")
}
