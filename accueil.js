
// Slider in welcome page

const sliderNavButtonPrevious = document.querySelector(".slider-nav-button--previous");
const sliderNavButtonNext = document.querySelector(".slider-nav-button--next");



sliderNavButtonPrevious.addEventListener("click", function(){
  // const widthSlider = document.querySelector(".slider-content").offsetWidth;
  document.querySelector(".slider-content").scrollLeft -= 100;
});

sliderNavButtonNext.addEventListener("click", function(){
  // const widthSlider = document.querySelector(".slider-content").offsetWidth;
  document.querySelector(".slider-content").scrollLeft += 100;
});