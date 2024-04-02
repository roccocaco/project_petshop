import { dataVendas } from "../../data/dataVendas.js";

export function getAllVendas() {
  const newData = dataVendas.map((e) => ({
    idVenda: e.idVenda,
    tipoServico: e.tipoServico,
    idCliente: e.idCliente,
  }));

  return newData;
}

console.log(getAllVendas());