function loginEventListeners() {
  const loginButton = document.getElementById("submitLogin");
  loginButton.addEventListener("click", () => {
    loginForm();
  });
}

function loginForm() {
  const userNameInput = document.getElementById("userNameLogin").value;
  const passwordInput = document.getElementById("passwordLogin").value;
  const registeredUser = JSON.parse(localStorage.getItem("user"));

  if (
    userNameInput === registeredUser.username &&
    passwordInput === registeredUser.password
  ) {
    console.log("success");
  } else {
    console.log("wrong username or password");
  }
}
