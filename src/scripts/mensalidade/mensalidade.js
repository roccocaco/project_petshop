import { dataMensalidade } from "../../data/dataMensalidade.js";

export function getAllMensalidade() {
  const newData = dataMensalidade.map((e) => ({
    idMensalidade: e.idMensalidade,
    preco: e.preco,
  }));

  return newData;
}

console.log(getAllMensalidade());