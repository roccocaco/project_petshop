// IMPORTAÇÕES
import { dataClientes } from "../../data/dataClientes.js";
import { dataMensalidade } from "../../data/dataMensalidade.js";

// SELETORES
const formCadastro = document.getElementById('form-cadastro');
const resultadoMensalidade = document.getElementById('resultado-mensalidade');

let data = {
    idCliente: "",
    cliente: "",
    telefone: "",
    email: "",
    password: "",
    idPets: [],
    idMensalidade: "",
    idServicos: "",
};

// EVENTOS
window.addEventListener('DOMContentLoaded', () => {
    // Verificano se não existe o array dentro do localStorage
    if (!localStorage.getItem('usuarios')) {
        // Vamos Adicionar um array de objetos
        localStorage.setItem('usuarios', JSON.stringify(dataClientes));
    };

});

formCadastro.addEventListener('submit', (event) => {
    // previne a atualização da pagina
    event.preventDefault();

    console.log('RESULTADO DO CLICK', data)

    if (data.idMensalidade === '0') {
        return alert('Escolha uma mensalidade');
    }

    // USAR LOCAL STORAGE PARA ARMAZENAR O VALOR DE DATA no LOCAL STORAGE
    localStorage.setItem('usuarios', JSON.stringify(data));

    alert('Usuário cadastrado com sucesso!');
    // window.location.reload();
});

formCadastro.addEventListener('change', ({ target }) => {
    const { value, name } = target;


    data = {
        ...data,
        [name]: value
    }

    console.log(data);

    switch (data.idMensalidade) {
        case '0':
            resultadoMensalidade.innerHTML = '<p>Escolha uma mensalidade</p>'
            break;
        case '1':
            resultadoMensalidade.innerHTML = `<p>O valor da mensalidade é: R$ ${dataMensalidade[0].preco}</p>`
            break;
        case '2':
            resultadoMensalidade.innerHTML = `<p>O valor da mensalidade é: R$ ${dataMensalidade[1].preco}</p>`
            break;
        case '3':
            resultadoMensalidade.innerHTML = `<p>O valor da mensalidade é: R$ ${dataMensalidade[2].preco}</p>`
            break;
        default:
            break;
    }
});


