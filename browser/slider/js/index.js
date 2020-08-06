`use strict`;
const images = ['i/airmax-jump.png', 'i/airmax-on-foot.png', 'i/airmax-playground.png', 'i/airmax-top-view.png', 'i/airmax.png'];
const img = document.getElementById('slider');
img.src = images[0];

let step = 1;
setInterval(() => {
	if (step === images.length - 1) {
		img.src = images[step];
		step = 0;
	} else {
		img.src = images[step];
		step += 1;
	}
}, 5000);
