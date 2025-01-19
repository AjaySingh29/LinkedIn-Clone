const pre = document.querySelectorAll(".previous");
const nt = document.querySelectorAll(".next");
const commentBoxes = document.querySelectorAll(".commentBox");
// const child = document.querySelectorAll(".commentChild");
const child=commentBoxes[0].querySelectorAll('.commentChild');

pre.forEach((p, j) => {
  p.style.zIndex = "-1";
  p.style.opacity = "0";
  p.addEventListener("click", function () {
    let commentWrapper = p
      .closest(".commentContainer")
      .querySelector(".commentWrapper");
    let nextButton = commentWrapper.nextElementSibling;
    let translateValue =
      parseInt(
        commentBoxes[j].style.transform
          .replace("translateX(", "")
          .replace("px)", "")
      ) || 0;
    if (translateValue < 0) {
      translateValue += child[0].offsetWidth;
      commentBoxes[j].style.transform = `translateX(${translateValue}px)`;
      nextButton.style.display = "flex"; // Show the next button
    }

    if (translateValue === 0) {
      p.style.zIndex = "-1";
      p.style.opacity = "0";
    }
  });
  nt.forEach((n) => {
    n.addEventListener("click", function () {
      const pre = document.querySelectorAll(".previous");
      pre.forEach((p) => {
        if (p.style.opacity === "0") {
          p.style.zIndex = "1";
          p.style.opacity = "1";
        }
      });
    });
  });
});

nt.forEach((n, j) => {
  n.addEventListener("click", function () {
    let translateValue =
      parseInt(
        commentBoxes[j].style.transform
          .replace("translateX(", "")
          .replace("px)", "")
      ) || 0;
    if (translateValue > -(child.length - 1) * (child[0].offsetWidth + 10)) {
      translateValue -= child[0].offsetWidth;
      commentBoxes[j].style.transform = `translateX(${translateValue}px)`;
      if (translateValue <= -(child.length - 5) * (child[0].offsetWidth + 10)) {
        n.style.display = "none"; // Hide the next button
      }
    }
  });
});

const commentInputs = document.querySelectorAll(".commentInput");
const inputs = document.querySelectorAll(".input");
const inputComments = document.querySelectorAll(".inputComment");
const commentSubmits = document.querySelectorAll(".commentSubmit");

commentInputs.forEach((commentInput) => {
  commentInput.oninput = function () {
    inputs.forEach((input) => {
      input.style.flexDirection = "column";
      input.style.alignItems = "flex-start";
      input.style.paddingBottom = "10px";
      if (commentInput.value.length === 0) {
        input.style.flexDirection = "";
        input.style.alignItems = "";
        input.style.paddingBottom = "";
      }
    });
    inputComments.forEach((inputComment) => {
      inputComment.style.width = "100%";
      if (commentInput.value.length === 0) {
        inputComment.style.width = "";
      }
    });
    commentSubmits.forEach((commentSubmit) => {
      commentSubmit.style.display = "block";
      if (commentInput.value.length === 0) {
        commentSubmit.style.display = "";
      }
    });
  };
});

const comments = document.querySelectorAll(".comment");
const commentContainers = document.querySelectorAll(".commentContainer");
const coms = document.querySelectorAll(".com");

comments.forEach((comment, index) => {
  comment.addEventListener("click", (event) => {
    const commentContainer = commentContainers[index];
    const com = coms[index];
    event.stopPropagation();
    if (
      commentContainer.style.display === "flex" &&
      com.style.display === "flex"
    ) {
      commentContainer.style.display = "none";
      com.style.display = "none";
    } else {
      commentContainer.style.display = "flex";
      com.style.display = "flex";
    }
  });
  document.addEventListener("click", () => {
    const commentContainer = commentContainers[index];
    const com = coms[index];
    if (
      commentContainer.style.display === "flex" &&
      com.style.display === "flex"
    ) {
      commentContainer.style.display = "none";
      com.style.display = "none";
    }
  });
  commentContainers.forEach((commentContainer)=>{
    commentContainer.addEventListener('click', (event)=>{
      event.stopPropagation();
    })
  })
  coms.forEach((com)=>{
    com.addEventListener('click', (event)=>{
      event.stopPropagation();
    })
  })
});

// function openEmojiKeyboard() {
//   // Create a new KeyboardEvent for the Windows key
//   const winKeyEvent = new KeyboardEvent('keydown', {
//       key: 'Meta',
//       code: 'MetaLeft',
//       keyCode: 91, // Windows key code
//       which: 91,
//       bubbles: true,
//       cancelable: true
//   });

//   // Create a new KeyboardEvent for the dot key
//   const dotKeyEvent = new KeyboardEvent('keydown', {
//       key: '.',
//       code: 'Period',
//       keyCode: 190, // Dot key code
//       which: 190,
//       bubbles: true,
//       cancelable: true
//   });

//   // Dispatch the Windows key event
//   document.dispatchEvent(winKeyEvent);

//   // Dispatch the dot key event
//   document.dispatchEvent(dotKeyEvent);
// }

// // Call the function to open the emoji keyboard
// openEmojiKeyboard();

// let previousHide = document.querySelectorAll(".previousHide");
// let nextHide = document.querySelectorAll(".nextHide");

// pre.forEach((p) => {
//   p.style.opacity = "0";
//   p.style.zindex = "-1";
//   p.addEventListener("click", function () {
//     previousHide.forEach((pHide) => {
//       pHide.style.display = "none";
//     });
//     nextHide.forEach((nHide) => {
//       nHide.style.display = "block";
//     });
//     p.style.opacity = "0";
//     p.style.zindex = "-1";
//     nt.forEach((n) => {
//       n.style.opacity = "1";
//       n.style.zindex = "1";
//     });
//   });
// });

// nt.forEach((n) => {
//   n.addEventListener("click", function () {
//     nextHide.forEach((nHide) => {
//       nHide.style.display = "none";
//     });
//     previousHide.forEach((pHide) => {
//       pHide.style.display = "block";
//     });
//     n.style.opacity = "0";
//     n.style.zindex = "-1";
//     pre.forEach((p) => {
//       p.style.opacity = "1";
//       p.style.zindex = "1";
//     });
//   });
// });
