document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita que o formulário seja enviado

  var nome = document.getElementById("nome").value;
  var sobrenome = document.getElementById("sobrenome").value;
  var cpf = document.getElementById("cpf").value;
  var senha = document.getElementById("senha").value;
  var rgm = document.getElementById("rgm").value;
  var email = document.getElementById("email").value;

  // Verificar se todos os campos estão preenchidos
  if (!nome || !sobrenome || !cpf || !senha || !rgm || !email) {
      alert("Por favor, preencha todos os campos do formulário.");
      return;
  }

  // Verificar se o e-mail contém "@" e ".com"
  if (!validateEmail(email)) {
      alert("O e-mail fornecido não é válido. Certifique-se de que contém '@' e '.com'.");
      return;
  }

  var formData = {
    nome: nome,
    sobrenome: sobrenome,
    cpf: cpf,
    rgm: rgm,
    email: email,
    senha: senha
  };

  var jsonData = localStorage.getItem("dados");
  var data = JSON.parse(jsonData) || [];

  data.push(formData);

  var updatedJsonData = JSON.stringify(data);
  localStorage.setItem("dados", updatedJsonData);

  document.getElementById("myForm").reset();

  console.log("Dados atualizados com sucesso!");
  window.location.href = "sucesso.html";
});

function validateEmail(email) {
  var regex = /\S+@\S+\.\S+/;
  return regex.test(email);
}
