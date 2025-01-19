const toggleButton = document.getElementById("toggleButton");
const wrapper = document.getElementById("businessWrapper");

toggleButton.addEventListener("click", function () {
  if (wrapper.style.display === "block") {
    wrapper.style.display = "none";
  } else {
    wrapper.style.display = "block";
  }
});
