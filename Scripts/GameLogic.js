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

//takes time from DOM html and sends to play Game. 
setInterval(checkTime, 1000);
  function checkTime() {
    let time = Number(timer.innerHTML);
    if(time===1){time = -1;}
    return time;
  }

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
  let inputNumber = Number(takeInput());2
  let presentText = document.getElementById("presentText");
  let validationText = document.getElementById('validation');
  let time = checkTime();
  console.log(time)
  if(!/^[0-9]+$/.test(inputNumber)){
    validationText.style.visibility = "visible"; 
  }
  if (inputNumber > randomNumber) {
    presentText.innerHTML = "Go lower!";
    playerGuesses += 1;
    stopTimer = true;;;;;
    hideGame();
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
  else if (inputNumber !== 0 && inputNumber < randomNumber) {
    validationText.style.visibility = "hidden"; 
    presentText.innerHTML = "Go higher!";
    playerGuesses += 1;
    stopTimer = true;
    hideGame();
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
  } else if (inputNumber === randomNumber) {
    validationText.style.visibility = "hidden"; 
    presentText.innerHTML = "You Win!";
    stopTimer = true;
    win = true;
    hideGame();
    displayWin();
  }
  else if (time < 0) {
    //make number string
    validationText.style.visibility = "hidden"; 
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
      //timer = " ";
      DOMtimer.style.visibility = "hidden";
      clearInterval(time);
    }
    if (timer <= 0) {
      DOMtimer.style.background = "#514E7C";
      playGame();
      clearInterval(time);
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
      document.getElementById("userBox").classList.add("hide");
      document.getElementById("continue-game-btn").classList.add("hide");
    }
  }
}

//fix 1 bug. 