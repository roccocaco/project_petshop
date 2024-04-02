import { dataServicos } from "../../data/dataServicos.js";

export function getAllServicos() {
  const newData = dataServicos.map((e) => ({
    idServico: e.idServico,
    servico: e.servico,
    preco: e.preco,
  }));

  return newData;
}

export function getById(id) {
  const newData = dataServicos.find(e => e.idServico === id);

  return newData ? newData : 'Servico não encontrado';
};

export function getServicosById(id) {
  for (let index = 0; index < dataServicos.length; index++) {
    if (dataServicos[index].idServico === id) {
      return dataServicos[index];
    };
    
  };
  return 'Não existe esse servico'
};

console.log(getServicosById(5));