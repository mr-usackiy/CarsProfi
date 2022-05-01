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

  (function () {
    const header = document.querySelector(".header");
    window.onscroll = () => {
      if (window.pageYOffset > 50) {
        header.classList.add("header_active");
      } else {
        header.classList.remove("header_active");
      }
    };
  });
};
