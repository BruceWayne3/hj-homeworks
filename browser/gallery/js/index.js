`use strict`;
const current = document.getElementById('currentPhoto');
const photos = ['i/breuer-building.jpg','i/guggenheim-museum.jpg','i/headquarters.jpg','i/IAC.jpg','i/new-museum.jpg'];
const nextBtn = document.getElementById('nextPhoto');
const prevBtn = document.getElementById('prevPhoto');

current.src = photos[0];

let step = 0;
nextBtn.onclick = function() {
	if(step === photos.length - 1) {
		step = 0;
		current.src = photos[step];
	} else {
		current.src = photos[step += 1];
	}
}

prevBtn.onclick = function() {
	if(step === 0) {
		step = photos.length - 1;
		current.src = photos[step];
	} else {
		current.src = photos[step -= 1];
	}
}
