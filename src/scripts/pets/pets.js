import { dataPets } from "../../data/dataPets.js";

export function getAllPets() {
  const newData = dataPets.map((e) => ({
    idPet: e.id,
    nomeDoPet: e.nomeDoPet,
    pet: e.pet,
  }));

  return newData;
}

console.log(getAllPets());