// Importa os dados dos clientes do módulo dataClientes.js
import { dataClientes } from "../../data/dataClientes.js";

// Função para calcular o saldo total das mensalidades dos clientes
export function calcMensalidade() {
  let saldo = 0; // Inicializa o saldo total como zero

  // Itera sobre o array de clientes
  for (let index = 0; index < dataClientes.length; index++) {
    // Verifica o valor do campo idMensalidade de cada cliente e adiciona ao saldo correspondente
    if (dataClientes[index].idMensalidade === 1) {
      saldo += 14.99; // Adiciona 14.99 ao saldo se idMensalidade for 1
    }

    if (dataClientes[index].idMensalidade === 2) {
      saldo += 49.99; // Adiciona 49.99 ao saldo se idMensalidade for 2
    }

    if (dataClientes[index].idMensalidade === 3) {
      saldo += 24.99; // Adiciona 24.99 ao saldo se idMensalidade for 3
    }

    if (dataClientes[index].idMensalidade === 4) {
      saldo += 34.99; // Adiciona 34.99 ao saldo se idMensalidade for 4
    }

    if (dataClientes[index].idMensalidade === 5) {
      saldo += 44.99; // Adiciona 44.99 ao saldo se idMensalidade for 5
    }
  }

  return saldo; // Retorna o saldo total das mensalidades
}
