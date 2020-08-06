'use strict';
const connection = new WebSocket('wss://neto-api.herokuapp.com/chat');
const chat = document.querySelector('.chat');
const messagesContent = document.querySelector('.messages-content');
const button = chat.querySelector('.message-submit');

if(connection) {
	chat.querySelector('.chat-status').textContent = chat.querySelector('.chat-status').dataset.online;
	chat.querySelector('.message-submit').removeAttribute('disabled');
	let messageStatus = chat.querySelector('.message-status .message-text').cloneNode(true);
	messagesContent.appendChild(messageStatus);
	messageStatus.textContent = 'Пользователь появился в сети';
}

const loading = chat.querySelector('.loading span').cloneNode(true);
messagesContent.appendChild(loading);

connection.addEventListener('message', event => {
  if (event.data === '...') {
  	loading.textContent = 'печатает сообщение';
  } else {
  	let incomingMessages = chat.querySelectorAll('.message')[1].cloneNode(true);
  	messagesContent.appendChild(incomingMessages);
  	incomingMessages.querySelector('.message .message-text').textContent = event.data;
  	incomingMessages.querySelector('.message .timestamp').textContent = `${(new Date).getHours()}:${(new Date).getMinutes()}`;

  	if(loading.textContent !== null) {
  		loading.textContent = '';
  	}
  }
});

button.addEventListener('click', function(event) {
	event.preventDefault();
	let sendMessages = chat.querySelector('.message-personal').cloneNode(true);
	messagesContent.appendChild(sendMessages);
	sendMessages.querySelector('.message-text').textContent = chat.querySelector('.message-input').value;
	sendMessages.querySelector('.timestamp').textContent = `${(new Date).getHours()}:${(new Date).getMinutes()}`; 
	connection.send(JSON.stringify(chat.querySelector('.message-input').value));
})

window.addEventListener('beforeunload', () => {
	messagesContent.querySelector('.message-status .message-text').textContent = 'Пользователь не в сети';
	chat.querySelector('.message-submit').setAttribute('disabled');
	connection.close()
})
