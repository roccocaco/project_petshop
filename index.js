import { dataClientes } from "./src/data/dataClientes.js";

let saldo = 0;
let saldo2 = 0;
let saldo3 = 0;
let saldo4 = 0;
let saldo5 = 0;

for (let index = 0; index < dataClientes.length; index++) {
    if (dataClientes[index].tipoDeMensalidade === 1) {
        saldo += 14.99
    }

    if (dataClientes[index].tipoDeMensalidade === 2) {
        saldo2 += 49.99
    }

    if (dataClientes[index].tipoDeMensalidade === 3) {
        saldo3 += 24.99
    }

    if (dataClientes[index].tipoDeMensalidade === 4) {
        saldo4 += 34.99
    }

    if (dataClientes[index].tipoDeMensalidade === 5) {
        saldo5 += 44.99
    }

}
console.log(saldo5)
