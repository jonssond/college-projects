document.getElementById("atualizarSenhaForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Capturar a nova senha fornecida pelo usuário
    var novaSenha = document.getElementById("senhaInput").value;

    // Recuperar os dados do usuário do localStorage
    var nome = localStorage.getItem("nome");
    var sobrenome = localStorage.getItem("sobrenome");
    var cpf = localStorage.getItem("cpf");
    var rgm = localStorage.getItem("rgm");
    var email = localStorage.getItem("email");

    // Criar o objeto do usuário com a nova senha
    var usuario = {
        nome: nome,
        sobrenome: sobrenome,
        cpf: cpf,
        rgm: rgm,
        email: email,
        senha: novaSenha
    };

    // Atualizar os dados do usuário no localStorage
    var dados = JSON.parse(localStorage.getItem("dados")) || [];
    var index = dados.findIndex(function(usuario) {
        return usuario.cpf === cpf && usuario.email === email;
    });
    dados[index] = usuario;
    localStorage.setItem("dados", JSON.stringify(dados));

    // Redirecionar para a página de confirmação
    window.location.href = "confirmacao.html";
});