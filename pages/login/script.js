let usuarios = JSON.parse(localStorage.getItem("usuarios"));
const inputEmail = document.getElementById("input-email");
const inputPassword = document.getElementById("input-password");
const buttonSubmit = document.getElementById("button-submit");

buttonSubmit.addEventListener("click", function (event) {
  event.preventDefault();
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

  const usuario = usuarios.find(
    (usuario) => usuario.email === email && usuario.password === password
  );

  if (usuario) {
    return (window.location.href = "../../index.html");
  } else {
    alert("usuario nao encontrado");
  }
});

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
