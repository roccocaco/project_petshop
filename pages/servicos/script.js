document.addEventListener("DOMContentLoaded", function () {
  const decreaseButtons = document.querySelectorAll(".btn-link.fa-minus");
  const increaseButtons = document.querySelectorAll(".btn-link.fa-plus");
  const quantityInputs = document.querySelectorAll('input[name="quantity"]');

  // Adicionar evento para botão de diminuir quantidade
  decreaseButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const input = button.nextElementSibling; // Input de quantidade
      const currentValue = parseInt(input.value);
      if (currentValue > 0) {
        input.value = currentValue - 1;
        updateItemTotal(button.closest("tr")); // Atualizar total do item
        updateCartTotal(); // Atualizar total do carrinho
      }
    });
  });

  // Adicionar evento para botão de aumentar quantidade
  increaseButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const input = button.previousElementSibling; // Input de quantidade
      const currentValue = parseInt(input.value);
      input.value = currentValue + 1;
      updateItemTotal(button.closest("tr")); // Atualizar total do item
      updateCartTotal(); // Atualizar total do carrinho
    });
  });

  // Adicionar evento para inputs de quantidade
  quantityInputs.forEach((input) => {
    input.addEventListener("change", function () {
      if (parseInt(this.value) < 0) {
        this.value = 0;
      }
      updateItemTotal(this.closest("tr")); // Atualizar total do item
      updateCartTotal(); // Atualizar total do carrinho
    });
  });

  // Função para atualizar o preço total de um item na tabela
  function updateItemTotal(row) {
    const quantity = parseInt(
      row.querySelector('input[name="quantity"]').value
    );
    const pricePerItem = parseFloat(
      row.querySelector("td:last-child p").innerText.replace("$", "")
    );
    const total = quantity * pricePerItem;
    row.querySelector("td:last-child p").innerText = `$${total.toFixed(2)}`;
  }

  // Função para atualizar o preço total do carrinho
  function updateCartTotal() {
    let subtotal = 0;
    document.querySelectorAll("tbody tr").forEach((row) => {
      const quantity = parseInt(
        row.querySelector('input[name="quantity"]').value
      );
      const pricePerItem = parseFloat(
        row.querySelector("td:last-child p").innerText.replace("$", "")
      );
      subtotal += quantity * pricePerItem;
    });
    const shipping = 2.99; // Substitua com o cálculo real do frete, se aplicável
    const tax = 0.1 * subtotal; // Exemplo de cálculo de imposto (10%)
    const total = subtotal + shipping + tax;
    document.querySelector(".col-lg-4.col-xl-3").innerHTML = `
      <div class="d-flex justify-content-between" style="font-weight: 500;">
        <p class="mb-2">Subtotal</p>
        <p class="mb-2">$${subtotal.toFixed(2)}</p>
      </div>
      <div class="d-flex justify-content-between" style="font-weight: 500;">
        <p class="mb-0">Shipping</p>
        <p class="mb-0">$${shipping.toFixed(2)}</p>
      </div>
      <hr class="my-4">
      <div class="d-flex justify-content-between mb-4" style="font-weight: 500;">
        <p class="mb-2">Total (tax included)</p>
        <p class="mb-2">$${total.toFixed(2)}</p>
      </div>
    `;
  }
});
