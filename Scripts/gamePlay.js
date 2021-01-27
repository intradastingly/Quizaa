// hides input field when go button is pressed and new screen presents.
function hideGame() {
  let userPlayField = document.getElementById("userBox");

  userPlayField.classList.remove("show");
  userPlayField.classList.add("hide");
}

// displays bot to say you should go higher
function displayHigherScreen() {
  let higherScreen = document.getElementById("go-higher");
  higherScreen.classList.add("show");

  setTimeout(() => {
    botSelected();
    nextRound();
    higherScreen.classList.remove("show");
    higherScreen.classList.add("hide");
  }, 3500);
}

// displays bot to say you should go lower
function displayLowerScreen() {
  let lowerScreen = document.getElementById("go-lower");
  lowerScreen.classList.add("show");

  setTimeout(() => {
    botSelected();
    nextRound();
    lowerScreen.classList.remove("show");
    lowerScreen.classList.add("hide");
  }, 3500);
}

// shows button to take you to next round
function nextRound() {
  let continueBtn = document.getElementById("continue-game-btn");
  continueBtn.classList.add("show");
  continueBtn.addEventListener("click", resumeGame);

  function resumeGame() {
    continueBtn.classList.remove("show");
    continueBtn.classList.add("hide");

    let userPlayField = document.getElementById("userBox");
    userPlayField.classList.remove("hide");
    userPlayField.classList.add("show");

    document.getElementById("guess").value = "";

    hideBots();
    focusInput();
  }
}

function hideBots() {
  //hides sillybot
  let sillyBot = document.getElementById("sillyBot");
  sillyBot.classList.remove("show");
  sillyBot.classList.add("hide");

  //hides dumbbot
  let dumbBot = document.getElementById("dumbBot");
  dumbBot.classList.remove("show");
  dumbBot.classList.add("hide");

  //hides hardcorebot
  let hardcoreBot = document.getElementById("hardcoreBot");
  hardcoreBot.classList.remove("show");
  hardcoreBot.classList.add("hide");
}
