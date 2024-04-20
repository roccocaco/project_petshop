import { getAllServicos } from "./scripts/servicos/servicos.js";

const servicos = getAllServicos();
const divServicos = document.getElementById("div-servicos");
const modalBodyServico = document.getElementById("modal-body-servico");
let btnAdd = document.querySelectorAll('.btn-add');

let valorTotal = 0;

function createElementsServicos() {
  servicos.map((e) => divServicos.innerHTML += ` 
    <div class="col-sm-12 col-md-6 col-lg-3 d-flex justify-content-center mb-2">
      <div class="card ${e.css}" style="width: 18rem;">
        <img src="${e.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-text">${e.cliente}</h5>
          <p class="card-text">${e.servico}</p>
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
      `;
    })
  });
});



