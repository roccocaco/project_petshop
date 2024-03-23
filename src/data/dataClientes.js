let saldo = 0;
let saldo2 = 0;
let saldo3 = 0;
let saldo4 = 0;
let saldo5 = 0;

export const dataClientes = [
  {
    idCliente: 1,
    cliente: "Israel Mendes",
    telefone: "(11) 41593168",
    pets: [1],
    tipoDeMensalidade: 4,
  },

  {
    idCliente: 2,
    cliente: "Loma Santos",
    telefone: "(11) 41583269",
    pets: [2],
    tipoDeMensalidade: 1,
  },

  {
    idCliente: 3,
    cliente: "Marcos Novaes",
    telefone: "(11) 41553748",
    pets: [3], 
    tipoDeMensalidade: 1,
  },

  {
    idCliente: 4,
    cliente: "Antenor Santana",
    telefone: "(11) 41578959",
    pets: [4],
    tipoDeMensalidade: 1,
  },

  {
    idCliente: 5,
    cliente: "Raquel Ribeiro",
    telefone: "(11) 41593168",
    pets: [5],
    tipoDeMensalidade: 1, 
  },

  {
    idCliente: 6,
    cliente: "Chaves",
    telefone: "(11) 41596578",
    pets: [6], 
    tipoDeMensalidade: 3,
  },

  {
    idCliente: 7,
    cliente: "Paulo Costa",
    telefone: "(11) 41567515",
    pets: [7],
    tipoDeMensalidade: 3, 
  },

  {
    idCliente: 8,
    cliente: "Vanessa",
    telefone: "(11) 41514897",
    pets: [8],
    tipoDeMensalidade: 5, 
  },
]






for (let index = 0; index < clientes.length; index++) {
    if(clientes[index].tipoDeMensalidade === 1){
      saldo += 14.99
    }

    if(clientes[index].tipoDeMensalidade === 2){
      saldo2 += 49.99
    }

    if(clientes[index].tipoDeMensalidade === 3){
      saldo3 += 24.99
    }

    if(clientes[index].tipoDeMensalidade === 4){
      saldo4 += 34.99
    }

    if(clientes[index].tipoDeMensalidade === 5){
      saldo5 += 44.99
    }
     
}
console.log(saldo5)