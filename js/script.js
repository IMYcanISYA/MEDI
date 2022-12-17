
const burgerBtn = document.querySelector('.burger-btn');
const burgerMenu = document.querySelector('.nav-header');

const ourSalons = document.querySelector('.our-salons-header');
const ourSalonsWindow = ourSalons.querySelector('.our-salons-header__window');

const numbers = document.querySelectorAll('.numbers__btn');

const tabs = document.querySelectorAll("[data-tab]");
const tabsContent = document.querySelectorAll('.content-news__tab');



if (ourSalons) {
	const height = ourSalonsWindow.querySelector('.our-salons-header__list').offsetHeight;
	ourSalons.addEventListener('click', () => {
		if (!ourSalons.classList.contains('_active')) {
			ourSalons.classList.add('_active');
			ourSalonsWindow.style.height = `${height}px`;
		} else {
			ourSalons.classList.remove('_active');
			ourSalonsWindow.style.height = `0px`;
		}
	})
}

if (burgerBtn && burgerMenu) {
	burgerBtn.addEventListener('click', () => {
		burgerBtn.parentElement.classList.toggle('_active');
		burgerMenu.classList.toggle('_active');
	})
}

/*-----------------------Numbers-------------------------*/

if (numbers) {
	let cur = 0;
	swap_number();
	function swap_number() {
		numbers.forEach(item => {
			item.classList.remove('_active');
		})

		numbers[cur].classList.add('_active');
		if (cur >= numbers.length - 1) {
			cur = 0;
		} else {
			cur++;
		};

	}
	numbers.forEach(item => {

	})

	let numbersAnim = setInterval(swap_number, 3000);

	numbers.forEach(item => {
		item.addEventListener('click', () => {
			if (!item.classList.contains('_active')) {
				numbers.forEach(n => {
					n.classList.remove('_active');
				});

				item.classList.add('_active');
				clearInterval(numbersAnim);
				numbersAnim = setInterval(swap_number, 3000);
			}
		})
	})
}

/*-----------------------/Numbers-------------------------*/

/*-----------------------News-------------------------*/

if (tabs && tabsContent) {
	tabs.forEach(tab => {
		tab.addEventListener('click', (e) => {
			if (!tab.classList.contains('_active')) {
				tabs.forEach(t => {
					t.classList.remove('_active');
				});
				tabsContent.forEach(tc => {
					tc.classList.remove('_active');
				})

				tab.classList.add('_active');
				tabsContent[tab.dataset.tab].classList.add('_active');
			}
		})
	})
}

/*-----------------------/News-------------------------*/

/*-----------------------Swipers-------------------------*/

const headerImgSwiper = new Swiper('.images-header', {
	allowTouchMove: false,
	effect: "fade",
	fadeEffect: {
		crossfade: true,
	},
})

const headerSwiper = new Swiper('.header-main__content', {
	navigation: {
		prevEl: '.header-main__arrow._prev',
		nextEl: '.header-main__arrow._next',
	},

	autoHeight: true,
	speed: 700,
	duration: 500,
	loop: true,
	effect: "fade",
	fadeEffect: {
    	crossFade: true,
  	},
  	thumbs: {
		swiper: headerImgSwiper,
	},
})

/*-----------------------/Swipers-------------------------*/

