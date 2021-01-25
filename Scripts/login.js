window.addEventListener("load", loginEventListeners);

function loginEventListeners() {
  const loginButton = document.getElementById("submitLogin");
  loginButton.addEventListener("click", function () {
    loginForm();
  });
}

function loginForm() {
  const userNameInput = document.getElementById("userNameLogin").value;
  const passwordInput = document.getElementById("passwordLogin").value;
  const registeredUser = JSON.parse(localStorage.getItem("user"));

  if (
    userNameInput === registeredUser.username &&
    passwordInput === atob(registeredUser.password)
  ) {
    location.href = "./menu.html";
  } else {
    console.log("wrong username or password");
  }
}
