const form = document.getElementById("form");
const errorMessage = document.getElementById("error-message");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  if (validateForm()) {
    // Form is valid, do something (e.g., submit form data)
    form.submit();
  }
});

function validateForm() {
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phone");
  const passwordInput = document.getElementById("password");
  const ageInput = document.getElementById("age");
  const genderInput = document.getElementById("gender");
  const dateInput = document.getElementById("date");
  const colorInput = document.getElementById("color");

  errorMessage.innerHTML = ""; // Clear previous error messages

  if (!nameInput.checkValidity()) {
    displayError("Please enter a valid name.");
    return false;
  }

  if (!emailInput.checkValidity()) {
    displayError("Please enter a valid email address.");
    return false;
  }

  if (!phoneInput.checkValidity()) {
    displayError("Please enter a valid phone number.");
    return false;
  }

  if (!passwordInput.checkValidity()) {
    displayError("Please enter a valid password.");
    return false;
  }

  if (!ageInput.checkValidity()) {
    displayError("Please enter a valid age (minimum 18).");
    return false;
  }

  if (!genderInput.checkValidity()) {
    displayError("Please select a gender.");
    return false;
  }

  if (!dateInput.checkValidity()) {
    displayError("Please enter a valid date.");
    return false;
  }

  if (!colorInput.checkValidity()) {
    displayError("Please select a valid color.");
    return false;
  }

  return true; // Form is valid
}

function displayError(message) {
  const errorParagraph = document.createElement("p");
  errorParagraph.textContent = message;
  errorMessage.appendChild(errorParagraph);
}
