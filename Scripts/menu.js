window.addEventListener("load", start);

function start() {
  const startGameButton = document.getElementById("startGame");

  startGameButton.addEventListener("click", () => {
    location.href = "./chooseBots.html";
  });
}
