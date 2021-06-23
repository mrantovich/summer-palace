const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
burger.addEventListener('click', toggleActive);

function toggleActive() {
	burger.classList.toggle('_active');
	menu.classList.toggle('_active');
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