const visible = document.querySelectorAll(".visible");
const visibilityButtons = document.querySelectorAll(".visibility");

visibilityButtons.forEach((visibility) => {
  visibility.innerHTML =
    "Show more <div style='transform: rotate(180deg)'></div>";
  visibility.addEventListener("click", () => {
    visible.forEach((v) => {
      v.style.transitionDuration = ".5s";
      if (v.style.height === "250px" || !v.style.height) {
        v.style.height = "500px";
        visibility.innerHTML =
          "Show less <div style='transform: rotate(0deg)'></div>";
      } else {
        v.style.height = "";
        visibility.innerHTML =
          "Show more <div style='transform: rotate(180deg)'></div>";
      }
    });
  });
});

const cancel = document.querySelector(".cancel");
const info = document.querySelector(".info");
const infoContainer = document.querySelector(".infoContainer");
infoContainer.style.transitionDuration = ".4s";

info.addEventListener("click", () => {
  if (infoContainer.style.opacity === "1") {
    infoContainer.style.opacity = "0";
    infoContainer.style.zIndex = "-1";
  } else {
    infoContainer.style.opacity = "1";
    infoContainer.style.zIndex = "1";
  }
});

cancel.addEventListener("click", () => {
  infoContainer.style.opacity = "0";
  infoContainer.style.zIndex = "-1";
});

const privacyandPolicy = document.querySelector(".privacyandPolicy");
const privacyAndPolicy = document.querySelector(".privacyAndPolicy");

privacyandPolicy.addEventListener("click", (event) => {
  event.stopPropagation();
  if (privacyAndPolicy.style.opacity === "1") {
    privacyAndPolicy.style.opacity = "0";
    privacyAndPolicy.style.zIndex = "-1";
    privacyAndPolicy.style.transitionDuration = ".2s";
  } else {
    privacyAndPolicy.style.opacity = "1";
    privacyAndPolicy.style.zIndex = "1";
    privacyAndPolicy.style.transitionDuration = ".4s";
  }
});

const businessServices = document.querySelector(".businessServices");
const business_Services = document.querySelector(".business_Services");

businessServices.addEventListener("click", (event) => {
  event.stopPropagation();
  if (business_Services.style.opacity === "1") {
    business_Services.style.opacity = "0";
    business_Services.style.zIndex = "-1";
    business_Services.style.transitionDuration = ".2s";
  } else {
    business_Services.style.opacity = "1";
    business_Services.style.zIndex = "1";
    business_Services.style.transitionDuration = ".4s";
  }
});

document.addEventListener("click", () => {
  if (
    business_Services.style.opacity === "1" ||
    privacyAndPolicy.style.opacity === "1"
  ) {
    privacyAndPolicy.style.opacity = "0";
    privacyAndPolicy.style.zIndex = "-1";
    privacyAndPolicy.style.transitionDuration = ".2s";

    business_Services.style.opacity = "0";
    business_Services.style.zIndex = "-1";
    business_Services.style.transitionDuration = ".2s";
  }
});

// business_Services.addEventListener("click", (event) => {
//   event.stopPropagation();
// });
// privacyAndPolicy.addEventListener("click", (event) => {
//   event.stopPropagation();
// });
