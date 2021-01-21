window.addEventListener("load", start);

function start() {
  gameLogicEventListeners();
}

// global variables
let randomNumber = Math.floor(Math.random(1) * 10);
console.log(randomNumber);
let playerGuesses = 0;
let stopTimer = false;
let win = false;

//start and submit buttons.
function gameLogicEventListeners() {
  const submit = document.getElementById("submitGuess");
  submit.addEventListener("click", playGame);
  setTimeout(submit.addEventListener('click', startTimer), 1000);

  const start = document.getElementById("start");
  start.addEventListener("click", startTimer);
  start.addEventListener("click", displayInputAndSubmitButton);
}

//returns input from user.
function takeInput() {
  const guess = document.getElementById("guess").value;
  return guess;
}

function playGame(timer) {
  let inputNumber = Number(takeInput());

  let presentText = document.getElementById("presentText");
  // checks if inputnumber is lower or higher then randomnumber
  if (inputNumber > randomNumber) {
    presentText.innerHTML = "Lower";
    playerGuesses += 1;
    stopTimer = true;
    sillyBotsTurn(randomNumber);
  }
  if (inputNumber !== 0 && inputNumber < randomNumber) {
    presentText.innerHTML = "higher";
    playerGuesses += 1;
    stopTimer = true;
    sillyBotsTurn(randomNumber);
  }
  if (inputNumber === randomNumber) {
    presentText.innerHTML = "You Win";
    stopTimer = true;
    win = true;
  }
  if (timer === 0) {
    presentText.innerHTML = "Time ran out!";
  }
  displayGuesses(playerGuesses);
  // sillybot();
}



// timer countDown. 
function startTimer() {
    let timer = 6;
    let time = setInterval(countDown, 1000);
    let DOMtimer = document.getElementById("timer");
    function countDown() {
        timer--;
        if (timer <= 0) {
            timer = 6; 
            clearInterval(time);
        } 
        if (stopTimer){
            clearInterval(time);
            timer = 5;
            stopTimer = false;
        }
        if (win) {
            clearInterval(time);
            timer = '';
        }
        DOMtimer.innerHTML = timer;
        if (timer === 6) {
            DOMtimer.innerHTML = "";
        }
    }
  playGame(timer);
}



function displayInputAndSubmitButton() {
  // shows input and sumbit when start is pressed
  const submit = document.getElementById("submitGuess");
  const guess = document.getElementById("guess");
  submit.classList.add("show");
  guess.classList.add("show");
}

function displayGuesses(playerGuesses) {
  //console.log(playerGuesses);
}

//get timer to restart on start click

