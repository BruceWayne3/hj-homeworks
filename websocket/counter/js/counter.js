'use strict';
const connection = new WebSocket('wss://neto-api.herokuapp.com/counter');
const counter = document.querySelector('.counter');
const errors = document.querySelector('output.errors');

connection.addEventListener('message', event => {
  let data = JSON.parse(event.data);
  counter.textContent = data.connections;
  errors.textContent = data.errors;
});

window.addEventListener('beforeunload', () => {
	connection.close(1000);
});
