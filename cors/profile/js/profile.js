'use strict';
const technologiesData = function(data) {
	let result = [];
	for(let technology of data) {
		result.push(`<span class="devicons devicons-${technology}"></span>`);
		document.querySelector('.badgescard').outerHTML = `<div data-technologies class="badgescard">${result.join('')}</div>`;
	}
}

const profileData = function(data) {
	for(const key in data) {
		if(key === 'pic') {
			document.querySelector(`[data-${key}]`).src = data[key];
		} else if(key === 'id') {
			loadTechnologies(`https://neto-api.herokuapp.com/profile/${data[key]}/technologies`);
		} else {
			document.querySelector(`[data-${key}]`).textContent = data[key];
		}
	}
}

function loadProfile(url) {
	return new Promise((done, fail) => {
		window[profileData] = done;

		const script = document.createElement('script');
		script.src = `${url}?callback=profileData`;
		document.body.appendChild(script);
		document.querySelector('.content').setAttribute('style', 'display: initial');
	})
}

function loadTechnologies(url) {
	return new Promise((done, fail) => {
		window[technologiesData] = done;

		const script = document.createElement('script');
		script.src = `${url}?callback=technologiesData`;
		document.body.appendChild(script);
	})
}

loadProfile('https://neto-api.herokuapp.com/profile/me');
