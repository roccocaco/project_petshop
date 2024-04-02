import { dataClientes } from "../../data/dataClientes.js";

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

export function getById(id) {
    for (let index = 0; index < dataClientes.length; index++) {
        if (dataClientes[index].idCliente === id) {
            return dataClientes[index];
        };
    };

    return 'Não existe cliente com esse "id"';
};

export function getClienteById(id) {
    const newData = dataClientes.find(e => e.idCliente === id);

    return newData ? newData : 'Não existe cliente com esse "id"';
};
