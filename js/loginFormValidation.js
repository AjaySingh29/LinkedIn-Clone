function validateForm(event) {
  const contact = document.getElementById("contact");
  const password = document.getElementById("password");
  const readability = document.getElementById("readability");
  const loginContainer = document.getElementById("loginContainer");
  const footer = document.getElementById('footer');

  const regForm1 = document.getElementById("regForm1");
  const regForm2 = document.getElementById("regForm2");

  const contactError = document.getElementById("contactError");
  const passwordError = document.getElementById("passwordError");

  // Clear previous error messages
  contactError.textContent = "";
  passwordError.textContent = "";

  // Regular expressions for validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern = /^\d{10}$/;

  // Validate contact input
  if (!emailPattern.test(contact.value) && !phonePattern.test(contact.value)) {
    contactError.textContent = "Please enter a valid email or phone number";
    contact.style.borderColor = "red";
    readability.style.top = "137px";
    event.preventDefault();
  } else {
    contact.style.borderColor = "";
  }

  // Validate password input
  if (password.value.length < 10) {
    passwordError.textContent = "Please enter a valid password";
    password.style.borderColor = "red";
    event.preventDefault();
    password.addEventListener("focus", function () {
      password.style.borderColor = "red";
    });
  } else {
    password.style.color = "#333";
    password.style.borderColor = "#333";
  }

  // Form display logic
  if (
    (emailPattern.test(contact.value) || phonePattern.test(contact.value)) &&
    password.value.length >= 10
  ) {
    regForm1.style.display = "none";
    regForm2.style.display = "block";
    event.preventDefault();
    loginContainer.style.height = "fit-content";
    readability.style.display = "none";
    footer.style.position = "absolute";
    footer.style.bottom = "20px";
  } else {
    regForm2.style.display = "none";
    regForm1.style.display = "block";
    loginContainer.style.height = "fit-content";
  }
}

// function validateFormforName(e) {
//   const fname = document.getElementById('fname');
//   const fnameError = document.getElementById('fnameError');
  
//   e.preventDefault();
//   fnameError.textContent = "";

//   if (fname.value === "") {
//     alert("Hello");
//     fnameError.innerHTML = "Please enter a name";
//     fnameError.style.color = "red";
//     fname.style.borderColor = "red";
//     e.preventDefault();
//   }
//   return false;
// }
