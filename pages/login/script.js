let usuarios = JSON.parse(localStorage.getItem("usuarios"));
const inputEmail = document.getElementById("input-email");
const inputPassword = document.getElementById("input-password");
const buttonSubmit = document.getElementById("button-submit");

buttonSubmit.addEventListener("click", function (event) {
  event.preventDefault();
  const email = inputEmail.value;
  const password = inputPassword.value;

   // Validar e-mail
   // se nao tiver um email, insira um. 
   if (!email) {
    alert("Por favor, insira um e-mail.");
    return;
    // se nao for um email valido, o email inválido é sem @.com.
  } else if (!validateEmail(email)) {
    alert("Por favor, insira um e-mail válido.");
    return;
  }

  // Validar senha
  // se o campo password tiver em branco.
  if (!password) {
    alert("Por favor, insira uma senha.");
    return;
// se tiver menos que 6 caracteres, nao aceita.
  } else if (password.length < 6) {
    alert("A senha deve ter pelo menos 6 caracteres.");
    return;
  }

  // o email e password tem que ser iguais.
  const usuario = usuarios.find(
    (usuario) => usuario.email === email && usuario.password === password
  );

  // se o usuario for encontrado, irá para pagina inicial.
  if (usuario) {
    return (window.location.href = "../../index.html");
  // se nao for encontrado.
  } else {
    alert("usuario nao encontrado");
  }
});

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
