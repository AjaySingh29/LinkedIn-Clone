let slideIndex = 0;
const slides = document.getElementById("slides");
const slide = document.getElementsByClassName("slide");
const previous = document.getElementById("previous");
const next = document.getElementById("next");

previous.style.opacity = "0";
previous.style.zIndex = "-1";

// previous.style.display="none";

next.addEventListener("click", function () {
  slideIndex = (slideIndex + 1) % slide.length;
  slides.style.transform = `translateX(-${slideIndex * 100}%)`;
  slides.style.transitionDuration = ".4s";
  if (slideIndex === slide.length - 1) {
    next.style.opacity = "0";
    next.style.zIndex = "-1";
    // next.style.display='none';
  } else {
    previous.style.opacity = "1";
    previous.style.zIndex = "1";
    // previous.style.display="block";
  }
});

previous.addEventListener("click", function () {
  slideIndex = (slideIndex - 1 + slide.length) % slide.length;
  slides.style.transform = `translateX(-${slideIndex * 100}%)`;
  slides.style.transitionDuration = ".4s";
  if (slideIndex === 0) {
    previous.style.opacity = "0";
    previous.style.zIndex = "-1";
    // previous.style.display="none";
  } else {
    next.style.opacity = "1";
    next.style.zIndex = "1";
    // next.style.display="block";
  }
});
