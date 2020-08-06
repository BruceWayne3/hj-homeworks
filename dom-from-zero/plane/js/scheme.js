'use strict';

function el(tagName, attributes, children) {
  const element = document
    .createElement(tagName);
  if (typeof attributes === 'object') {
    Object.keys(attributes).forEach(i => element
      .setAttribute(i, attributes[i]));
  }
  if (typeof children === 'string') {
    element.textContent = children;
  } else if (children instanceof Array) {
    children.forEach(child => element
      .appendChild(child));
}
  return element;
}

const btnSeatMap = document.getElementById('btnSeatMap');
const acSelect = document.getElementById('acSelect');
acSelect.addEventListener('change', function(event) {
	let id = event.currentTarget.value;
	fetch(`https://neto-api.herokuapp.com/plane/${id}`)
	 .then((res) => res.json())
	 .then((data) => btnSeatMap.addEventListener('click', function() {
	 	el('div', {class: 'row seating-row text-center'}, [
	 		el('div', {class: 'col-xs-1 row-number'},
	 			el('h2', {class: ''}, 1))
	 		el('div', {class: 'col-xs-5'}, [
	 			el('div', {class: 'col-xs-4 seat'},
	 				el('span', {class: 'seat-label'}, 'A'))
	 			])])
	 }))
})
