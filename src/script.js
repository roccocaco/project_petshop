import { dataClientes } from "./data/dataClientes.js";
import { dataMensalidade } from "./data/dataMensalidade.js";
import { dataPets } from "./data/dataPets.js";
import { dataServicos } from "./data/dataServicos.js";
import { dataVendas } from "./data/dataVendas.js";
import { getAllServicos } from "./scripts/servicos/servicos.js";

const servicos = getAllServicos();

const divServicos = document.getElementById("div-servicos");

function createElementsServicos() {
  servicos.map(e => divServicos.innerHTML += `
    <div>
      <h5>${e.servico} para ${e.cliente} de ${e.pet}</h5>
      <p>Valor do serviço: R$ ${e.preco} </p>

    </div>
  `)
}

createElementsServicos();