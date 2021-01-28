window.addEventListener("load", start);

function start() {
  if (localStorage.getItem("loggedIn") !== "yes") {
    location.href = "./login.html";
  } else {
    startTimer();
    gameLogicEventListeners();
    enterSubmit();
    focusInput();
  }
}

// global variables
let randomNumber = Math.floor(1 + Math.random(1) * 10);
console.log(randomNumber);
let playerGuesses = 1;
let stopTimer = false;
let win = false;


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
  console.log(inputNumber);
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
    presentText.innerHTML = "please input a number";
  }
  savePlayerAnswers(inputNumber);
}

// timer countDown.
function startTimer() {
  //playGame(timer);
  let timer = 11;
  let time = setInterval(countDown, 1000);
  let DOMtimer = document.getElementById("timer");
  DOMtimer.style.visibility = "visible";
  function countDown() {
    timer--;
    console.log(timer)
    if (timer < 1) {
      timer = "";
      DOMtimer.style.visibility = "hidden";
      clearInterval(time);
    }
    if (timer <= 3){
      DOMtimer.style.background = "red";  
    }
    if(timer > 3){
        DOMtimer.style.background = "#514E7C"; 
    }
    if (stopTimer) {
      clearInterval(time);
      timer = 10;
      //stopTimer = false;
    }
    if (win || botWin) {
      clearInterval(time);
      DOMtimer.style.visibility = "hidden";
    }
    DOMtimer.innerHTML = timer;
    if(timer <= 0){
      let presentText = document.getElementById("presentText");
      presentText.innerHTML = "Too slow!";
      playerGuesses += 1;
      //connect to flow. 
    }
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




//input has to be numbers validation
//continue game if no guess. 



