
// Slider in welcome page

const sliderNavButtonPrevious = document.querySelector(".slider__nav__button--previous");
const sliderNavButtonNext = document.querySelector(".slider__nav__button--next");

sliderNavButtonPrevious.addEventListener("click", function(){
  const widthSlider = document.querySelector(".slider__content").offsetWidth;
  document.querySelector(".slider__content").scrollLeft -= widthSlider;
});

sliderNavButtonNext.addEventListener("click", function(){
  const widthSlider = document.querySelector(".slider__content").offsetWidth;
  document.querySelector(".slider__content").scrollLeft += widthSlider;
});