`use strict`;
const slides = document.querySelectorAll('.slide');
const slidesList = document.querySelector('.slides');
let currentSlide = slides[0];
currentSlide.classList.add('slide-current');

const prevBtn = document.querySelector('[data-action="prev"]');
const nextBtn = document.querySelector('[data-action="next"]');
const firstBtn = document.querySelector('[data-action="first"]');
const lastBtn = document.querySelector('[data-action="last"]');

firstBtn.classList.add('disabled');
prevBtn.classList.add('disabled');

function next() {
	prevBtn.addEventListener('click', prev);
	firstBtn.addEventListener('click', first);
	firstBtn.classList.remove('disabled');
	prevBtn.classList.remove('disabled');
	currentSlide.classList.remove('slide-current');
	currentSlide = currentSlide.nextElementSibling;
	currentSlide.classList.add('slide-current');
	if(!currentSlide.nextElementSibling) {
		nextBtn.removeEventListener('click', next);
		lastBtn.removeEventListener('click', last);
		nextBtn.classList.add('disabled');
		lastBtn.classList.add('disabled');
	}
}

function last() {
	prevBtn.addEventListener('click', prev);
	firstBtn.addEventListener('click', first);
	firstBtn.classList.remove('disabled');
	prevBtn.classList.remove('disabled');
	currentSlide.classList.remove('slide-current');
	currentSlide = slidesList.lastElementChild;
	currentSlide.classList.add('slide-current');
	lastBtn.removeEventListener('click', last);
	nextBtn.removeEventListener('click', next);
	nextBtn.classList.add('disabled');
	lastBtn.classList.add('disabled');
}

function prev() {
	nextBtn.addEventListener('click', next);
	lastBtn.addEventListener('click', last);
	lastBtn.classList.remove('disabled');
	nextBtn.classList.remove('disabled');
	currentSlide.classList.remove('slide-current');
	currentSlide = currentSlide.previousElementSibling;
	currentSlide.classList.add('slide-current');
	if(!currentSlide.previousElementSibling) {
		prevBtn.removeEventListener('click', prev);
		firstBtn.removeEventListener('click', first);
		prevBtn.classList.add('disabled');
		firstBtn.classList.add('disabled');
	}
}

function first() {
	nextBtn.addEventListener('click', next);
	lastBtn.addEventListener('click', last);
	lastBtn.classList.remove('disabled');
	nextBtn.classList.remove('disabled');
	currentSlide.classList.remove('slide-current');
	currentSlide = slidesList.firstElementChild;
	currentSlide.classList.add('slide-current');
	firstBtn.removeEventListener('click', first);
	prevBtn.removeEventListener('click', prev);
	prevBtn.classList.add('disabled');
	firstBtn.classList.add('disabled');
}

nextBtn.addEventListener('click', next);
lastBtn.addEventListener('click', last);
prevBtn.addEventListener('click', prev);
firstBtn.addEventListener('click', first);
