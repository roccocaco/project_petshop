import { dataVendas } from "../../data/dataVendas.js";

export function calcServicos() {
  let saldo = 0;

  for (let index = 0; index < dataVendas.length; index++) {
    if (dataVendas[index].tipoServico === 1) {
      saldo += 49.99;
    }

    if (dataVendas[index].tipoServico === 2) {
      saldo += 24.99;
    }

    if (dataVendas[index].tipoServico === 3) {
      saldo += 99.99;
    }

    if (dataVendas[index].tipoServico === 4) {
      saldo += 49.99;
    }

    if (dataVendas[index].tipoServico === 5) {
      saldo += 149.99;
    }

    if (dataVendas[index].tipoServico === 6) {
      saldo += 74.99;
    }

    if (dataVendas[index].tipoServico === 7) {
      saldo += 199.99;
    }

    if (dataVendas[index].tipoServico === 8) {
      saldo += 99.99;
    }
  }
  return saldo;
}

