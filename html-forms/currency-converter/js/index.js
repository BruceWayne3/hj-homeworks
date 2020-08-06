`use strict`;
const from = document.getElementById('from');
const to = document.getElementById('to');
const content = document.getElementById('content');
const loader = document.getElementById('loader');
const result = document.getElementById('result');
const source = document.getElementById('source');

const xhr = new XMLHttpRequest();

xhr.addEventListener('loadstart', function() {
	loader.classList.remove('hidden');
});

xhr.addEventListener('loadend', function() {
	loader.classList.add('hidden');
	content.classList.remove('hidden');

	const data = JSON.parse(xhr.responseText);
	let currencyCodes = [];

	for(let currency of data) {
		currencyCodes.push(`<option value="${currency.value}">${currency.code}</option>`);
	}

	from.innerHTML = currencyCodes.join('');
	to.innerHTML = currencyCodes.join('');
	
	source.addEventListener('input', function() {
		result.value = (source.value * from.value / to.value).toFixed(2);
	});

	from.addEventListener('input', function() {
		result.value = (source.value * from.value / to.value).toFixed(2);
	});

	to.addEventListener('input', function() {
		result.value = (source.value * from.value / to.value).toFixed(2);
	});
});
xhr.open('GET', 'https://neto-api.herokuapp.com/currency', true);
xhr.send();
