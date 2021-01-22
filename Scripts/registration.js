window.addEventListener("load", registrationEventListeners);

function registrationEventListeners() {
  const registerButton = document.getElementById("submitRegistration");
  registerButton.addEventListener("click", function () {
    submitRegistration();
  });
}

function submitRegistration() {
  const userNameInput = document.getElementById("userNameReg").value;
  const emailInput = document.getElementById("emailReg").value;
  const passwordInput = document.getElementById("passwordReg").value;
  const confirmPasswordInput = document.getElementById("confirmPasswordReg")
    .value;

  if (passwordInput !== confirmPasswordInput) {
    console.log("your passwords isn't matching");
  } else {
    const userObject = {
      username: btoa(userNameInput),
      email: btoa(emailInput),
      password: btoa(passwordInput),
    };
    saveLoginToLS(userObject);
    location.href = "./login.html";
  }
}

function saveLoginToLS(userObject) {
  localStorage.setItem("user", JSON.stringify(userObject));
}
