const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const wholeBody = document.querySelector('body');
const wholeHTML = document.querySelector('html');
burger.addEventListener('click', toggleActive);

function toggleActive() {
	burger.classList.toggle('_active');
	menu.classList.toggle('_active');
	wholeBody.classList.toggle('_lock');
	wholeHTML.classList.toggle('_lock');
};

const swiper = new Swiper('.servs__swiper', {
	navigation: {
		nextEl: '.swiper-button-next-unique',
		prevEl: '.swiper-button-prev-unique',
	},
	pagination: {
		el: '.swiper-pagination',
	},
});