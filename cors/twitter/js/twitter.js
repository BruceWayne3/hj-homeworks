'use strict';
const loadProfile = function (profile) {
	for (const key in profile) {
		if (key === 'wallpaper' || key === 'pic') {
			document.querySelector(`[data-${key}]`).src = profile[key];
		} else {
			document.querySelector(`[data-${key}]`).textContent = profile[key];
		}
	}
}

function loadData(url) {
	return new Promise((done, fail) => {
		window[loadProfile] = done;

		const script = document.createElement('script');
		script.src = `${url}?callback=loadProfile`;
		document.body.appendChild(script);
	});
}

loadData('https://neto-api.herokuapp.com/twitter/jsonp');
