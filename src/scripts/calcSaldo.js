import { dataClientes } from "../data/dataClientes.js";

export function calcSaldo() {
    let saldo = 0;

    for (let index = 0; index < dataClientes.length; index++) {
        if (dataClientes[index].tipoDeMensalidade === 1) {
            saldo += 14.99
        };

        if (dataClientes[index].tipoDeMensalidade === 2) {
            saldo += 49.99
        };

        if (dataClientes[index].tipoDeMensalidade === 3) {
            saldo += 24.99
        };

        if (dataClientes[index].tipoDeMensalidade === 4) {
            saldo += 34.99
        };

        if (dataClientes[index].tipoDeMensalidade === 5) {
            saldo += 44.99
        };

    }

    return saldo;
};