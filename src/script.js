import { dataClientes } from "./data/dataClientes.js";
import { dataMensalidade } from "./data/dataMensalidade.js";
import { dataPets } from "./data/dataPets.js";
import { dataServicos } from "./data/dataServicos.js";
import { dataVendas } from "./data/dataVendas.js";
import { getAllServicos } from "./scripts/servicos/servicos.js";

const servicos = getAllServicos();

const divServicos = document.getElementById("div-servicos");

function createElementsServicos() {
  servicos.map(
    (e) =>
      (divServicos.innerHTML += ` 

    <div class="col-sm-12 col-md-6 col-lg-3 d-flex justify-content-center mb-2">
      <div class="card ${e.css}" style="width: 18rem;">
        <img src="${e.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-text">${e.cliente}</h5>
          <p class="card-text">${e.servico}</p>
          <p class="card-text">Valor do serviço: <span class="fw-bold">R$ ${e.preco}</span></p>
          <button class="btn btn-danger mb-2">Adicionar Serviço</button>
          <a href="/src/pages/servicos/index.html" class="btn btn-success">Finalizar Serviço</a>
        </div>
      </div>
    </div>

  `)
  );
}

createElementsServicos();
