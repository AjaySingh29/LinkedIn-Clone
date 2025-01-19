const business = document.getElementById("business");
const businessWrapper = document.getElementById("businessWrapper");
// let next3 = document.getElementById("next");

business.addEventListener("click", function (e) {
  e.stopPropagation();
  if (businessWrapper.style.opacity === "1") {
    businessWrapper.style.opacity = "0";
    next2.style.display = "block";
    // dropdown.style.display="none";
  } else {
    businessWrapper.style.opacity = "1";
    businessWrapper.style.backgroundColor = "white";
    businessWrapper.style.zIndex = "3";
    next2.style.display = "none";
    dropdown.style.display="none";
  }
});

document.addEventListener("click", (event) => {
    event.stopPropagation();
  if (businessWrapper.style.opacity === "1") {
    businessWrapper.style.opacity = "0";
    next2.style.display = "block";
    // dropdown.style.display="none";
  }
});
