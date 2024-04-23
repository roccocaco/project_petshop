import { calcMensalidade } from "./calcMensalidade.js";
import { calcServicos } from "./calcServicos.js";


export function calcSaldoTotal() {
    return (calcMensalidade() + calcServicos()).toFixed(2);
};
