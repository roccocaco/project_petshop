import { dataMensalidade } from "../../data/dataMensalidade.js";

export function getAllMensalidade() {
  const newData = dataMensalidade.map((e) => ({
    idMensalidade: e.idMensalidade,
    preco: e.preco,
  }));

  return newData;
}

export function getById(id) {
  const newData = dataMensalidade.find(e => e.idMensalidade === id);

  return newData ? newData : 'Não encontramos essa mensalidade';
};

export function getMensalidadeById(id) {
  for (let index = 0; index < dataMensalidade.length; index++) {
    if (dataMensalidade[index].idMensalidade === id) {
      return dataMensalidade[index];
    };
    
  };

  return 'Mensalidade não encontrada';
};

console.log(getMensalidadeById(4));
