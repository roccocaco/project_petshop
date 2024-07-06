// Importa a função calcMensalidade do arquivo calcMensalidade.js
import { calcMensalidade } from "./calcMensalidade.js";

// Importa a função calcServicos do arquivo calcServicos.js
import { calcServicos } from "./calcServicos.js";

// Função para calcular o saldo total, somando o resultado das funções calcMensalidade e calcServicos
export function calcSaldoTotal() {
  // Calcula o saldo total somando o resultado das funções calcMensalidade e calcServicos
  // O método toFixed(2) é utilizado para arredondar o resultado para duas casas decimais
  return (calcMensalidade() + calcServicos()).toFixed(2);
}
