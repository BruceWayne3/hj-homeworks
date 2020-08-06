`use strict`;
const data = JSON.parse(loadContacts());
const contacts = document.querySelector('.contacts-list');

let result = [];

for(let contact of data) {
	result.push(`<li data-email="${contact.email}"data-phone="${contact.phone}"><strong>${contact.name}</strong></li>`);
}

contacts.innerHTML = result.join('');
