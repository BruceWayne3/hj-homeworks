'use strict';
const connection = new WebSocket('wss://neto-api.herokuapp.com/mouse');
connection.addEventListener('open', () => {
  showBubbles(connection);
});

document.addEventListener('click', function(event) {
	let data = {};
	data.x = event.clientX;
	data.y = event.clientY;
	connection.send(JSON.stringify(data));
})

window.addEventListener('beforeunload', () => {
  connection.close();
});
