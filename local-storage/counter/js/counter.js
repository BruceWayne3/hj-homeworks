'use strict';
const result = document.getElementById('counter');
const increment = document.getElementById('increment');
const decrement = document.getElementById('decrement');
const reset = document.getElementById('reset');

if (!localStorage.counter) {
	localStorage.counter = 0;
	result.textContent = localStorage.counter;
} else {
	result.textContent = localStorage.counter;
}

increment.addEventListener('click', function() {
	localStorage.counter++;
	result.textContent = localStorage.counter;
})

decrement.addEventListener('click', function() {
	localStorage.counter--;
	result.textContent = localStorage.counter;
})

reset.addEventListener('click', function() {
	localStorage.clear();
	localStorage.counter = 0;
	result.textContent = localStorage.counter;
})
