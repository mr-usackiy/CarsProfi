window.onload = function () {
  let position = 0;
  const slidesToShow = 1; //сколько элементов из всеЙ линии отображается на экране
  const slidesToScroll = 1; //сколько элементов будет проскроливаться
  const container = document.querySelector(".gallery-wrapper");
  const line = document.querySelector(".gallery-line");
  const item = document.querySelectorAll(".gallery-item");
  const btn_back = document.querySelector(".btn-back");
  const btn_next = document.querySelector(".btn-next");
  const itemsCount = item.length;
  const itemWidth = container.offsetWidth / slidesToShow;
  const scrollWidth = itemWidth * slidesToShow;
  const movePosition = slidesToScroll * itemWidth;
  const itemsLeft =
    itemsCount - (Math.abs(position) + slidesToScroll * itemWidth) / itemWidth;

  //определение количества элеентов в видимой части слайдера
  item.forEach(function (el) {
    el.style.minWidth = itemWidth + "px";
  });
  // end

  btn_next.addEventListener("click", function () {
    position -=
      itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
    setPosition();
    Checkbtn();
  });

  btn_back.addEventListener("click", function () {
    position +=
      itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
    setPosition();
    Checkbtn();
  });

  const setPosition = function () {
    line.style.transform = "translateX(" + position + "px)";
  };
  const Checkbtn = function () {
    btn_back.disabled = position === 0;
    btn_next.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
  };

  Checkbtn();
};
// Плавающий header
(function () {
	const header = document.querySelector('.header');
	window.onscroll = () => {
		if (window.pageYOffset > 50){
			header.classList.add('header_active');
		} else{
			header.classList.remove('header_active')
		}
	};
}());
// Плавный скролл
(function () {

    const smoothScroll = function (targetEl, duration) {
        const headerElHeight =  document.querySelector('.header').clientHeight;
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top - headerElHeight;
        let startPosition = window.pageYOffset;
        let startTime = null;
    
        const ease = function(t,b,c,d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };
    
        const animation = function(currentTime){
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0,run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);

    };
    const scrollTo = function () {
        const links = document.querySelectorAll('.js-scroll');
        links.forEach(each => {
            each.addEventListener('click', function () {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
            });
        });
    };
    scrollTo();
}()); 

//Burger handler//
(function () {
	const burgerItem = document.querySelector('.burger');
	const menu = document.querySelector('.header__nav');
	const menuCloseItem = document.querySelector('.header__nav-close')
	const menuLinks = document.querySelectorAll('.header__link')
	burgerItem.addEventListener('click', () => {
		menu.classList.add('header__nav_active');
	});
	menuCloseItem.addEventListener('click', () => {
		menu.classList.remove('header__nav_active');
	});
	if (window.innerWidth >= 1) {
		for (let i = 0; i < menuLinks.length; i += 1) {
			menuLinks[i].addEventListener('click', () => {
				menu.classList.remove('header__nav_active');
			});
		}	
	}
}());
