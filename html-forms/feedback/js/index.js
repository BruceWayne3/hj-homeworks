`use strict`;
const sendMessage = Array.from(document.getElementsByClassName('button-contact'))[0];
const changeMessage = Array.from(document.getElementsByClassName('button-contact'))[1];

const contentForm = document.querySelector('.contentform');
const points = Array.from(document.getElementsByTagName('input'));
const messageText = document.querySelector('textarea');
const message = document.getElementById('output');

const messagePoints = Array.from(document.getElementsByTagName('output'));

function formsComplete() {
	sendMessage.disabled = false;
	for(point of points) {
		if(point.value === '') {
			sendMessage.disabled = true;
		}
		if(point.name === 'zip') {
			point.addEventListener('input', function(event) {
				event.currentTarget.value = event.currentTarget.value.replace(/\D/, '');
			});
		}
		for(let messagePoint of messagePoints) {
			if(messagePoint.id === point.name) {
				messagePoint.value = point.value;
			} else if(messagePoint.id === messageText.name) {
				messagePoint.value = messageText.value;
			}
		}
	}
	if(point.value === '' || messageText.value === '') {
		sendMessage.disabled = true;
	}
}

for(let point of points) {
	point.addEventListener('input', formsComplete)
}

messageText.addEventListener('input', formsComplete);

contentForm.addEventListener('submit', function(event) {
	event.preventDefault();
	contentForm.classList.add('hidden');
	message.classList.remove('hidden');
});

changeMessage.addEventListener('click', function() {
	message.classList.add('hidden');
	contentForm.classList.remove('hidden');
});
