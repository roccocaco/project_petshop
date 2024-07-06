// Carrega os usuários do localStorage
let usuarios = JSON.parse(localStorage.getItem("usuarios"));

// Seleciona os elementos do formulário e do botão de envio
const inputEmail = document.getElementById("input-email");
const inputPassword = document.getElementById("input-password");
const buttonSubmit = document.getElementById("button-submit");

// Adiciona um evento de clique ao botão de envio
buttonSubmit.addEventListener("click", function (event) {
  event.preventDefault(); // Previne o comportamento padrão do formulário

  // Obtém o valor dos campos de e-mail e senha
  const email = inputEmail.value;
  const password = inputPassword.value;

  // Validar e-mail
  if (!email) {
    alert("Por favor, insira um e-mail.");
    return;
  } else if (!validateEmail(email)) {
    alert("Por favor, insira um e-mail válido.");
    return;
  }

  // Validar senha
  if (!password) {
    alert("Por favor, insira uma senha.");
    return;
  } else if (password.length < 6) {
    alert("A senha deve ter pelo menos 6 caracteres.");
    return;
  }

  // Procurar pelo usuário no array de usuários
  const usuario = usuarios.find(
    (usuario) => usuario.email === email && usuario.password === password
  );

  // Se o usuário for encontrado, redireciona para a página inicial
  if (usuario) {
    window.location.href = "../../index.html";
  } else {
    alert("Usuário não encontrado.");
  }
});

// Função para validar o formato do e-mail usando expressão regular
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
