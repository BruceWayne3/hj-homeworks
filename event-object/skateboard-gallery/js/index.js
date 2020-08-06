`use strict`;
const images = Array.from(document.getElementsByTagName('a'));
const currentImage = document.getElementById('view');

for(let image of images) {
	image.addEventListener('click', function(event) {
		for(let i = 0; i < images.length; i++) {
			if(images[i].classList.contains('gallery-current')) {
				images[i].classList.remove('gallery-current');
			}
		}
		event.preventDefault();
		event.currentTarget.classList.add('gallery-current');
		currentImage.src = event.currentTarget.href;
	})
}
