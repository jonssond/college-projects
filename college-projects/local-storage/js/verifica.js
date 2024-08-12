document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Capturar RGM e senha fornecidos pelo usuário
    var rgmInput = document.getElementById("rgm").value;
    var senhaInput = document.getElementById("senha").value;

    // Recuperar os dados do localStorage
    var dados = JSON.parse(localStorage.getItem("dados")) || [];
    console.log(dados);

    // Verificar se o RGM e senha correspondem a algum registro
    var usuarioEncontrado = dados.find(function(usuario) {
       return usuario.rgm === rgmInput && usuario.senha === senhaInput;
    });

    if (usuarioEncontrado) {
    // Armazenar os dados do usuário no localStorage
    localStorage.setItem("nome", usuarioEncontrado.nome);
    localStorage.setItem("sobrenome", usuarioEncontrado.sobrenome);
    localStorage.setItem("cpf", usuarioEncontrado.cpf);
    localStorage.setItem("rgm", usuarioEncontrado.rgm);
    localStorage.setItem("email", usuarioEncontrado.email);

    // Redirecionar para outra página
    window.location.href = "areadoaluno.html";
    } 
    else {
    // Exibir mensagem de erro de login incorreto
    alert("RGM ou senha incorretos. Tente novamente.");
    }
    });