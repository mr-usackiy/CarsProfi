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
