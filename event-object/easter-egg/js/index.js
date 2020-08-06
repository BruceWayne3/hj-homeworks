`use strict`;
const secret = Array.from(document.getElementsByClassName('secret'))[0];
const navigation = Array.from(document.getElementsByTagName('nav'))[0];
let keys = [];

document.addEventListener('keypress', function(event) {
	keys.push(event.code);
	if(keys.length > 9) {
		keys = keys.slice(- 9);
	}
	if(keys.join('') === 'KeyYKeyTKeyNKeyJKeyKKeyJKeyUKeyBKeyZ') {
		secret.classList.add('visible');
	} else {
		secret.classList.remove('visible');
	}
})

document.addEventListener('keydown', function(event) {
	if(event.altKey && event.ctrlKey && event.code === 'KeyT') {
		navigation.classList.toggle('visible');
	}
})
