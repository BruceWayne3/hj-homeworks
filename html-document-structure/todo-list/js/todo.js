`use strict`;
const done = document.querySelector('.done');
const undone = document.querySelector('.undone');
const points = Array.from(document.getElementsByTagName('label'));

for(let point of points) {
	point.addEventListener('click', function() {
		if(point.firstElementChild.checked === true) {
			done.appendChild(point);
		} else if(point.firstElementChild.checked === false) {
			undone.appendChild(point);
		}
	})
}
