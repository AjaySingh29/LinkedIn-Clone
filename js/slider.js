let slideIndex = 0;
const slides = document.getElementById("slides");
const slide = document.getElementsByClassName("slide");
const previous = document.getElementById("previous");
const next = document.getElementById("next");

// slides.style.transform = 'translateX(100vw)';
previous.style.display = "none";

next.addEventListener("click", function () {
  slideIndex = (slideIndex + 1) % slide.length;
  slides.style.transform = `translateX(-${slideIndex * 100}vw)`;
  slides.style.transitionDuration = ".4s";
  if (slideIndex === slide.length - 1) {
    next.style.display = "none";
  } else {
    previous.style.display = "block";
  }
});

previous.addEventListener("click", function () {
  slideIndex = (slideIndex - 1 + slide.length) % slide.length;
  slides.style.transform = `translateX(-${slideIndex * 100}vw)`;
  slides.style.transitionDuration = ".4s";
  if (slideIndex === 0) {
    previous.style.display = "none";
  } else {
    next.style.display = "block";
  }
});
