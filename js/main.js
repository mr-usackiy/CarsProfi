// Слайдер
window.onload = function () {
	let position = 0;
	const slidesToShow = 1; //сколько элементов из всеЙ линии отображается на экране
	const slidesToScroll = 1; //сколько элементов будет проскроливаться
	const container = document.querySelector(".gallery-wrapper");
	const line = document.querySelector(".gallery-line");
	const item = document.querySelectorAll(".item");
	const btn_back = document.querySelector(".btn__back");
	const btn_next = document.querySelector(".btn__next");
	const itemsCount = item.length;
	const itemWidth = container.offsetWidth / slidesToShow;
	const scrollWidth = itemWidth * slidesToShow;
	const movePosition = slidesToScroll * itemWidth;
	const itemsLeft =
	  itemsCount - (Math.abs(position) + slidesToScroll * itemWidth) / itemWidth;
	const WrPic1 = document.querySelectorAll(".wrapper-pic1");
	const WrPic2 = document.querySelectorAll(".wrapper-pic2");
	const pic1 = document.querySelectorAll(".filter1");
	const pic2 = document.querySelectorAll(".filter2");
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
  
	pic1.forEach(function (el) {
	  el.addEventListener("mouseover", function (event) {
		pic2.forEach(function (i) {
		  i.classList.add("filter__under");
		});
		WrPic2.forEach(function (e) {
		  e.classList.add("wrapper-pic__under");
		});
	  });
	});
	pic1.forEach(function (el) {
	  el.addEventListener("mouseout", function (event) {
		pic2.forEach(function (i) {
		  i.classList.remove("filter__under");
		});
		WrPic2.forEach(function (e) {
		  e.classList.remove("wrapper-pic__under");
		});
	  });
	});
  
	pic2.forEach(function (el) {
	  el.addEventListener("mouseover", function (event) {
		pic1.forEach(function (i) {
		  i.classList.add("filter__under");
		});
		WrPic1.forEach(function (e) {
		  e.classList.add("wrapper-pic__under");
		});
	  });
	});
	pic2.forEach(function (el) {
	  el.addEventListener("mouseout", function (event) {
		pic1.forEach(function (i) {
		  i.classList.remove("filter__under");
		});
		WrPic1.forEach(function (e) {
		  e.classList.remove("wrapper-pic__under");
		});
		pic2.forEach(function (i) {
		  i.classList.add("end");
		});
		WrPic2.forEach(function (e) {
		  e.classList.add("end");
		});
	  });
	});
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

// Burger handler
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
// Бургер меню ico
$('document').ready(function () {
    var trigger = $('#hamburger'),
        isClosed = true;

    trigger.click(function () {
      burgerTime();
    });

    function burgerTime() {
      if (isClosed == true) {
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        isClosed = false;
      } else {
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        isClosed = true;
      }
    }

  });