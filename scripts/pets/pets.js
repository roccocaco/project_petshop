// Importa o array de dados dataPets do arquivo dataPets.js
import { dataPets } from "../../data/dataPets.js";

// Função para obter todos os pets com uma estrutura de objeto específica
export function getAllPets() {
  // Utiliza o método map para criar um novo array com objetos contendo apenas os campos idPet, nomeDoPet e pet
  const newData = dataPets.map((e) => ({
    idPet: e.id,
    nomeDoPet: e.nomeDoPet,
    pet: e.pet,
  }));

  return newData; // Retorna o novo array com os pets formatados
}

// Função para obter um pet por ID utilizando o método find
export function getById(id) {
  const newData = dataPets.find((e) => e.id === id);

  return newData ? newData : "Não existe esse Pet"; // Retorna o pet encontrado ou uma mensagem se não encontrado
}

// Função para obter um pet por ID utilizando um loop for
export function getPetsById(id) {
  // Itera sobre o array dataPets e retorna o primeiro pet com o ID correspondente
  for (let index = 0; index < dataPets.length; index++) {
    if (dataPets[index].id === id) {
      return dataPets[index];
    }
  }

  return "Não existe esse Pet"; // Retorna uma mensagem se o pet não for encontrado
}

// Função para obter um pet por nome utilizando um loop for
export function getNomeDoPet(nomeDoPet) {
  // Itera sobre o array dataPets e retorna o primeiro pet com o nome correspondente
  for (let index = 0; index < dataPets.length; index++) {
    if (dataPets[index].nomeDoPet === nomeDoPet) {
      return dataPets[index];
    }
  }

  return "Nome não encontrado"; // Retorna uma mensagem se o nome do pet não for encontrado
}

console.log(getNomeDoPet("Isaac")); // Exemplo de uso da função getNomeDoPet com um nome específico

//Este código define quatro funções para manipular o array dataPets, cada uma com um propósito específico:

//getAllPets(): Retorna um novo array contendo objetos com os campos idPet, nomeDoPet e pet de todos os pets.
//getById(id): Retorna o objeto do pet correspondente ao ID fornecido ou uma mensagem se não encontrar o pet com o ID especificado.
//getPetsById(id): Utiliza um loop for para buscar e retornar o pet com o ID específico ou uma mensagem se não encontrar.
//getNomeDoPet(nomeDoPet): Utiliza um loop for para buscar e retornar o pet com o nome específico ou uma mensagem se não encontrar.
//Cada função é útil para diferentes necessidades de busca e manipulação dos dados de pets.
