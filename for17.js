let saldo = 0;
let saldo2 = 0;
let saldo3 = 0;
let saldo4 = 0;
let saldo5 = 0;


const clientes = [
  {
    cliente: "Israel Mendes",
    telefone: "(11) 41593168",
    pets: [1],
    tipoDeMensalidade: 4,
  },

  {
    cliente: "Loma Santos",
    telefone: "(11) 41583269",
    pets: [2],
    tipoDeMensalidade: 1,
  },

  {
    cliente: "Marcos Novaes",
    telefone: "(11) 41553748",
    pets: [3], 
    tipoDeMensalidade: 1,
  },

  {
    cliente: "Antenor Santana",
    telefone: "(11) 41578959",
    pets: [4],
    tipoDeMensalidade: 1,
  },

  {
    cliente: "Raquel Ribeiro",
    telefone: "(11) 41593168",
    pets: [5],
    tipoDeMensalidade: 1, 
  },

  {
    cliente: "Chaves",
    telefone: "(11) 41596578",
    pets: [6], 
    tipoDeMensalidade: 3,
  },

  {
    cliente: "Paulo Costa",
    telefone: "(11) 41567515",
    pets: [7],
    tipoDeMensalidade: 3, 
  },

  {
    cliente: "Vanessa",
    telefone: "(11) 41514897",
    pets: [8],
    tipoDeMensalidade: 5, 
  },
]

const valorMensalidade = [
  {
    pet: "gato",
    tipoDeMensalidade: 1,
    preco: 14.99,
  },

  {
    pet: "ambos",
    tipoDeMensalidade: 2,
    preco: 49.99,
  },

  {
    pet: "cachorro P",
    tipoDeMensalidade: 3,
    preco: 24.99,
  },

  {
    pet: "cachorro M",
    tipoDeMensalidade: 4,
    preco: 34.99,
  },

  {
    pet: "cachorro G",
    tipoDeMensalidade: 5,
    preco: 44.99,
  },

]

const servicos = [
  {
    pet: "gato",
    servico: "banho",
    preco: 49.99,
    cliente: false,
  },

  {
    pet: "gato",
    servico: "banho",
    preco: 24.99,
    cliente: true,
  },

  {
    pet: "cachorro",
    servico: "tosa P",
    preco: 99.99,
    cliente: false,
  },

  {
    pet: "cachorro",
    servico: "tosa P",
    preco: 49.99,
    cliente: true,
  },

  {
    pet: "cachorro",
    servico: "tosa M",
    preco: 149.99,
    cliente: false,
  },

  {
    pet: "cachorro",
    servico: "tosa M",
    preco: 74.99,
    cliente: true,
  },

  {
    pet: "cachorro",
    servico: "tosa G",
    preco: 199.99,
    cliente: false,
  },

  {
    pet: "cachorro",
    servico: "tosa G",
    preco: 99.99,
    cliente: true,
  },

];

const pets = [
  {
    id: 1,
    nomeDoPet: "Isaac",
    nomeDoDono: "Israel",
    pet: "cachorro",
    racaDoPet: "Salsicha",
    tamanhoDoPet: "medio",
  },

  {
    id: 2,
    nomeDoPet: "Lorena",
    nomeDoDono: "Loma",
    pet: "gato",
    racaDoPet: "Ashera",
    tamanhoDoPet: "medio",
  },

  {
    id: 3,
    nomeDoPet: "Miguel",
    nomeDoDono: "Marcos",
    pet: "gato",
    racaDoPet: "Ragdoll",
    tamanhoDoPet: "pequeno",
  },

  {
    id: 4,
    nomeDoPet: "Anthony",
    nomeDoDono: "Antenor",
    pet: "gato",
    racaDoPet: "Siamês",
    tamanhoDoPet: "grande",
  },

  {
    id: 5,
    nomeDoPet: "Rosa",
    nomeDoDono: "Raquel",
    pet: "gato",
    racaDoPet: "Maine Coon",
    tamanhoDoPet: "medio",
  },

  {
    id: 6,
    nomeDoPet: "Chiquinha",
    nomeDoDono: "Chaves",
    pet: "cachorro",
    racaDoPet: "Maine Coon",
    tamanhoDoPet: "pequeno",
  },

  {
    id: 7,
    nomeDoPet: "Paulina",
    nomeDoDono: "Paulo",
    pet: "cachorro",
    racaDoPet: "Poodle",
    tamanhoDoPet: "pequeno",
  },

  {
    id: 8,
    nomeDoPet: "Vany",
    nomeDoDono: "Vanessa",
    pet: "cachorro",
    racaDoPet: "Buldogue",
    tamanhoDoPet: "grande",
  },
];

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