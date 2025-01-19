const choice = document.querySelector(".choice");
const skillWrapper = document.querySelector("#skillWrapper");

choice.addEventListener("click", function () {
  if (skillWrapper.style.display === "block") {
    skillWrapper.style.display = "none";
  } else {
    skillWrapper.style.display = "block";
  }
});
