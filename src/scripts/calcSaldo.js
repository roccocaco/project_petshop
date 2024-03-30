import { dataClientes } from "../data/dataClientes.js";

export function calcSaldo() {
    let saldo = 0;

    for (let index = 0; index < dataClientes.length; index++) {
        if (dataClientes[index].idMensalidade === 1) {
            saldo += 14.99
        };

        if (dataClientes[index].idMensalidade === 2) {
            saldo += 49.99
        };

        if (dataClientes[index].idMensalidade === 3) {
            saldo += 24.99
        };

        if (dataClientes[index].idMensalidade === 4) {
            saldo += 34.99
        };

        if (dataClientes[index].idMensalidade === 5) {
            saldo += 44.99
        };

    }

    return saldo;
};