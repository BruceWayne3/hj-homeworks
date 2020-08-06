'use strict';
fetch('https://neto-api.herokuapp.com/cart/colors')
 .then((res) => {
 	return res.json();
 })
 .then((data) => {
 	const colorSwatch = document.getElementById('colorSwatch');
 	let result = [];
 	for(let color of data) {
 		result.push(`<div data-value="${color.type}" class="swatch-element color ${color.type} ${!color.isAvailable ? 'soldout' : 'available'}">
 			<div class="tooltip">${color.title}</div>
 			<input quickbeam="color" id="swatch-1-${color.type}" type="radio" name="color" value="${color.type}" ${color.isAvailable ? '' : 'disabled'}>
 			<label for="swatch-1-${color.type}" style="border-color: red;">
 			<span style="background-color: ${color.code};"></span>
 			<img class="crossed-out" src="https://neto-api.herokuapp.com/hj/3.3/cart/soldout.png?10994296540668815886">
 			</label>
 			</div>`)
 	}
 	colorSwatch.firstElementChild.outerHTML = result.join('');
 	const colorBtns = document.querySelectorAll('.swatch-element,color');
 	for(let colorBtn of colorBtns) {
 		colorBtn.addEventListener('click', function(event) {
 			if(event.currentTarget.querySelector('input').disabled) {
 				return
 			} else {
 				for(colorBtn of colorBtns) {
 					colorBtn.querySelector('input').removeAttribute('checked');
 				}
 				event.currentTarget.querySelector('input').setAttribute('checked', true);
 			}
 		})
 	}
 })

fetch('https://neto-api.herokuapp.com/cart/sizes')
 .then((res) => {
 	return res.json();
 })
 .then((data) => {
 	const sizeSwatch = document.getElementById('sizeSwatch');
 	let result = [];
 	for(let size of data) {
 		result.push(`<div data-value="${size.type}" class="swatch-element plain ${size.type} ${!size.isAvailable ? 'soldout' : ''}">
 			<input id="swatch-0-${size.type}" type="radio" name="size" value="${size.type}" ${size.isAvailable ? '' : 'disabled'}>
 			<label for="swatch-0-${size.type}">
 			${size.title}
 			<img class="crossed-out" src="https://neto-api.herokuapp.com/hj/3.3/cart/soldout.png?10994296540668815886">
 			</label>
 			</div>`)
 	}
 	sizeSwatch.firstElementChild.outerHTML = result.join('');
 	const sizeBtns = document.querySelectorAll('.swatch-element,plain');
 	for(let sizeBtn of sizeBtns) {
 		sizeBtn.addEventListener('click', function(event) {
 			if(event.currentTarget.querySelector('input').disabled) {
 				return
 			} else {
 				for(sizeBtn of sizeBtns) {
 					sizeBtn.querySelector('input').removeAttribute('checked');
 				}
 				event.currentTarget.querySelector('input').setAttribute('checked', true);
 			}
 		})
 	}
 })

const form = document.getElementById('AddToCartForm');
form.addEventListener('submit', function(event) {
	event.preventDefault();
	let formData = new FormData(form);
	let data = {};
	for(const [k, v] of formData) {
		data[k] = v;
	}
	data.productId = form.dataset.productId;

	fetch('https://neto-api.herokuapp.com/cart', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})
	 .then((res) => {
	 	if (200 <= res.status && res.status < 300) {
	 		return res;
	 	}
	 	throw new Error(res.statusText);
	 })
	 .then((res) => { 
	 	return res.json();
	 })
	 .then((data) => {
	 	console.log(data);
	 })
	 .catch((error) => {
	 	console.log(error);
	 })
})
