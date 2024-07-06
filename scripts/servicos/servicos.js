// Importa o array de dados dataServicos do arquivo dataServicos.js
import { dataServicos } from "../../data/dataServicos.js";

// Função para obter todos os serviços com uma estrutura de objeto específica
export function getAllServicos() {
  // Utiliza o método map para criar um novo array com objetos contendo os campos especificados
  const newData = dataServicos.map((e) => ({
    pet: e.pet,
    servico: e.servico,
    descricao: e.descricao,
    preco: e.preco,
    css: e.css ? "comum" : "premium", // Define a classe CSS com base na propriedade css do objeto
    url: e.url,
    img: e.img,
  }));

  return newData; // Retorna o novo array com os serviços formatados
}

// Função para obter um serviço por ID utilizando o método find
export function getById(id) {
  const newData = dataServicos.find((e) => e.idServico === id);

  return newData ? newData : "Serviço não encontrado"; // Retorna o serviço encontrado ou uma mensagem se não encontrado
}

// Função para obter um serviço por ID utilizando um loop for
export function getServicosById(id) {
  // Itera sobre o array dataServicos e retorna o primeiro serviço com o ID correspondente
  for (let index = 0; index < dataServicos.length; index++) {
    if (dataServicos[index].idServico === id) {
      return dataServicos[index];
    }
  }

  return "Não existe esse serviço"; // Retorna uma mensagem se o serviço não for encontrado
}

//Este código define três funções para manipular o array dataServicos, cada uma com um propósito específico:

//getAllServicos(): Retorna um novo array contendo objetos formatados com os campos pet, servico, descricao, preco, css, url e img de todos os serviços.
//getById(id): Retorna o objeto do serviço correspondente ao ID fornecido ou uma mensagem se não encontrar o serviço com o ID especificado.
//getServicosById(id): Utiliza um loop for para buscar e retornar o serviço com o ID específico ou uma mensagem se não encontrar.
//Cada função é útil para diferentes necessidades de busca e manipulação dos dados de serviços.
