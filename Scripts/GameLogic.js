window.addEventListener("load", start);

function start() {
  gameLogicEventListeners();
  enterSubmit()
}

// global variables
let randomNumber = Math.floor(1 + Math.random(1) * 10);
console.log(randomNumber)
let playerGuesses = 0;
let stopTimer = false;
let win = false;
let countDownActive = false;

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

function playGame() {
  let inputNumber = Number(takeInput());
  console.log(inputNumber)
  let presentText = document.getElementById("presentText");
  // checks if inputnumber is lower or higher then randomnumber
  if (inputNumber > randomNumber) {
    presentText.innerHTML = "Lower";
    playerGuesses += 1;
    stopTimer = true;
    if(isSillySelected){
      sillyBotsTurn(randomNumber,inputNumber);
    }
  }
  if (inputNumber !== 0 && inputNumber < randomNumber) {
    presentText.innerHTML = "higher";
    playerGuesses += 1;
    stopTimer = true;
    if(isSillySelected){
      sillyBotsTurn(randomNumber,inputNumber);
    }
  }
  if (inputNumber === randomNumber) {
    presentText.innerHTML = "You Win";
    stopTimer = true;
    win = true;
  }
  if(inputNumber === 0){
    presentText.innerHTML = "please input a number";
  }
 
  displayGuesses(playerGuesses);
}

// timer countDown. 
function startTimer() {
    countDownActive = true;
    let timer = 10;
    let time = setInterval(countDown, 1000);
    let DOMtimer = document.getElementById("timer");
    DOMtimer.style.visibility = "visible";
    function countDown() {
        timer--;
        if (timer < 1) {
            timer = 10; 
            clearInterval(time);
            countDownActive = false;
            DOMtimer.style.visibility = "hidden";
        } 
        if (stopTimer){
            clearInterval(time);
            timer = 10;
            stopTimer = false;
        }
        if (win || botWin) {
            clearInterval(time);
            timer = '';
        }
        if (timer > 10){
          DOMtimer.style.visibility = "hidden";
        }
        DOMtimer.innerHTML = timer;
        console.log(countDownActive)
    }
}

function displayInputAndSubmitButton() {
  // displays bots wich are selected to play against
  botSelected();

  // shows input and sumbit when start is pressed
  const submit = document.getElementById("submitGuess");
  const guess = document.getElementById("guess");
  submit.classList.add("show");
  guess.classList.add("show");
}

function displayGuesses(playerGuesses) {
  //console.log(playerGuesses);
}

//listens for Enter key press.
function enterSubmit() {
    document.addEventListener('keypress', submit);
    function submit(event) {
      if(event.code === "Enter" /* && !countDownActive */){
        playGame();
        setTimeout(startTimer, 1000)
    }
  }
}

//go button should not be reclickable. tie it to true false state on click. 
//press true state??

