`use strict`;
const soundBtns = Array.from(document.getElementsByClassName('drum-kit__drum'));
const sounds = Array.from(document.getElementsByTagName('audio'));

for(let i = 0; i < sounds.length; i++) {
	soundBtns[i].onclick = function() {
		sounds[i].play();
	}
}
