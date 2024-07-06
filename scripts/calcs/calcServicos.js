// Importa o array de dados dataVendas do arquivo dataVendas.js
import { dataVendas } from "../../data/dataVendas.js";

// Função para calcular o saldo total dos serviços vendidos
export function calcServicos() {
  let saldo = 0;

  // Itera sobre o array dataVendas
  for (let index = 0; index < dataVendas.length; index++) {
    // Condições para calcular o saldo com base no tipo de serviço vendido
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

  // Retorna o saldo total calculado
  return saldo;
}
