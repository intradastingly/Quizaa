window.addEventListener("load", userEventListeners);

function userEventListeners() {
  const username = JSON.parse(localStorage.getItem("user"));
  const greetingMessage = "Hello " + username.username + "!";
  document.getElementById("greeting").innerHTML = greetingMessage;

  const startGameButton = document.getElementById("startGame");

  startGameButton.addEventListener("click", () => {
    location.href = "./chooseBots.html";
  });
}
