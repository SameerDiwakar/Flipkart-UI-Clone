var slides = document.querySelectorAll(".slide");
var btns = document.querySelectorAll(".btn");

let currentSlide = 1;

var manaulNav = function (manual) {
  slides.forEach((slide) => {
    slide.classList.remove("active");
    btns.forEach((btn) => {
      btn.classList.remove("active");
    });
  });

  slides[manual].classList.add("active");
  btns[manual].classList.add("active");
};

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    manaulNav(i);
    currentSlide = i;
  });
});

var repeat = function (activeClass) {
  let active = document.getElementsByClassName("active");
  let i = 1;

  var repeater = () => {
    setTimeout(function () {
      [...active].forEach((activeSlide) => {
        activeSlide.classList.remove("active");
      });
      slides[i].classList.add("active");
      btns[i].classList.add("active");
      i++;
      if (slides.length == i) {
        i = 0;
      }
      if (i >= slides.length) {
        return;
      }
      repeater();
    }, 5000);
  };
  repeater();
};
repeat();

const nextBtn = document.querySelector(".right-button");
const prevBtn = document.querySelector(".left-button");
const numberOfSlides = slides.length;
var slideNumber = 0;
nextBtn.addEventListener("click", () => {
  slides.forEach((slide) => {
    slide.classList.remove("activated");
  });
  slideNumber++;

  if (slideNumber > numberOfSlides - 1) {
    slideNumber = 0;
  }
  slides[slideNumber].classList.add("activated");
});
prevBtn.addEventListener("click", () => {
  slides.forEach((slide) => {
    slide.classList.remove("activated");
  });
  slideNumber--;

  if (slideNumber < 0) {
    slideNumber = numberOfSlides - 1;
  }
  slides[slideNumber].classList.add("activated");
});

var playSlider;

var repeater1 = () => {
  playSlider = setInterval(function () {
    slides.forEach((slide) => {
      slide.classList.remove("activated");
    });
    slideNumber++;

    if (slideNumber > numberOfSlides - 1) {
      slideNumber = 0;
    }
    slides[slideNumber].classList.add("activated");
  }, 5000);
};
repeater1();

const slider =document.querySelector(".img-slider");
slider.addEventListener("mouseover",()=>{
  clearInterval(playSlider);
});
slider.addEventListener("mouseout",()=>{
  repeater1();
});

