const addToShoppingCartButtons = document.querySelectorAll('.addToCart');
addToShoppingCartButtons.forEach((addToCartButton) => {
  addToCartButton.addEventListener('click', addToCartClicked);
});

const comprarButton = document.querySelector('.comprarButton');
comprarButton.addEventListener('click', comprarButtonClicked);

const shoppingCartItemsContainer = document.querySelector(
  '.shoppingCartItemsContainer'
);

function addToCartClicked(event) {
  const button = event.target;
  const item = button.closest('.item');

  const itemTitle = item.querySelector('.item-title').textContent;
  const itemPrice = item.querySelector('.item-price').textContent;
  const itemImage = item.querySelector('.item-image').src;

  addItemToShoppingCart(itemTitle, itemPrice, itemImage);
}

function addItemToShoppingCart(itemTitle, itemPrice, itemImage) {
  const elementsTitle = shoppingCartItemsContainer.getElementsByClassName(
    'shoppingCartItemTitle'
  );
  for (let i = 0; i < elementsTitle.length; i++) {
    if (elementsTitle[i].innerText === itemTitle) {
      let elementQuantity = elementsTitle[
        i
      ].parentElement.parentElement.parentElement.querySelector(
        '.shoppingCartItemQuantity'
      );
      elementQuantity.value++;
      $('.toast').toast('show');
      updateShoppingCartTotal();
      return;
    }
  }

  const shoppingCartRow = document.createElement('div');
  const shoppingCartContent = `
  <div class="row shoppingCartItem">
        <div class="col-6">
            <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <img src=${itemImage} class="shopping-cart-image"  width="150" height="100">
                <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${itemTitle}</h6>
            </div>
        </div>
        <div class="col-2">
            <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <p class="item-price mb-0 shoppingCartItemPrice">${itemPrice}</p>
            </div>
        </div>
        <div class="col-4">
            <div
                class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
                    value="1">
                <button class="btn btn-danger buttonDelete" type="button">X</button>
            </div>
        </div>
    </div>`;
  shoppingCartRow.innerHTML = shoppingCartContent;
  shoppingCartItemsContainer.append(shoppingCartRow);

  shoppingCartRow
    .querySelector('.buttonDelete')
    .addEventListener('click', removeShoppingCartItem);

  shoppingCartRow
    .querySelector('.shoppingCartItemQuantity')
    .addEventListener('change', quantityChanged);

  updateShoppingCartTotal();
}

function updateShoppingCartTotal() {
  let total = 0;
  const shoppingCartTotal = document.querySelector('.shoppingCartTotal');

  const shoppingCartItems = document.querySelectorAll('.shoppingCartItem');

  shoppingCartItems.forEach((shoppingCartItem) => {
    const shoppingCartItemPriceElement = shoppingCartItem.querySelector(
      '.shoppingCartItemPrice'
    );
    const shoppingCartItemPrice = Number(
      shoppingCartItemPriceElement.textContent.replace('$', '')
    );
    const shoppingCartItemQuantityElement = shoppingCartItem.querySelector(
      '.shoppingCartItemQuantity'
    );
    const shoppingCartItemQuantity = Number(
      shoppingCartItemQuantityElement.value
    );
    total = total + shoppingCartItemPrice * shoppingCartItemQuantity;
  });
  shoppingCartTotal.innerHTML = `${total.toFixed(2)}$`;
}

function removeShoppingCartItem(event) {
  const buttonClicked = event.target;
  buttonClicked.closest('.shoppingCartItem').remove();
  updateShoppingCartTotal();
}

function quantityChanged(event) {
  const input = event.target;
  input.value <= 0 ? (input.value = 1) : null;
  updateShoppingCartTotal();
}

function comprarButtonClicked() {
  shoppingCartItemsContainer.innerHTML = '';
  updateShoppingCartTotal();
}

$(document).ready(function(){
  $("#clickremera").click(function(){
    $("#remerabowie").fadeTo("slow", 1000);
    $("#remeratina").fadeTo("slow", 100);
    $("#remerafleetwood").fadeTo("slow", 100);
    $("#camperagaga").fadeTo("slow", 0.20);
    $("#camperaelton").fadeTo("slow", 0.20);
    $("#vestidolana").fadeTo("slow", 0.20);
    $("#buzostyles").fadeTo("slow", 0.20);
    $("#buzodoja").fadeTo("slow", 0.20);
  });
});

$(document).ready(function(){
  $("#clickbuzo").click(function(){
    $("#remerabowie").fadeTo("slow", 0.20);
    $("#remeratina").fadeTo("slow", 0.20);
    $("#remerafleetwood").fadeTo("slow", 0.20);
    $("#camperagaga").fadeTo("slow", 0.20);
    $("#camperaelton").fadeTo("slow", 0.20);
    $("#vestidolana").fadeTo("slow", 100);
    $("#buzostyles").fadeTo("slow", 100);
    $("#buzodoja").fadeTo("slow", 100);
  });
});

$(document).ready(function(){
  $("#clickcampera").click(function(){
    $("#remerabowie").fadeTo("slow", 0.20);
    $("#remeratina").fadeTo("slow", 0.20);
    $("#remerafleetwood").fadeTo("slow", 0.20);
    $("#camperagaga").fadeTo("slow", 100);
    $("#camperaelton").fadeTo("slow", 100);
    $("#vestidolana").fadeTo("slow", 0.20);
    $("#buzostyles").fadeTo("slow", 0.20);
    $("#buzodoja").fadeTo("slow", 0.20);
  });
});


$(document).ready(function(){
  $("#clickborrar").click(function(){
    $("#remerabowie").fadeTo("slow", 100);
    $("#remeratina").fadeTo("slow", 100);
    $("#remerafleetwood").fadeTo("slow", 100);
    $("#camperagaga").fadeTo("slow", 100);
    $("#camperaelton").fadeTo("slow", 100);
    $("#vestidolana").fadeTo("slow", 100);
    $("#buzostyles").fadeTo("slow", 100);
    $("#buzodoja").fadeTo("slow", 100);
  });
});

