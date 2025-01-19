document.getElementById('submit').addEventListener("click", (e) => {
  const fname = document.getElementById("fname");
  const fnameError = document.getElementById("fnameError");
  const submit=document.getElementById('submit');

  submit.style.color="white";
  // Clear previous error messages
  fnameError.textContent = "";

  // Validate name input
  if (fname.value === "") {
    fnameError.innerHTML = "Please enter a name";
    fnameError.style.fontSize="12px";
    fnameError.style.color = "red";
    fname.style.borderColor = "red";
    e.preventDefault();
  }
  // return false;
});
