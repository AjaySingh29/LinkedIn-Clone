document.querySelector(".navItem").classList.add("active");

document.querySelectorAll(".navItem").forEach((item) => {
  item.addEventListener("click", function () {
    // Remove the 'active' class from all elements
    document.querySelectorAll(".navItem").forEach((el) => {
      el.classList.remove("active");
      el.querySelectorAll("i").forEach((i) => {
        i.classList.replace("fa-house-chimney", "fa-house");
        i.classList.replace("fa-user", "fa-person");
        i.classList.replace("fa-business-time", "fa-briefcase");
        i.classList.replace("fa-comments", "fa-comment");
        i.style.transform = "rotate(0)";
      });

      el.querySelectorAll("p").forEach((p) => {
        p.style.color = "";
      });
    });

    // Add the 'active' class to the clicked element
    this.classList.add("active");
    this.querySelectorAll("i").forEach((i) => {
      i.classList.replace("fa-house", "fa-house-chimney");
      i.classList.replace("fa-person", "fa-user");
      i.classList.replace("fa-briefcase", "fa-business-time");
      i.classList.replace("fa-comment", "fa-comments");
      if (i.classList.contains("fa-bell")) {
        i.style.transform = "rotate(15deg)";
      }
    });
    // this.querySelectorAll('p').forEach((p)=>{
    //   p.style.color="black";
    // });
  });
});
