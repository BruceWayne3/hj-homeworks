`use strict`;
const content = document.getElementById('content');
const xhr = new XMLHttpRequest();
xhr.addEventListener('load', function() {
	const data = JSON.parse(xhr.responseText);
	let result = [];
	for(let li of data) {
		result.push(`<li
 data-title=${li.title}
 data-author=${li.author.name}
 data-info=${li.info}
 data-price=${li.price}>
 <img
   src=${li.cover.small}>
</li>`)
	}
	content.innerHTML = result.join('');
});
xhr.open('GET', 'https://neto-api.herokuapp.com/book/', true);
xhr.send();
