`use strict`;

const buttons = Array.from(document.getElementsByTagName('a'));
const content = document.getElementById('content');
const preloader = document.getElementById('preloader');
const xhr = new XMLHttpRequest();

document.addEventListener('DOMContentLoaded', function() {
	xhr.open('GET', buttons[0].href, true);
	xhr.send();
	content.innerHTML = xhr.responseText;
});

for(let button of buttons) {
	button.addEventListener('click', function(event) {
		for(button of buttons) {
			button.classList.remove('active');
		}
		event.preventDefault();
		button.classList.add('active');
		xhr.addEventListener("loadstart", onLoadStart);
		xhr.addEventListener('loadend', onLoadEnd);
		xhr.open('GET', button.href, true);
		xhr.send();

		function onLoadStart() {
			preloader.classList.remove('hidden');
		}

		function onLoadEnd() {
			preloader.classList.add('hidden');
			content.innerHTML = xhr.responseText;
		}
	})
}
