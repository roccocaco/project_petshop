import { dataVendas } from "../../data/dataVendas.js";

export function getAllVendas() {
  const newData = dataVendas.map((e) => ({
    idVenda: e.idVenda,
    tipoServico: e.tipoServico,
    idCliente: e.idCliente,
  }));

  return newData;
}

export function getById(id) {
  const newData = dataVendas.find(e => e.idVenda === id);

  return newData ? newData : 'Não existe essa venda';
};

console.log(getById(4));