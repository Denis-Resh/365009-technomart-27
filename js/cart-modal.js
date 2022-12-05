// Добавление в корзину

var modalCart = document.querySelector('.modal-cart');

var modalCartClose = modalCart.querySelector('.modal-close');
var modalCartReturn = modalCart.querySelector('.cart-button');
var catalogList = document.querySelector('.catalog-list');

catalogList.addEventListener('click', (evt) => {
  evt.preventDefault();
  if(evt.target.classList.contains('buy-button')) {
    modalCart.classList.add("modal-show");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modalCart.classList.contains("modal-show")) {
      modalCart.classList.remove("modal-show");
    }
  }
});

modalCartClose.addEventListener('click', (evt) => {
  evt.preventDefault();
  modalCart.classList.remove("modal-show");
})

modalCartReturn.addEventListener('click', (evt) => {
  evt.preventDefault();
  modalCart.classList.remove("modal-show");
})
