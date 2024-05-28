let ValorTotal = parseFloat(localStorage.getItem('valorTotal')) || 0;
const divCheckOut = document.getElementById("div-checkout");



divCheckOut.innerHTML = `
  <p>${ValorTotal}</p>
`