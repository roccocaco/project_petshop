import { dataServicos } from "../../data/dataServicos.js";

export function getAllServicos() {
  const newData = dataServicos.map((e) => ({
    idServico: e.idServico,
    servico: e.servico,
    preco: e.preco,
  }));

  return newData;
}

console.log(getAllServicos());
