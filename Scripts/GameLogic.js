window.addEventListener("load", start);

function start() {
  eventListeners(); 
}

// global variables
let randomNumber = Math.floor(Math.random() * 10);
console.log(randomNumber);
let timer = 100;
let playerGuesses = 0;
let win = false;


//start and submit buttons.
function eventListeners(){ 
    const submit = document.getElementById('submitGuess');
    submit.addEventListener('click', playGame);
    //submit.addEventListener('click', startTimer);

    const start = document.getElementById('start');
    start.addEventListener('click', startTimer);
    start.addEventListener('click', displayInputAndSubmitButton);
}

//returns input from user.
function takeInput() {
    const guess = document.getElementById('guess').value;
    return guess;
}

function playGame(timer) {
    
    let inputNumber = Number(takeInput());

    let presentText = document.getElementById("presentText");
    // checks if inputnumber is lower or higher then randomnumber
    if(inputNumber > randomNumber){
        presentText.innerHTML = "Lower"
        playerGuesses += 1;
    } if(inputNumber !== 0 && inputNumber < randomNumber){
        presentText.innerHTML = "higher";
        playerGuesses += 1;
    } if(inputNumber === randomNumber){
        presentText.innerHTML = "You Win"
        win = true;
        startTimer(win)
        //stop the timer when you win
        //randomNumber = Math.floor(Math.random() * 10);
    } if (timer === 1){
        presentText.innerHTML = "Time ran out!";
    }

    
    displayGuesses(playerGuesses);
    sillyBotsTurn(randomNumber);

}

// timer countDown, also displays submit button
function startTimer(win) {
    let time = setInterval(countDown, 1000);
    
    function countDown(){
        timer--;
        if(timer <= 0){
            timer = 6;//figure out how to get this number to work correclty 
            clearInterval(time)
        } if (win === true) {
            clearInterval(time) //why so buggy?
        }
        let countDown = document.getElementById('timer');
        countDown.innerHTML = timer; 
        if(timer === 6) {
            countDown.innerHTML = "";
        }
    } 
    playGame(timer)
}

function displayInputAndSubmitButton() {
    // shows input and sumbit when start is pressed
    const submit = document.getElementById('submitGuess');
    const guess = document.getElementById('guess');
    submit.classList.add("show");
    guess.classList.add("show");
}

function displayGuesses(playerGuesses) {
    //console.log(playerGuesses);
}


//timer resetting on every submit. 

