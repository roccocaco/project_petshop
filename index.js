import { dataClientes } from "./src/data/dataClientes.js";

let saldo = 0;

for (let index = 0; index < dataClientes.length; index++) {
    if (dataClientes[index].tipoDeMensalidade === 1) {
        saldo += 14.99
    }

    if (dataClientes[index].tipoDeMensalidade === 2) {
        saldo += 49.99
    }

    if (dataClientes[index].tipoDeMensalidade === 3) {
        saldo += 24.99
    }

    if (dataClientes[index].tipoDeMensalidade === 4) {
        saldo += 34.99
    }

    if (dataClientes[index].tipoDeMensalidade === 5) {
        saldo += 44.99
    }

}
console.log(saldo)
