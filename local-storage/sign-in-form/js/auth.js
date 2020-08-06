'use strict';
const signUp = document.querySelector('.sign-up-htm');
const signIn = document.querySelector('.sign-in-htm');

signUp.addEventListener('submit', function(event) {
	event.preventDefault();
	const signUpData = new FormData(signUp);
	let data = {};

	for(const [k, v] of signUpData) {
		data[k] = v;
	}

	fetch('https://neto-api.herokuapp.com/signup', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})
	.then((res) => {
		if (200 <= res.status && res.status < 300) {
			return res;
		}
		throw new Error(res.statusText);
	})
	.then((res) => { 
		return res.json();
	})
	.then((data) => {
		if (data.error) {
			throw new Error(data.message);
		}
		console.log(data);
		event.target.querySelector('output').value = `Пользователь ${data.name} успешно зарегистрирован`;
	})
	.catch((error) => {
		event.target.querySelector('output').value = error;
	})
})

signIn.addEventListener('submit', function(event) {
	event.preventDefault();
	const signInData = new FormData(signIn);
	let data = {};

	for(const [k, v] of signInData) {
		data[k] = v;
	}

	fetch('https://neto-api.herokuapp.com/signup', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})
	.then((res) => {
		if (200 <= res.status && res.status < 300) {
			return res;
		}
		throw new Error(res.statusText);
	})
	.then((res) => { 
		return res.json();
	})
	.then((data) => {
		if (data.error) {
			throw new Error(data.message);
		}
		console.log(data);
		event.target.querySelector('output').value = `Пользователь ${data.name} успешно авторизован`;
	})
	.catch((error) => {
		event.target.querySelector('output').value = error;
	})
})
