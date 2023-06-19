
const botaoCarrinho = document.getElementById('botao-carrinho');
const carrinho = document.querySelector('.carrinho');

botaoCarrinho.addEventListener('click', () => {
  if (carrinho.style.display === 'none') {
    carrinho.style.display = 'block';
  } else {
    carrinho.style.display = 'none';
  }
});



const buttons = document.querySelectorAll('.produto button');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');

let cart = {}; // Armazena os itens do carrinho com suas quantidades

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const productName = button.parentNode.querySelector('h2').textContent;
    const productPrice = parseFloat(button.parentNode.querySelector('p').textContent.replace('R$', ''));

    if (cart[productName]) {
      cart[productName].quantity++;
    } else {
      cart[productName] = {
        price: productPrice,
        quantity: 1
      };
    }

    renderCart();

    const existingRemoveButton = button.parentNode.querySelector('.remove-button');
    if (existingRemoveButton) {
      existingRemoveButton.parentNode.removeChild(existingRemoveButton);
    }

    const removeButton = document.createElement('button');
    removeButton.textContent = '-';
    removeButton.classList.add('remove-button');
    removeButton.addEventListener('click', () => {
      if (cart[productName].quantity > 1) {
        cart[productName].quantity--;
      } else {
        delete cart[productName];
      }

      renderCart();
    });

    button.parentNode.appendChild(removeButton);
  });
});

function renderCart() {
  cartItems.innerHTML = '';
  let total = 0;

  for (const itemName in cart) {
    const item = cart[itemName];

    const listItem = document.createElement('li');
    listItem.textContent = `${itemName} (${item.quantity})`;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remover';
    removeButton.addEventListener('click', () => {
      delete cart[itemName];
      renderCart();
    });

    listItem.appendChild(removeButton);
    cartItems.appendChild(listItem);

    total += item.price * item.quantity;
  }

  cartTotal.textContent = `Total: R$${total.toFixed(2)}`;
}

;