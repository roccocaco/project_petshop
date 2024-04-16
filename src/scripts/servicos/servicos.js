import { dataServicos } from "../../data/dataServicos.js";

export function getAllServicos() {
  const newData = dataServicos.map((e) => ({
    pet: e.pet,
    url: e.url,
    servico: e.servico,
    preco: e.preco,
    cliente: e.cliente ? "Mensalidade" : "Preço Único",
    css: e.cliente ? "cliente" : "comum",
    img: e.img 
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

