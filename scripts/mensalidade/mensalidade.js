// Importa o array de dados dataMensalidade do arquivo dataMensalidade.js
import { dataMensalidade } from "../../data/dataMensalidade.js";

// Função para obter todas as mensalidades com uma estrutura de objeto específica
export function getAllMensalidade() {
  // Utiliza o método map para criar um novo array com objetos contendo apenas os campos idMensalidade e preco
  const newData = dataMensalidade.map((e) => ({
    idMensalidade: e.idMensalidade,
    preco: e.preco,
  }));

  return newData; // Retorna o novo array com as mensalidades formatadas
}

// Função para obter uma mensalidade por ID utilizando o método find

export function getById(id) {
  const newData = dataMensalidade.find((e) => e.idMensalidade === id);

  return newData ? newData : "Não encontramos essa mensalidade"; // Retorna a mensalidade encontrada ou uma mensagem se não encontrada
}

// Função para obter uma mensalidade por ID utilizando um loop for

export function getMensalidadeById(id) {
  // Itera sobre o array dataMensalidade e retorna a primeira mensalidade com o ID correspondente
  for (let index = 0; index < dataMensalidade.length; index++) {
    if (dataMensalidade[index].idMensalidade === id) {
      return dataMensalidade[index];
    }
  }

  return "Mensalidade não encontrada"; // Retorna uma mensagem se a mensalidade não for encontrada
}

console.log(getMensalidadeById(4)); // Exemplo de uso da função getMensalidadeById com um ID específico

//Este código define três funções para manipular o array dataMensalidade, cada uma com um propósito específico:

//getAllMensalidade(): Retorna um novo array contendo objetos com os campos idMensalidade e preco de todas as mensalidades.
//getById(id): Retorna o objeto da mensalidade correspondente ao ID fornecido ou uma mensagem se não encontrar a mensalidade com o ID especificado.
//getMensalidadeById(id): Utiliza um loop for para buscar e retornar a mensalidade com o ID específico ou uma mensagem se não encontrar.
//Cada função é útil para diferentes necessidades de busca e manipulação dos dados de mensalidades.
