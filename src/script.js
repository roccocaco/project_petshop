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

    <div class="col-sm-4 m-5 text-center">

    <div class="card text-white bg-dark" style="width: 18rem;">
  <img src=${e.url}>
  <div class="card-body">
    <h5 class="card-text text-warning">${e.cliente}</h5>
    <h6 class="card-text">${e.servico} para ${e.pet}</h6>
    <p class="card-text">Valor do serviço: R$ ${e.preco}</p>
  </div>
</div>

  `)
  );
}

createElementsServicos();
