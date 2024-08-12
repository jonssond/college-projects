document.getElementById("resetSenhaForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Capturar CPF e E-mail fornecidos pelo usuário
    var cpfInput = document.getElementById("cpfInput").value;
    var emailInput = document.getElementById("emailInput").value;

    // Recuperar os dados do localStorage
    var dados = JSON.parse(localStorage.getItem("dados")) || [];

    // Verificar se o CPF e E-mail correspondem a algum registro
    var usuarioEncontrado = dados.find(function(usuario) {
        return usuario.cpf === cpfInput && usuario.email === emailInput;
    });

    if (usuarioEncontrado) {
        // Armazenar os dados do usuário no localStorage
        localStorage.setItem("nome", usuarioEncontrado.nome);
        localStorage.setItem("sobrenome", usuarioEncontrado.sobrenome);
        localStorage.setItem("cpf", usuarioEncontrado.cpf);
        localStorage.setItem("rgm", usuarioEncontrado.rgm);
        localStorage.setItem("email", usuarioEncontrado.email);

        // Redirecionar para a página de atualização de senha
        window.location.href = "novasenha.html";
    } else {
        // Exibir mensagem de erro de login incorreto
        alert("CPF ou E-mail incorretos. Tente novamente.");
    }
});