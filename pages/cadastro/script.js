// IMPORTAÇÕES
import { dataClientes } from "../../data/dataClientes.js";

// SELETORES
const formCadastro = document.getElementById("form-cadastro");
const resultadoMensalidade = document.getElementById("resultado-mensalidade");

let dataLocalStorage = [];

let dataCadastro = {
  id: "",
  nomeCompleto: "",
  telefone: "",
  email: "",
  password: "",
};

// EVENTOS
window.addEventListener("DOMContentLoaded", () => {
  // Verificano se não existe o array dentro do localStorage
  if (!localStorage.getItem("usuarios")) {
    // Vamos Adicionar um array de objetos
    localStorage.setItem("usuarios", JSON.stringify(dataClientes));
  } else {
    dataLocalStorage = JSON.parse(localStorage.getItem("usuarios"));
    console.log(dataLocalStorage);
  }
});

formCadastro.addEventListener("submit", (event) => {
  // previne a atualização da pagina
  event.preventDefault();

  // ADICIONAR UM NOVO ID
  // VERIFICA O TAMANHO DO ARRAY e ADICIONA MAIS UM
  dataCadastro.id = dataLocalStorage.length + 1;

  // USAR LOCAL STORAGE PARA ARMAZENAR O VALOR DE DATA no LOCAL STORAGE
  dataLocalStorage.push(dataCadastro);
  localStorage.setItem("usuarios", JSON.stringify(dataLocalStorage));

  alert("Usuário cadastrado com sucesso!");
  window.location.reload();
});

formCadastro.addEventListener("change", ({ target }) => {
  const { value, name } = target;
  dataCadastro = {
    ...dataCadastro,
    [name]: value,
  };

  console.log(dataCadastro);
});
