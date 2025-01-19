const messaging = document.querySelector(".messaging");
const msgDown = document.querySelector(".messageDown");
messaging.style.transitionDuration = ".2s";

msgDown.addEventListener("click", () => {
  if (messaging.style.top === "650px") {
    messaging.style.top = "";
    msgDown.style.transform = "";
  } else {
    messaging.style.top = "650px";
    msgDown.style.transform = "rotate(180deg)";
  }
});

const focused = document.querySelector(".focused");
const other = document.querySelector(".other");
const msgWrapper = document.querySelector(".msgWrapper");

focused.style.borderBottomColor = "#32650d";
focused.style.color = "#32650d";
focused.style.transitionDuration = ".1s";
other.style.transitionDuration = ".1s";

focused.addEventListener("click", () => {
  msgWrapper.style.transform = "translateX(0)";
  focused.style.borderBottomColor = "#32650d";
  other.style.borderBottomColor = "";
  other.style.color = "";
  focused.style.color = "#32650d";
});

other.addEventListener("click", () => {
  msgWrapper.style.transform = "translateX(-100%)";
  focused.style.borderBottomColor = "";
  other.style.borderBottomColor = "#32650d";
  focused.style.color = "";
  other.style.color = "#32650d";
});

const postedLists = document.querySelectorAll(".postedList");
const postedListItems = document.querySelectorAll(".postedListItems");

postedLists.forEach((postedList, index) => {
  postedList.addEventListener("click", (event) => {
    event.stopPropagation();
    const isActive = postedListItems[index].classList.contains(
      "postedListItemActive"
    );
    postedListItems.forEach((postedListItem) => {
      postedListItem.classList.remove("postedListItemActive");
    });
    if (isActive) {
      postedListItems[index].classList.remove("postedListItemActive");
    } else {
      postedListItems[index].classList.add("postedListItemActive");
    }
  });
});

document.addEventListener("click", () => {
  postedListItems.forEach((postedListItem) => {
    postedListItem.classList.remove("postedListItemActive");
  });
});

postedListItems.forEach((postedListItem) => {
  postedListItem.addEventListener("click", (event) => {
    event.stopPropagation();
  });
});

document.addEventListener("click", () => {
  postedListItems.forEach((postedListItem) => {
    postedListItem.classList.remove("postedListItemActive");
  });
});

postedListItems.forEach((postedListItem) => {
  postedListItem.addEventListener("click", (event) => {
    event.stopPropagation();
  });
});

const checks = document.querySelectorAll(".check");
const dps = document.querySelectorAll(".dp");
const Delete = document.querySelector(".delete");
const messageSearch = document.querySelector(".messageSearch");
const num = document.querySelector(".num");
const focusedItems = document.querySelectorAll(".focusedItem");

Delete.style.display = "none";
let k = 0;

checks.forEach((check, index) => {
  check.addEventListener("click", () => {
    if (check.checked) {
      k += 1;
    } else {
      k -= 1;
    }
    num.innerHTML = k;

    if (k > 0) {
      Delete.style.display = "flex";
      Delete.style.width = "263px";
      messageSearch.style.display = "none";
    } else {
      Delete.style.display = "none";
      messageSearch.style.display = "flex";
    }
  });
});

const unread = document.querySelector(".unread");
const del = document.querySelector(".del");
const archive = document.querySelector(".archive");
const selectedCancel = document.querySelector(".selectedCancel");

archive.addEventListener("click", () => {
  checks.forEach((check, index) => {
    if (check.checked) {
      focusedItems[index].style.display = "none";
      Delete.style.display = "none";
      messageSearch.style.display = "flex";
    }
  });
  k = 0;
});

del.addEventListener("click", () => {
  checks.forEach((check, index) => {
    if (check.checked) {
      focusedItems[index].remove();
      Delete.style.display = "none";
      messageSearch.style.display = "flex";
    }
  });
  k = 0;
});

unread.addEventListener("click", () => {
  checks.forEach((check, index) => {
    if (check.checked) {
      if (focusedItems[index].classList.contains("bgColor")) {
        focusedItems[index].classList.remove("bgColor");
        postedLists[index].classList.remove("postedListBgColor");
        dps[index].classList.remove("dpBgColor");
      } else {
        focusedItems[index].classList.add("bgColor");
        postedLists[index].classList.add("postedListBgColor");
        dps[index].classList.add("dpBgColor");
      }
      check.checked = false;
    }
  });

  if (unread.title === "Mark read") {
    unread
      .querySelector("i")
      .classList.replace("fa-envelope-open", "fa-envelope");
    unread.title = "Mark unread";
  } else {
    unread
      .querySelector("i")
      .classList.replace("fa-envelope", "fa-envelope-open");
    unread.title = "Mark read";
  }

  Delete.style.display = "none";
  messageSearch.style.display = "flex";
  k = 0;
});

selectedCancel.addEventListener("click", () => {
  Delete.style.display = "none";
  messageSearch.style.display = "flex";
  checks.forEach((check) => {
    check.checked = false;
    k = 0;
  });
});

const filter = document.querySelector(".filter");
const filterList = document.querySelector(".filterList");

filterList.style.display = "none";

filter.addEventListener("click", (event) => {
  event.stopPropagation();
  if (filterList.style.display === "flex") {
    filterList.style.display = "none";
  } else {
    filterList.style.display = "flex";
  }
});

document.addEventListener("click", () => {
  filterList.style.display = "none";
});

filterList.addEventListener("click", (event) => {
  event.stopPropagation();
});

const manageToggler = document.querySelector(".manageToggler");
const manage = document.querySelector(".manage");

manageToggler.addEventListener("click", (event) => {
  event.stopPropagation();
  if (manage.style.display === "block") {
    manage.style.display = "none";
  } else {
    manage.style.display = "block";
  }
});

document.addEventListener("click", () => {
  manage.style.display = "none";
});

const friendList = document.querySelector(".friendList");
const friendResize = document.querySelector(".friendResize");
const friendListCancel = document.querySelector(".friendListCancel");
const friendListShow = document.querySelector(".friendListShow");
const friendItems = document.querySelector(".friendItems");
const friendCollapse = document.querySelector(".friendCollapse");
const sendMsg = document.querySelector(".sendMsg");

friendListCancel.addEventListener("click", () => {
  friendList.style.display = "none";
});

friendListShow.addEventListener("click", () => {
  friendList.style.display = "block";
});

friendResize.addEventListener("click", () => {
  if (friendList.style.width === "336px") {
    friendList.style.width = "";
    friendList.style.height = "";
    friendList.style.transform = "translate(0, 0)";
    friendItems.style.height = "";
  } else {
    friendList.style.width = "336px";
    friendList.style.height = "400px";
    friendList.style.transform = "translate(0, 210px)";
    friendItems.style.height = "290px";
    friendItems.style.overflow = "scroll";
  }
});

friendCollapse.addEventListener("click", () => {
  if (friendList.style.width === "336px") {
    friendList.style.width = "";
    friendList.style.transform = "translateY(0)";
  } else {
    friendList.style.width = "336px";
    friendList.style.transform = "translateY(550px)";
  }
});

sendMsg.addEventListener("click", () => {
  friendList.style.display = "block";
});
