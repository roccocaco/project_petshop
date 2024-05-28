let checkOut = (JSON.parse(localStorage.getItem('valorTotal'))) || 0;
const divCheckOut = document.getElementById("div-checkout");


divCheckOut.innerHTML = `
  <div class="row">
    <div class="col">
      <div>
        <h4>Serviços Adicionados</h4>
        <p>${checkOut.servicos.map((element, index) => `
          ${element} R$${checkOut.valores[index]},00
        `).join("<br>")}</p>
      </div>
      <div>
        <h3>Valor Total da compra: R$${checkOut.valorTotal},00 </h3>
        CRIAR METODO DE PAGAMENTO
        PIX
        CARTAO
        AVISTA
      </div>
    </div>
    <div class="col ">
      <a href="../../index.html">Deseja adicionar mais serviços?</a>
      <div class="mt-3">
        <a class="btn btn-success">Finalizar a compra</a>
      </div>
    </div>
  </div>
`