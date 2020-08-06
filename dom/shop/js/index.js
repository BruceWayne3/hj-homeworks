`use strict`;
const buttons = Array.from(document.getElementsByClassName('add'));
const cartTotalPrice = document.getElementById('cart-total-price');
const cartCount = document.getElementById('cart-count');

let count = 0;
let totalPrice = 0;

for(let button of buttons) {
	button.addEventListener('click', function() {
		count++;
		cartCount.innerHTML = count;
		totalPrice += Number(button.dataset.price);
		cartTotalPrice.innerHTML = getPriceFormatted(totalPrice);
	})
}
