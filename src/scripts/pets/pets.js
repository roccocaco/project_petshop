import { dataPets } from "../../data/dataPets.js";

export function getAllPets() {
  const newData = dataPets.map((e) => ({
    idPet: e.id,
    nomeDoPet: e.nomeDoPet,
    pet: e.pet,
  }));

  return newData;
}

export function getById(id) {
  const newData = dataPets.find((e) => e.id === id);

  return newData ? newData : "Não existe esse Pet";
}

export function getPetsById(id) {
  for (let index = 0; index < dataPets.length; index++) {
    if (dataPets[index].id === id) {
      return dataPets[index];
    }
  }

  return "Não existe esse Pet";
}

export function getNomeDoPet(nomeDoPet) {
  for (let index = 0; index < dataPets.length; index++) {
    if (dataPets[index].nomeDoPet === nomeDoPet) {
      return dataPets[index];
    }
  }

  return "Nome não encontrado";
}

console.log(getNomeDoPet("Isaac"));
