import { dataMensalidade } from "../../data/dataMensalidade.js";

// IMPORTAÇÕES
console.log(dataMensalidade)


// SELETORES
const formCadastro = document.getElementById('form-cadastro');
const resultadoMensalidade = document.getElementById('resultado-mensalidade');

let data = {
    nome: "",
    mensalidade: "0",
    email: "",
    senha: "",
};


// FUNÇÕES

// EVENTOS
formCadastro.addEventListener('submit', (event) => {
    // previne a atualização da pagina
    event.preventDefault();

    console.log('RESULTADO DO CLICK', data)

    if (data.mensalidade === '0') {
        return alert('Escolha uma mensalidade');
    }

    // USAR LOCAL STORAGE PARA ARMAZENAR O VALOR DE DATA no LOCAL STORAGE
    


    ///

    alert('Usuário cadastrado com sucesso!');
    window.location.reload();
});

formCadastro.addEventListener('change', ({ target }) => {
    const { value, name } = target;


    data = {
        ...data,
        [name]: value
    }


    switch (data.mensalidade) {
        case '0':
            resultadoMensalidade.innerHTML = '<p>Escolha uma mensalidade</p>'
            break;
        case '1':
            resultadoMensalidade.innerHTML = `<p>O valor da mensalidade é: R$ ${dataMensalidade[1].preco}</p>`
            break;
        case '2':
            resultadoMensalidade.innerHTML = `<p>O valor da mensalidade é: R$ ${dataMensalidade[2].preco}</p>`
            break;
        case '3':
            resultadoMensalidade.innerHTML = `<p>O valor da mensalidade é: R$ ${dataMensalidade[3].preco}</p>`
            break;
        case '4':
            resultadoMensalidade.innerHTML = `<p>O valor da mensalidade é: R$ ${dataMensalidade[4].preco}</p>`
            break;
        case '5':
            resultadoMensalidade.innerHTML = `<p>O valor da mensalidade é: R$ ${dataMensalidade[5].preco}</p>`
            break;

        default:
            break;
    }

});


