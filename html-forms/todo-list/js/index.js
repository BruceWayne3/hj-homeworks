`use strict`;
const doings = Array.from(document.getElementsByTagName('input'));
const result = Array.from(document.getElementsByTagName('output'))[0];
const done = Array.from(document.getElementsByTagName('fieldset'))[0];

let count = 1;
result.value = `${count} из 4`;

for(let doing of doings) {
	doing.addEventListener('click', function() {
		if (doing.checked === false) {
			count -= 1;
		} else if (doing.checked === true) {
			count += 1;
		}
		if (count === 4) {
			done.classList.add('complete');
		} else {
			done.classList.remove('complete');
		}
		result.value = `${count} из 4`;
	})
}
