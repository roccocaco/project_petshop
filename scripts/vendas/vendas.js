// Importa o array de dados dataVendas do arquivo dataVendas.js
import { dataVendas } from "../../data/dataVendas.js";

// Função para obter todas as vendas com uma estrutura de objeto específica
export function getAllVendas() {
  // Utiliza o método map para criar um novo array com objetos contendo os campos especificados
  const newData = dataVendas.map((e) => ({
    idVenda: e.idVenda,
    tipoServico: e.tipoServico,
    idCliente: e.idCliente,
  }));

  return newData; // Retorna o novo array com as vendas formatadas
}

// Função para obter uma venda por ID utilizando o método find
export function getById(id) {
  const newData = dataVendas.find((e) => e.idVenda === id);

  return newData ? newData : "Não existe essa venda"; // Retorna a venda encontrada ou uma mensagem se não encontrada
}

console.log(getById(4)); // Exemplo de uso da função getById com o ID 4
