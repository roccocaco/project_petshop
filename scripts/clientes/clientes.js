// Importa o array de dados dataClientes do arquivo dataClientes.js
import { dataClientes } from "../../data/dataClientes.js";

// Função para obter todos os clientes com uma estrutura de objeto específica
export function getAll() {
  const newData = [];

  // Itera sobre o array dataClientes e extrai apenas os campos desejados
  for (let index = 0; index < dataClientes.length; index++) {
    const element = {
      idCliente: dataClientes[index].idCliente,
      cliente: dataClientes[index].cliente,
      telefone: dataClientes[index].telefone,
    };

    newData.push(element);
  }

  return newData; // Retorna um novo array com os objetos formatados
}

// Função para obter todos os clientes utilizando map com uma estrutura de objeto específica
export function getAllClientes() {
  const newData = dataClientes.map((e) => ({
    idCliente: e.idCliente,
    cliente: e.cliente,
    telefone: e.telefone,
  }));

  return newData; // Retorna um novo array com os objetos formatados
}

// Função para obter um cliente por ID
export function getById(id) {
  // Itera sobre o array dataClientes e retorna o objeto do cliente se encontrar o ID correspondente
  for (let index = 0; index < dataClientes.length; index++) {
    if (dataClientes[index].idCliente === id) {
      return dataClientes[index];
    }
  }

  return 'Não existe cliente com esse "id"'; // Retorna uma mensagem se o cliente não for encontrado
}

// Função para obter um cliente por ID utilizando o método find
export function getClienteById(id) {
  const newData = dataClientes.find((e) => e.idCliente === id);

  return newData ? newData : 'Não existe cliente com esse "id"'; // Retorna o cliente encontrado ou uma mensagem se não encontrado
}

// Função para obter um cliente pelo nome do cliente
export function getNomeDoCliente(nomeDoCliente) {
  // Itera sobre o array dataClientes e retorna o primeiro cliente com o nome correspondente
  for (let index = 0; index < dataClientes.length; index++) {
    if (dataClientes[index].cliente === nomeDoCliente) {
      return dataClientes[index];
    }
    return "Cliente não encontrado"; // Retorna uma mensagem se o cliente não for encontrado
  }
}

console.log(getNomeDoCliente("Israel Mendes")); // Exemplo de uso da função getNomeDoCliente com um nome específico



//Este código define várias funções para manipular o array dataClientes, cada uma com um propósito específico:

//getAll(): Retorna um novo array contendo objetos com os campos idCliente, cliente e telefone de todos os clientes.
//getAllClientes(): Utiliza o método map para obter o mesmo resultado que getAll(), retornando um novo array com objetos formatados.
//getById(id): Retorna o objeto do cliente correspondente ao ID fornecido ou uma mensagem se não encontrar o cliente com o ID especificado.
//getClienteById(id): Utiliza o método find para buscar e retornar o cliente com o ID específico ou uma mensagem se não encontrar.
//getNomeDoCliente(nomeDoCliente): Retorna o primeiro cliente encontrado com o nome fornecido ou uma mensagem se não encontrar nenhum cliente com esse nome.
//Cada função é útil para diferentes necessidades de busca e manipulação dos dados de clientes.
