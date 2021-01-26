window.addEventListener("load", loginEventListeners);

function loginEventListeners() {
  const loginButton = document.getElementById("submitLogin");
  loginButton.addEventListener("click", function () {
    loginForm();
  });
}

function loginForm() {
  let userNameInput = document.getElementById("userNameLogin");
  const passwordInput = document.getElementById("passwordLogin");
  const registeredUser = JSON.parse(localStorage.getItem("user"));

  if (
    userNameInput.value === registeredUser.username &&
    passwordInput.value === atob(registeredUser.password)
  ) {
    location.href = "./menu.html";
    localStorage.setItem("loggedIn", "yes");
  } else {
    passwordInput.value = "";
    userNameInput.style.color = "red";
    userNameInput.value = "Wrong username or password";

    userNameInput.addEventListener("focus", function () {
      userNameInput.style.color = "#fdf9de";
      userNameInput.value = "";
    });
  }
}
