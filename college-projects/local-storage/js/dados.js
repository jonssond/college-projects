// Recuperar os dados do localStorage
var nome = localStorage.getItem("nome");
var sobrenome = localStorage.getItem("sobrenome");
var cpf = localStorage.getItem("cpf");
var rgm = localStorage.getItem("rgm");
var email = localStorage.getItem("email");

// Exibir os dados na página
if (nome && sobrenome) {
var nomeCompleto = nome + " " + sobrenome;
document.getElementById("nomeUsuario").textContent = nomeCompleto;
}

document.getElementById("cpfUsuario").textContent = cpf;
document.getElementById("rgmUsuario").textContent = rgm;
document.getElementById("emailUsuario").textContent = email;