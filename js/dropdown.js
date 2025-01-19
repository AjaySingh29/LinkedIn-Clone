// const btn = document.getElementById("show_more");
// let arrow = document.getElementById("arrow");
// let articles = document.querySelectorAll(".article");
// btn.addEventListener("click", function () {
//   for (let i = 0; i < articles.length; i++) {
//     if (articles[i].style.display === "flex") {
//       articles[i].style.display = "none";
//       btn.innerHTML = "Show more <div id='arrow'></div>";
//     }
//     else {
//       articles[i].style.display = "flex";
//       arrow.style.transform = "rotate(0deg)";
//       btn.innerHTML = "Show less <div id='arrow'></div>";
//     }
//   }
// });

// const btn = document.getElementById("show_more");
// const article=document.querySelectorAll('div.article');
// let article=document.getElementsByClassName('article');

// if (article.style.display === "none") {
// article2.style.display = "inline-block";
// article.style.display="flex";
// if(article.style.display==="inline"){
//   article.style.display="flex";
// }
// }
// else {
// article.style.display = "none";
// }
// });

// btn.addEventListener('click', function(){
//   if(getComputedStyle(article).getPropertyValue('--display')==="flex"){
//     article.style.display="none";
//     article.style.setProperty('--display', true);
//   }
//   else{
//     article.style.display="flex";
//   }
// });

const btn = document.getElementById("show_more");
let arrows = document.getElementsByClassName("arrow");
let articles = document.querySelectorAll(".article");

btn.addEventListener("click", function () {
  for (let i = 0; i < articles.length; i++) {
    if (articles[i].style.display === "block") {
      articles[i].style.display = "none";
      btn.innerHTML = "Show more <div class='arrow'></div>";
    } else {
      articles[i].style.display = "block";
      // articles[i].style.transitionDelay = `${i * 0.1}s`;
      btn.innerHTML = "Show less <div class='arrow'></div>";
      
    }
  }
  for (let i = 0; i < arrows.length; i++) {
    if (articles[0].style.display === "block") {
      arrows[i].style.transform = "rotate(0deg)";
    } else {
      arrows[i].style.transform = "rotate(180deg)";
    }
  }
});
