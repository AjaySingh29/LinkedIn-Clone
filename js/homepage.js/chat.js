const msgs = document.querySelectorAll(".msgs");
const edits = document.querySelectorAll(".editableParagraph");
const msgTogglers = document.querySelectorAll(".msgToggler");
const newMsgs = document.querySelectorAll(".newMsg");
const msgBody = document.querySelectorAll(".msgBody");
const msgFooter = document.querySelectorAll(".msgFooter");
const inputSends = document.querySelectorAll("input.send");

msgs.forEach((msg, index) => {
  msg.addEventListener("click", () => {
    // Focus on the editable paragraph
    if (edits[index].innerHTML === "Write a message...") {
      edits[index].innerHTML = "";
      edits[index].focus();
      // Create a range and set the cursor at the beginning
      const range = document.createRange();
      const selection = window.getSelection();
      range.setStart(edits[index].childNodes[0], 0);
      range.collapse(true);
      selection.removeAllRanges();
      selection.addRange(range);
    }
  });

  edits[index].addEventListener("input", () => {
    edits[index].style.color = "#111";
    if (edits[index].textContent !== "Write a message...") {
      inputSends[index].style.backgroundColor = "#0a65c2";
      inputSends[index].style.color = "#fff";
      inputSends[index].style.fontWeight = "500";
      inputSends[index].style.cursor = "pointer";

      // Save the cursor position
      const selection = window.getSelection();
      const range = selection.getRangeAt(0);
      const startOffset = range.startOffset;

      // Update the text content
      edits[index].textContent = edits[index].textContent.replace(
        "Write a message...",
        ""
      );

      // Restore the cursor position
      range.setStart(edits[index].firstChild, startOffset);
      range.setEnd(edits[index].firstChild, startOffset);
      selection.removeAllRanges();
      selection.addRange(range);
    }
  });
});

edits.forEach((edit, index) => {
  edit.addEventListener("input", (event) => {
    if (edit.textContent === "") {
      edit.textContent = "Write a message...";
      edit.style.color = "";
      inputSends[index].style.color = "#888";
      inputSends[index].style.backgroundColor = "#ddd";
    }
  });
});

msgs.forEach((msg, index) => {
  msg.addEventListener("click", (event) => {
    event.stopPropagation();
    newMsgs.forEach((msgbody) => {
      msgbody.classList.remove("active");
    });
    newMsgs[index].classList.add("active");
  });
});

document.addEventListener("click", () => {
  newMsgs.forEach((msgbody) => {
    msgbody.classList.remove("active");
  });
  edits.forEach((edit) => {
    if (edit.innerHTML.length === 0) {
      edit.style.color = "";
      edit.innerHTML = "Write a message...";
    }
  });
});

msgTogglers.forEach((msgToggler, index) => {
  msgToggler.addEventListener("click", () => {
    if (newMsgs[index].style.height === "510px") {
      newMsgs[index].style.height = "";
      newMsgs[index].style.transform = "translateY(0)";
      msgToggler.style.transform = "rotate(0)";
    } else {
      newMsgs[index].style.height = "510px";
      newMsgs[index].style.transform = "translateY(-390px)";
      msgToggler.style.transform = "rotate(180deg)";
    }
  });
});

const howToSend = document.querySelectorAll(".howToSend");
const input = document.querySelectorAll("input");
const toSend = document.querySelectorAll(".toSend");

toSend.forEach((tosend, index) => {
  tosend.addEventListener("click", (event) => {
    event.stopPropagation();
    if (newMsgs[index].style.height === "490px") {
      msgTogglers[index].style.display = "flex";
    } else {
      if (howToSend[index].style.display === "flex") {
        msgTogglers[index].style.display = "flex";
      } else {
        msgTogglers[index].style.display = "none";
      }
    }
    if (howToSend[index].style.display === "flex") {
      howToSend[index].style.display = "none";
    } else {
      howToSend[index].style.display = "flex";
    }
  });
  document.addEventListener("click", () => {
    howToSend[index].style.display = "none";
  });
  howToSend[index].addEventListener("click", (event) => {
    event.stopPropagation();
  });
});

// Select all groups
const groups = document.querySelectorAll(".group");
// Select all groups and input.send elements

groups.forEach((group) => {
  // Select radio buttons within each group
  const radioButtons = group.querySelectorAll('input[type="radio"]');
  const groupId = group.getAttribute("data-group");

  // Find the corresponding input.send element
  const inputSend = document.querySelector(
    `input.send[data-group="${groupId}"]`
  );

  // Add event listeners to each radio button
  radioButtons.forEach((radio) => {
    radio.addEventListener("change", () => {
      // Update the value of input.send based on the selected radio button
      inputSend.value = radio.value;
    });
  });
});

