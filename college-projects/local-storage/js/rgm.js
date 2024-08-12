document.getElementById("cpfForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Capturar CPF fornecido pelo usuário
    var cpfInput = document.getElementById("cpf").value;

    // Recuperar os dados do localStorage
    var dados = JSON.parse(localStorage.getItem("dados")) || [];

    // Verificar se o CPF está presente nos dados
    var usuarioEncontrado = dados.find(function(usuario) {
        return usuario.cpf === cpfInput;
    });

    if (usuarioEncontrado) {
    // Exibir o RGM correspondente
    var rgm = usuarioEncontrado.rgm;
    alert("CPF válido! RGM correspondente: " + rgm);
    } else {
    alert("CPF inválido ou não encontrado.");
    }
    });