// Obtém o objeto 'valorTotal' do localStorage, se existir, ou define como 0 se não existir
let checkOut = JSON.parse(localStorage.getItem("valorTotal")) || 0;

// Seleciona os elementos HTML onde os dados serão exibidos
const divCheckOut = document.getElementById("div-checkout");
const divCardBody = document.getElementById("div-card-body");
const divCardResumo = document.getElementById("div-card-resumo");

// Renderiza cada item do checkout utilizando os dados armazenados
checkOut.imgs
  .map((element, index) => {
    divCardBody.innerHTML += `
    <div class="col-lg-3 col-md-12 mb-4 mb-lg-0">
      <!-- Imagem -->
      <div class="bg-image hover-overlay hover-zoom ripple rounded"
          data-mdb-ripple-color="light">
          <img src="../../${element}"
              class="w-100" alt="Imagem do Produto" />
          <a href="#!">
              <div class="mask" style="background-color: rgba(251, 251, 251, 0.2)"></div>
          </a>
      </div>
      <!-- Imagem -->
    </div>

    <div class="col-lg-5 col-md-6 mb-4 mb-lg-0">
      <!-- Dados -->
      <p><strong>${checkOut.servicos[index]}</strong></p>
      <button type="button" data-mdb-button-init data-mdb-ripple-init
          class="btn btn-danger btn-sm me-1 mb-2" data-mdb-tooltip-init
          title="Remover item">
          <i class="fas fa-trash"></i>
      </button>
      <!-- Dados -->
    </div>

    <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
      <!-- Quantidade -->
      <div class="d-flex mb-4" style="max-width: 300px">
        <button data-mdb-button-init data-mdb-ripple-init
            class="btn btn-primary px-3 me-2"
            onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
            <i class="fas fa-minus"></i>
        </button>

        <div data-mdb-input-init class="form-outline">
            <input id="form1" min="0" name="quantity" value="1" type="number"
                class="form-control" />
            <label class="form-label" for="form1"></label>
        </div>

        <button data-mdb-button-init data-mdb-ripple-init
            class="btn btn-primary px-3 ms-2"
            onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
            <i class="fas fa-plus"></i>
        </button>
      </div>
      <!-- Quantidade -->

      <!-- Preço -->
      <p class="text-start text-md-center">
          <strong>R$ ${checkOut.valores[index]}</strong>
      </p>
      <!-- Preço -->
    </div>
  `;
  })
  .join(); // Utiliza .join() para transformar o array em uma string e adicionar ao HTML de uma vez

// Renderiza o resumo do carrinho
divCardResumo.innerHTML += `
  <ul class="list-group list-group-flush">
    <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
        Serviços
        <span>R$ ${checkOut.valorTotal}</span>
    </li>
    <li class="list-group-item d-flex justify-content-between align-items-center px-0">
        Taxa
        <span>R$ 5,00</span>
    </li>
    <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
        <div>
            <strong>Preço Total</strong>
            <strong>
                <p class="mb-0">(+ taxas)</p>
            </strong>
        </div>
        <span><strong>R$ ${checkOut.valorTotal + 5}</strong></span>
    </li>
  </ul>

  <button type="button" data-mdb-button-init data-mdb-ripple-init
    class="btn btn-primary btn-lg btn-block">
    Finalizar
  </button>
`;

// divCardBody.innerHTML += `
// <div class="col-lg-3 col-md-12 mb-4 mb-lg-0">
// <!-- Image -->
// <div class="bg-image hover-overlay hover-zoom ripple rounded"
//     data-mdb-ripple-color="light">
//     <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/12a.webp"
//         class="w-100" alt="Blue Jeans Jacket" />
//     <a href="#!">
//         <div class="mask" style="background-color: rgba(251, 251, 251, 0.2)"></div>
//     </a>
// </div>
// <!-- Image -->
// </div>

// <div class="col-lg-5 col-md-6 mb-4 mb-lg-0">
// <!-- Data -->
// <p><strong>${checkOut.servicos[0]}</strong></p>
// <button type="button" data-mdb-button-init data-mdb-ripple-init
//     class="btn btn-primary btn-sm me-1 mb-2" data-mdb-tooltip-init
//     title="Remove item">
//     <i class="fas fa-trash"></i>
// </button>
// <!-- Data -->
// </div>

// <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
// <!-- Quantity -->
// <div class="d-flex mb-4" style="max-width: 300px">
//     <button data-mdb-button-init data-mdb-ripple-init
//         class="btn btn-primary px-3 me-2"
//         onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
//         <i class="fas fa-minus"></i>
//     </button>

//     <div data-mdb-input-init class="form-outline">
//         <input id="form1" min="0" name="quantity" value="1" type="number"
//             class="form-control" />
//         <label class="form-label" for="form1">Quantity</label>
//     </div>

//     <button data-mdb-button-init data-mdb-ripple-init
//         class="btn btn-primary px-3 ms-2"
//         onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
//         <i class="fas fa-plus"></i>
//     </button>
// </div>
// <!-- Quantity -->

// <!-- Price -->
// <p class="text-start text-md-center">
//     <strong>R$ ${checkOut.valores[0]}</strong>
// </p>
// <!-- Price -->
// </div>
// `
