window.addEventListener("load", registrationEventListeners);

function registrationEventListeners() {
  const registerButton = document.getElementById("submitRegistration");
  registerButton.addEventListener("click", function () {
    submitRegistration();
  });
}

function submitRegistration() {
  let userNameInput = document.getElementById("userNameReg");
  let emailInput = document.getElementById("emailReg");
  let passwordInput = document.getElementById("passwordReg");
  let confirmPasswordInput = document.getElementById("confirmPasswordReg");
  if (passwordInput.value !== confirmPasswordInput.value) {
    userNameInput.value = "";
    emailInput.value = "";
    passwordInput.value = "";
    confirmPasswordInput.value = "";
    userNameInput.style.color = "red";
    userNameInput.value = "Passwords don't match";

    userNameInput.addEventListener("focus", function () {
      userNameInput.style.color = "#fdf9de";
      userNameInput.value = "";
    });
  } else {
    const userObject = {
      username: userNameInput.value,
      email: emailInput.value,
      password: btoa(passwordInput.value),
    };
    saveLoginToLS(userObject);
    location.href = "./login.html";
  }
}

function saveLoginToLS(userObject) {
  const highScoreObject = {
    guesses: [],
  };
  localStorage.setItem("highscore", JSON.stringify(highScoreObject));

  localStorage.setItem("user", JSON.stringify(userObject));
}
