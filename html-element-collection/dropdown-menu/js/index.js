`use strict`;
const myProfile = Array.from(document.getElementsByClassName('wrapper-dropdown'))[0];

myProfile.onclick = function() {
	myProfile.classList.toggle('active');
}
