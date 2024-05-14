let usuarios = JSON.parse(localStorage.getItem("usuarios"));
const inputEmail = document.getElementById("input-email");
const inputPassword = document.getElementById("input-password");
const buttonSubmit = document.getElementById("button-submit");

buttonSubmit.addEventListener("click", function (event) {
  event.preventDefault();
  const email = inputEmail.value;
  const password = inputPassword.value;

  const usuario = usuarios.find(
    (usuario) => usuario.email === email && usuario.password === password
  );

  if (usuario) {
    return (window.location.href = "../../index.html");
  } else {
    alert("usuario nao encontrado");
  }
});
