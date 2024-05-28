import { getAllServicos } from "./scripts/servicos/servicos.js";

const servicos = getAllServicos();
const divServicos = document.getElementById("div-servicos");
const modalBodyServico = document.getElementById("modal-body-servico");
let btnAdd = document.querySelectorAll('.btn-add');

let valorTotal = 0;

const checkOut = {
  servicos: [],
  valores: [],
  valorTotal
};

function createElementsServicos() {
  servicos.map((e) => divServicos.innerHTML += ` 
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
  btnAdd = document.querySelectorAll('.btn-add');
};


window.addEventListener('DOMContentLoaded', () => {
  createElementsServicos();

  btnAdd.forEach((element, index) => {
    element.addEventListener('click', () => {
      modalBodyServico.innerHTML = `
        <p>Valor Total: ${valorTotal += servicos[index].preco}</p>
        <p>${servicos[index].servico}</p>
      `;

      checkOut.servicos.push(servicos[index].servico);
      checkOut.valores.push(servicos[index].preco);
      checkOut.valorTotal = valorTotal;

      localStorage.setItem('valorTotal', JSON.stringify(checkOut));
    })
  });
});



