`use strict`;
const stopBtn = Array.from(document.getElementsByClassName('stop'))[0];
const backBtn = Array.from(document.getElementsByClassName('back'))[0];
const nextBtn = Array.from(document.getElementsByClassName('next'))[0];
const playstate = Array.from(document.getElementsByClassName('playstate'))[0];
const mediaplayer = Array.from(document.getElementsByClassName('mediaplayer'))[0];
const audio = Array.from(document.getElementsByTagName('audio'))[0];
const title = Array.from(document.getElementsByClassName('title'))[0];

const sounds = ['mp3/LA Chill Tour.mp3','mp3/This is it band.mp3','mp3/LA Fusion Jam.mp3'];
const titles = ['LA Chill Tour','This is it band','LA Fusion Jam']

let step = 0;
audio.src = sounds[step];
title.title = titles[step];

playstate.onclick = function() {
	if(mediaplayer.classList.contains('play')) {
		mediaplayer.classList.remove('play');
		audio.pause();
	} else {
		mediaplayer.classList.add('play');
		audio.play();
	}
}

stopBtn.onclick = function() {
	if(mediaplayer.classList.contains('play')) {
		mediaplayer.classList.remove('play');
		audio.pause();
		audio.currentTime = 0;
	} else {
		audio.pause();
		audio.currentTime = 0;
	}
}

nextBtn.onclick = function() {
	if(step === sounds.length - 1) {
		step = 0;
	} else {
		step += 1;
	}
	audio.src = sounds[step];
	title.title = titles[step];
	if(mediaplayer.classList.contains('play')) {
		audio.play();
	}
}

backBtn.onclick = function() {
	if(step === 0) {
		step = sounds.length - 1;
	} else {
		step -= 1;
	}
	audio.src = sounds[step];
	title.title = titles[step];
	if(mediaplayer.classList.contains('play')) {
		audio.play();
	}
}
