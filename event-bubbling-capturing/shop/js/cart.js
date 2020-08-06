'use strict';

list.addEventListener('click', function(event) {
	if(event.target.classList.contains('add-to-cart')) {
		let item = {
			title: event.target.dataset.title,
			price: event.target.dataset.price
		};
		addToCart(item);
	} else {
		return;
	};
});
