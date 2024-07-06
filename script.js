// Importa a função getAllServicos do arquivo servicos.js
import { getAllServicos } from "./scripts/servicos/servicos.js";

// Obtém todos os serviços utilizando a função importada
const servicos = getAllServicos();

// Obtém referências para os elementos do DOM
const divServicos = document.getElementById("div-servicos");
const modalBodyServico = document.getElementById("modal-body-servico");
let btnAdd = document.querySelectorAll(".btn-add"); // Seleciona todos os botões de adicionar serviço

let valorTotal = 0;

// Objeto para armazenar os dados do checkout
const checkOut = {
  servicos: [],
  valores: [],
  imgs: [],
  valorTotal,
};

// Função para criar elementos HTML dos serviços e renderizá-los na página
function createElementsServicos() {
  // Utiliza o método map para iterar sobre o array de serviços e gerar o HTML correspondente
  servicos.map(
    (e) =>
      (divServicos.innerHTML += ` 
    <div class="col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center mb-4">
      <div class="card ${e.css}" style="width: 24rem;">
        <img src="${e.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-text">${e.servico}</h5>
          <p class="card-text">${e.descricao}</p>
          <p class="card-text">Valor do serviço: <span class="fw-bold">R$ ${e.preco}</span></p>
          <button class="btn btn-success btn-add mb-2" data-bs-toggle="modal" data-bs-target="#modalServico">Adicionar Serviço</button>
        </div>
      </div>
    </div>`)
  );
  btnAdd = document.querySelectorAll(".btn-add"); // Atualiza a lista de botões de adicionar serviço após adicionar HTML dinâmico
}

// Evento executado quando a janela é carregada
window.addEventListener("DOMContentLoaded", () => {
  createElementsServicos(); // Chama a função para criar os elementos de serviço na página

  // Itera sobre todos os botões de adicionar serviço
  btnAdd.forEach((element, index) => {
    // Adiciona um ouvinte de evento para o clique em cada botão
    element.addEventListener("click", () => {
      // Atualiza o HTML do corpo do modal com informações do serviço selecionado
      modalBodyServico.innerHTML = `
        <p>Valor Total: ${(valorTotal += servicos[index].preco)}</p>
        <p>${servicos[index].servico}</p>
      `;

      // Atualiza os dados do checkout com o serviço selecionado
      checkOut.servicos.push(servicos[index].servico);
      checkOut.valores.push(servicos[index].preco);
      checkOut.imgs.push(servicos[index].img);
      checkOut.valorTotal = valorTotal;

      // Armazena os dados do checkout no localStorage
      localStorage.setItem("valorTotal", JSON.stringify(checkOut));
    });
  });
});

//Este código JavaScript realiza as seguintes operações:

//Importa a função getAllServicos do arquivo servicos.js.
//Obtém todos os serviços através da função importada.
//Define uma função createElementsServicos para criar elementos HTML na página com base nos dados dos serviços.
//Adiciona um evento de carregamento da janela para chamar a função createElementsServicos e criar os elementos na página.
//Define um evento de clique para cada botão "Adicionar Serviço", que atualiza o conteúdo do modal com informações do serviço selecionado e atualiza os dados do checkout (checkOut).
//Armazena os dados atualizados do checkout no localStorage sempre que um serviço é adicionado.
//Esse código permite que os usuários visualizem serviços, adicionem-nos ao checkout e armazenem essas seleções para posterior uso, como em uma página de checkout ou carrinho de compras.
