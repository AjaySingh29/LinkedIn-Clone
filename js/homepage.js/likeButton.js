let count = 0;
let counters = document.querySelectorAll(".likeCount");
let likes = document.querySelectorAll(".like");
let likeIcons = document.querySelectorAll(".likeIcon");

likes.forEach((el, index) => {
  el.addEventListener("click", function () {
    count = parseInt(counters[index].innerHTML) || 0;
    if (el.style.color === "rgb(10, 102, 194)") {
      count -= 1;
      el.style.color = "";
      el.style.fontWeight = "";
      counters[index].innerHTML = count;
      if (count == 0) {
        counters[index].innerHTML = "";
      }
      likeIcons[index].style.color = "";
      likeIcons[index].classList.remove("liked");
    } else {
      count += 1;
      counters[index].innerHTML = count;
      el.style.color = "#0a66c2";
      el.style.fontWeight = "500";
      likeIcons[index].classList.add("liked");
      likeIcons[index].style.color = "#0a66c2";
    }
  });
});
