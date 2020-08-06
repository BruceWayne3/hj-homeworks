'use strict';
const recipeData = function(data) {
	document.querySelector('[data-pic]').setAttribute('style', `background-image: url(${data.pic})`);
	document.querySelector('[data-title]').textContent = data.title;
	document.querySelector('[data-ingredients]').textContent = data.ingredients.join(', ') + '.';
}

function loadRecipe(url) {
	return new Promise((done, fail) => {
		window[recipeData] = done;

		const script = document.createElement('script');
		script.src = `${url}?callback=recipeData`;
		document.body.appendChild(script);
	})
}

const ratingData = function(data) {
	document.querySelector('[data-rating]').textContent = data.rating.toFixed(2);
	document.querySelector('[data-star]').setAttribute('style', `width: ${Math.round(data.rating / 10 * 100)}%`);
	document.querySelector('[data-votes]').textContent = '('+ data.votes + ' оценок)';
}

function loadRating(url) {
	return new Promise((done, fail) => {
		window[ratingData] = done;

		const script = document.createElement('script');
		script.src = `${url}?callback=ratingData`;
		document.body.appendChild(script);
	})
}

const usersData = function(data) {
	let result = [];
	for(const key in data) {
		if(key === 'consumers') {
			for(let consumer of data[key]) {
				result.push(`<img src="${consumer.pic}" title="${consumer.name}">`);
			}
		} else {
			result.push(`<span>(+${data[key]})</span>`);
		}
		document.querySelector('[data-consumers]').outerHTML = `<td align="left" valign="middle" class="consumers" data-consumers>${result.join('')}</td>`;
	}
}

function loadUsers(url) {
	return new Promise((done, fail) => {
		window[usersData] = done;

		const script = document.createElement('script');
		script.src = `${url}?callback=usersData`;
		document.body.appendChild(script);
	})
}

loadRecipe('https://neto-api.herokuapp.com/food/42');
loadRating('https://neto-api.herokuapp.com/food/42/rating');
loadUsers('https://neto-api.herokuapp.com/food/42/consumers');