const menuItem = document.querySelectorAll(".menuItem");
const menuItemVideo = document.querySelectorAll(".menuItemVideo");
const menuItemShrink = document.querySelectorAll(".menuItemShrink");
const menuItemCancel = document.querySelectorAll(".menuItemCancel");
const messages = document.querySelectorAll(".messages");
const orgs = document.querySelectorAll(".org");
const messageWrapper = document.querySelectorAll(".messageWrapper");

menuItemCancel.forEach((cancel, index) => {
  cancel.addEventListener("click", () => {
    messages[index].style.display = "none";
  });
});

orgs.forEach((org, index) => {
  org.addEventListener("click", () => {
    messages[index].style.display = "block";
  });
});

messages.forEach((message, index) => {
  message.style.transitionDuration = ".2s";
});

menuItemShrink.forEach((shrink, index) => {
  shrink.addEventListener("click", () => {
    if (messages[index].style.width === "336px") {
      messages[index].style.width = "";
      messages[index].style.height = "";
      messages[index].style.bottom = "-105px";
      msgBody[index].style.height = "";
      shrink
        .querySelector("i")
        .classList.replace(
          "fa-up-right-and-down-left-from-center",
          "fa-down-left-and-up-right-to-center"
        );
      msgFooter[index].style.width = "";
      if (
        window.getComputedStyle(messages[index]).height === "480px" &&
        window.getComputedStyle(newMsgs[index]).height === "383px"
      ) {
        newMsgs[index].style.height = "510px";
        newMsgs[index].style.transform = "translateY(-390px)";
      }
    } else {
      messages[index].style.width = "336px";
      messages[index].style.height = "480px";
      messages[index].style.position = "fixed";
      messages[index].style.bottom = "-5px";
      msgBody[index].style.height = "260px";
      msgBody[index].style.overflowY = "auto";
      shrink
        .querySelector("i")
        .classList.replace(
          "fa-down-left-and-up-right-to-center",
          "fa-up-right-and-down-left-from-center"
        );
      msgFooter[index].style.width = "336px";
      if (
        window.getComputedStyle(messages[index]).height === "480px" &&
        window.getComputedStyle(newMsgs[index]).height === "383px"
      ) {
        newMsgs[index].style.height = "510px";
        newMsgs[index].style.transform = "translateY(-390px)";
      }
    }
  });

  // msgTogglers[index].addEventListener("click", () => {
  //   const currentHeight = window.getComputedStyle(newMsgs[index]).height;
  //   if (currentHeight === "383px") {
  //     newMsgs[index].style.height = "";
  //     newMsgs[index].style.transform = "translateY(0)";
  //     msgTogglers[index].style.transform = "rotate(0)";
  //   } else {
  //     newMsgs[index].style.height = "383px";
  //     newMsgs[index].style.transform = "translateY(-262px)";
  //   }
  // });
});

const videoContainers = document.querySelectorAll(".videoContainer");
const videoCancel = document.querySelectorAll(".videoCancel");

menuItemVideo.forEach((video, index) => {
  video.addEventListener("click", (event) => {
    event.stopPropagation();
    videoContainers[index].style.display = "block";
  });
  document.addEventListener("click", () => {
    videoContainers[index].style.display = "none";
  });
  videoContainers[index].addEventListener("click", (event) => {
    event.stopPropagation();
  });
});

videoCancel.forEach((cancel, index) => {
  cancel.addEventListener("click", () => {
    videoContainers[index].style.display = "none";
  });
});

const providers = document.querySelectorAll(".provider");
const toolsForMeeting = document.querySelectorAll(".toolForMeeting");

providers.forEach((provider, index) => {
  provider.addEventListener("click", () => {
    toolsForMeeting[index].style.display = "block";
  });
});

const menuItems = document.querySelectorAll(".menuItem");
const messageMenuLists = document.querySelectorAll(".messageMenuList");

menuItems.forEach((menuItem, index) => {
  menuItem.addEventListener("click", (event) => {
    event.stopPropagation();
    if (messageMenuLists[index].style.display === "block") {
      messageMenuLists[index].style.display = "none";
    } else {
      messageMenuLists[index].style.display = "block";
    }
  });
  document.addEventListener("click", () => {
    messageMenuLists[index].style.display = "none";
  });
  messageMenuLists[index].addEventListener("click", (event) => {
    event.stopPropagation();
  });
});
