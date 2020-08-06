`use strict`;
const sounds = Array.from(document.getElementsByTagName('audio'));
const middle = ['sounds/middle/first.mp3','sounds/middle/second.mp3','sounds/middle/third.mp3','sounds/middle/fourth.mp3','sounds/middle/fifth.mp3'];
const lower = ['sounds/lower/first.mp3','sounds/lower/second.mp3','sounds/lower/third.mp3','sounds/lower/fourth.mp3','sounds/lower/fifth.mp3'];
const higher = ['sounds/higher/first.mp3','sounds/higher/second.mp3','sounds/higher/third.mp3','sounds/higher/fourth.mp3','sounds/higher/fifth.mp3',];
const buttons = Array.from(document.getElementsByTagName('li'));
const set = Array.from(document.getElementsByTagName('ul'))[0];

for(let i = 0; i < sounds.length; i++) {
	sounds[i].src = middle[i];
};

for(let button of buttons) {
	button.addEventListener('click', function(event) {
		sounds[buttons.indexOf(event.currentTarget)].play();
	});
}

document.addEventListener('keydown', function(event) {
	if(event.shiftKey) {
		set.classList.remove('middle');
		set.classList.add('lower');
		for(let i = 0; i < sounds.length; i++) {
			sounds[i].src = lower[i];
		}
	};

	if(event.altKey) {
		set.classList.remove('middle');
		set.classList.add('higher');
		for(let i = 0; i < sounds.length; i++) {
			sounds[i].src = higher[i];
		}
	}
});

document.addEventListener('keyup', function(event) {
	if(set.classList.contains('lower')) {
		set.classList.remove('lower');
		set.classList.add('middle');
	} else if(set.classList.contains('higher')) {
		set.classList.remove('higher');
		set.classList.add('middle');
	}
	
	for(let i = 0; i < sounds.length; i++) {
		sounds[i].src = middle[i];
	}
});
