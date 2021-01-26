window.addEventListener("load", userEventListeners);

function userEventListeners() {
  if (localStorage.getItem("loggedIn") !== "yes") {
    location.href = "./login.html";
  } else {
    const username = JSON.parse(localStorage.getItem("user"));
    const greetingMessage = "Hello " + username.username + "!";
    document.getElementById("greeting").innerHTML = greetingMessage;

    const startGameButton = document.getElementById("startGame");

    startGameButton.addEventListener("click", () => {
      location.href = "./chooseBots.html";
    });
  }
  const logOutButton = document.getElementById("logOutLink");
  logOutButton.addEventListener("click", logOut);
}

function logOut() {
  localStorage.setItem("loggedIn", "no");
}
