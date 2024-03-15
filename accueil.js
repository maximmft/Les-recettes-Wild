
// Slider in welcome page

const sliderNavButtonPrevious = document.querySelector(".slider-nav-button--previous");
const sliderNavButtonNext = document.querySelector(".slider-nav-button--next");



sliderNavButtonPrevious.addEventListener("click", function(){
  const widthSlider = document.querySelector(".slider-content").offsetWidth;
  document.querySelector(".slider-content").scrollLeft -= widthSlider;
});

sliderNavButtonNext.addEventListener("click", function(){
  const widthSlider = document.querySelector(".slider-content").offsetWidth;
  
  // si dernière image : revenir au début.
  // sinon, continnuer à slider sur la gauche.
    document.querySelector(".slider-content").scrollLeft += widthSlider;
});

