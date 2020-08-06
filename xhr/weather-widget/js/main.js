const request = new XMLHttpRequest();
request.addEventListener('load', onLoadWidget);
request.open('GET', 'https://neto-api.herokuapp.com/weather', true);
request.send();

function onLoadWidget() {
	if (request.status === 200) {
		const response = JSON.parse(request.responseText);
		setData(response);
	}
}
