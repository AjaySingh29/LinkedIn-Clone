let sort = document.getElementById("sort");
let sortDiv = document.getElementById("sortDiv");
let sortby = document.querySelectorAll(".sortby");
let select = document.getElementById("selected");

sortby.forEach(function (element) {
  element.addEventListener("click", function () {
    sortby.forEach(function (el) {
      el.style.borderLeft = "none";
      el.style.borderLeftColor = "none";
      el.style.borderLeftStyle = "none";
    });
    element.style.borderLeft = "1px";
    element.style.borderLeftColor = "black";
    element.style.borderLeftStyle = "solid";
    select.innerHTML = element.dataset.value;
  });
});

sortDiv.style.display = "none";

select.addEventListener("click", function (event) {
  event.stopPropagation();
  if (sortDiv.style.display === "none") {
    sortDiv.style.display = "block";
  } else {
    sortDiv.style.display = "none";
  }
});

document.addEventListener("click", function () {
  if (sortDiv.style.display === "block") {
    sortDiv.style.display = "none";
  }
});

// select.addEventListener("click", function (event) {
//   event.stopPropagation();
// });

function comparator(a, b) {
  if (a.dataset.set < b.dataset.set) 
    return -1;
  if (a.dataset.set > b.dataset.set) 
    return 1;
  return 0;
}

// Function to sort Data
function sortData(criteria) {
  var subjects = document.querySelectorAll("[data-set]");
  var subjectsArray = Array.from(subjects);
  let sorted = subjectsArray.sort(function (a, b) {
    if (criteria === "top") {
      return a.dataset.set === "top" ? -1 : 1;
    } else {
      return a.dataset.set === "recent" ? -1 : 1;
    }
  });
  sorted.forEach(e =>
    document.querySelector("#list").
        appendChild(e));
}
