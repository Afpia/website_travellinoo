const swiper = new Swiper(".categories__inner", {
	loop: true,
	direction: "horizontal",
	navigation: {
		nextEl: ".btn-next",
		prevEl: ".btn-prev",
	},
	spaceBetween: 24,
	slidesPerView: 3,
	loopedSlides: 3,
	// freeMode: true,
	// centerSlide: true,
	touchRatio: 0.7,
	sliderPerGroup: 1,
	speed: 1000,
	grabCursor: true,
	autoplay: {
		delay: 2000,
		disableOnInteraction: false,
	},

	breakpoints: {
		1110: {
			slidesPerView: 3,
			loopedSlides: 3,
		},
		500: {
			slidesPerView: 2,
			loopedSlides: 3,
		},
		320: {
			slidesPerView: 1,
			loopedSlides: 3,
		},
	},
});
const swiperSecond = new Swiper(".find__swiper", {
	// loop: true,
	direction: "horizontal",
	navigation: {
		nextEl: ".find-next",
		prevEl: ".find-prev",
	},
	spaceBetween: 24,
	slidesPerView: 4,
	// // freeMode: true,
	touchRatio: 0.7,
	sliderPerGroup: 1,
	speed: 1000,
	grabCursor: true,
	autoplay: {
		delay: 2000,
		disableOnInteraction: false,
	},

	breakpoints: {
		1340: {
			slidesPerView: 4,
		},
		1110: {
			slidesPerView: 3,
		},
		425: {
			slidesPerView: 2,
		},
		320: {
			slidesPerView: 1,
		},
	},
});

// tabs 

const tabItem = document.querySelectorAll('.top__btn-item');
const tabContent = document.querySelectorAll(".top__content");


tabItem.forEach(function(element){
	element.addEventListener('click', open);
});

function open(evt){
	const tabTarget = evt.currentTarget;
	const button = tabTarget.dataset.button; 

	tabItem.forEach(function(item){
		item.classList.remove("top__btn--active");
	});

	tabContent.forEach(function (item) {
		item.classList.remove("top__content--active");
	});

	tabTarget.classList.add("top__btn--active");
	document.querySelector(`#${button}`).classList.add("top__content--active");
}










