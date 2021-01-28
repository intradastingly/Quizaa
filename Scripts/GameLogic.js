window.addEventListener("load", start);

function start() {
  if (localStorage.getItem("loggedIn") !== "yes") {
    location.href = "./login.html";
  } else {
    countDownGame();
    setTimeout(startTimer, 3000);
    setTimeout(gameLogicEventListeners, 3000);
    setTimeout(enterSubmit, 3000);
    setTimeout(focusInput, 3000);
    setTimeout(showUserBox, 3000);
  }
}

// global variables
let randomNumber = Math.floor(1 + Math.random(1) * 10);
console.log(randomNumber);
let playerGuesses = 1;
let stopTimer = false;
let win = false;

// start countDownGame
function countDownGame() {
  let countDownStartNumber = 3;
  setInterval(countDownStart, 1000);
  let DOMcountDown = document.getElementById("countDownGame");
  function countDownStart() {
    countDownStartNumber--;
    DOMcountDown.innerHTML = countDownStartNumber;
    if (countDownStartNumber === 0) {
      countDownStartNumber = "";
      DOMcountDown.classList.add("hide");
      clearInterval(countDownStart);
    }
  }
}

// show userBox
function showUserBox() {
  document.getElementById("userBox").classList.remove("hide");
  document.getElementById("userBox").classList.add("show");
}

//start and submit buttons.
function gameLogicEventListeners() {
  const submit = document.getElementById("submitGuess");
  submit.addEventListener("keypress", enterSubmit);

  submit.addEventListener("click", playGame);
  submit.addEventListener("click", hideGame);
  setTimeout(submit.addEventListener("click", startTimer), 1000);
}

//returns input from user.
function takeInput() {
  const guess = document.getElementById("guess").value;
  return guess;
}

function focusInput() {
  document.getElementById("guess").focus();
}

function playGame() {
  let inputNumber = Number(takeInput());
  let presentText = document.getElementById("presentText");

  // checks if inputnumber is lower or higher then randomnumber
  if (inputNumber > randomNumber) {
    presentText.innerHTML = "Lower";
    playerGuesses += 1;
    stopTimer = true;
    displayLowerScreen();
    // if sillybot is selected present sillys guess
    if (isSillySelected) {
      sillyBotsTurn(randomNumber, inputNumber);
    }
    // if dumbbot is selected present dumbbot guess
    if (isDumbSelected) {
      dumbBotsTurn(randomNumber, inputNumber);
    }
    // if hardcorebot is selected present hardcores guess
    if (isHardcoreSelected) {
      hardcoreBotsTurn(randomNumber, inputNumber);
    }
  }
  if (inputNumber !== 0 && inputNumber < randomNumber) {
    presentText.innerHTML = "higher";
    playerGuesses += 1;
    stopTimer = true;
    displayHigherScreen();
    // if sillybot is selected present sillys guess
    if (isSillySelected) {
      sillyBotsTurn(randomNumber, inputNumber);
    }
    // if dumbbot is selected present dumbbot guess
    if (isDumbSelected) {
      dumbBotsTurn(randomNumber, inputNumber);
    }
    // if hardcorebot is selected present hardcores guess
    if (isHardcoreSelected) {
      hardcoreBotsTurn(randomNumber, inputNumber);
    }
  }
  if (inputNumber === randomNumber) {
    presentText.innerHTML = "You Win";
    stopTimer = true;
    win = true;
    displayWin();
  }
  if (inputNumber === 0) {
    stopTimer = true;
    playerGuesses += 1;
    timeRanOut();
    hideGame();
    if (isSillySelected) {
      sillyBotsTurn(randomNumber, inputNumber);
    }
    // if dumbbot is selected present dumbbot guess
    if (isDumbSelected) {
      dumbBotsTurn(randomNumber, inputNumber);
    }
    // if hardcorebot is selected present hardcores guess
    if (isHardcoreSelected) {
      hardcoreBotsTurn(randomNumber, inputNumber);
    }
  }
  savePlayerAnswers(inputNumber);
}

// timer countDown.
function startTimer() {
  let timer = 5;
  let time = setInterval(countDown, 1000);
  let DOMtimer = document.getElementById("timer");
  DOMtimer.style.background = "#514E7C";
  DOMtimer.style.visibility = "visible";
  function countDown() {
    timer--;
    if (timer < 1 || timer >= 5) {
      timer = " ";
      DOMtimer.style.visibility = "hidden";
      clearInterval(time);
    }
    if (timer <= 0) {
      DOMtimer.style.background = "#514E7C";
      playGame();
      //connect to flow.
    }
    if (timer > 3) {
      DOMtimer.style.background = "#514E7C";
    }
    if (timer <= 3) {
      DOMtimer.style.background = "red";
    }
    if (stopTimer) {
      clearInterval(time);
      timer = 5;
      //stopTimer = false;
    }
    if (win || botWin) {
      clearInterval(time);
      DOMtimer.style.visibility = "hidden";
    }
    DOMtimer.innerHTML = timer;
  }
}

//listens for Enter key press.
function enterSubmit() {
  document.addEventListener("keypress", submit);
  function submit(event) {
    if (event.code === "Enter") {
      playGame();
      setTimeout(startTimer, 1000);
      document.getElementById("userBox").classList.add("hide");
      document.getElementById("continue-game-btn").classList.add("hide");
    }
  }
}

//number still red on restart
