import { dataClientes } from "../../data/dataClientes.js";

// objetivo CRUD clientes
// Create Read Update Delet

export function getAll() {
    const newData = [];

    for (let index = 0; index < dataClientes.length; index++) {
        const element = {
            "idCliente": dataClientes[index].idCliente,
            "cliente": dataClientes[index].cliente,
            "telefone": dataClientes[index].telefone
        };

        newData.push(element);
    }
    return newData;
};


export function getAllClientes() {
    const newData = dataClientes.map(e => (
        {
            "idCliente": e.idCliente,
            "cliente": e.cliente,
            "telefone": e.telefone 
        }
    ))

    return newData;
}

console.log(getAllClientes());