const profile = document.querySelector(".navItemProfile");
const dropdown = document.getElementById("profileDropdown");
let next2 = document.getElementById("next");

profile.addEventListener("click", function (event) {
  event.stopPropagation();
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
    next2.style.display = "block";
  } else {
    dropdown.style.display = "block";
    dropdown.style.backgroundColor = "white";
    dropdown.style.zIndex = "3";
    next2.style.display = "none";
    businessWrapper.style.opacity="0";
  }
});
document.addEventListener("click", function () {
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
    next2.style.display = "block";
  }
});

// to stop propagation when dropdown item is selected
dropdown.addEventListener("click", function (event) {
  event.stopPropagation();
});

// const profile = document.querySelector(".navItemProfile");
// const dropdown = document.getElementById("profileDropdown");

// const observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             dropdown.style.display = "block";
//         } else {
//             dropdown.style.display = "none";
//         }
//     });
// });

// profile.addEventListener("click", function (event) {
//     event.stopPropagation();
//     if (dropdown.style.display === "block") {
//         dropdown.style.display = "none";
//         observer.unobserve(profile);
//     } else {
//         dropdown.style.display = "block";
//         observer.observe(profile);
//     }
// });

// document.body.addEventListener("click", function () {
//     dropdown.style.display = "none";
//     observer.unobserve(profile);
// });

// dropdown.addEventListener("click", function (event) {
//     event.stopPropagation();
// });
