

// global variables
let randomNumber = Math.floor(Math.random() * 10);
//let timer = 6;
let playerGuesses = 0;



//start and submit buttons.
function eventListeners(){ 
    const submit = document.getElementById('submitGuess');
    submit.onclick = playGame;
    submit.addEventListener('click',countDown)

    const start = document.getElementById('start');
    start.onclick = startTimer;
   
}

//returns input from user.
function takeInput() {
    const guess = document.getElementById('guess').value;
    return guess;
}

function playGame() {
    let inputNumber = Number(takeInput());
    let presentText = document.getElementById("presentText");
    // checks if inputnumber is lower or higher then randomnumber
    if(inputNumber > randomNumber){
        presentText.innerHTML = "Lower"
        playerGuesses += 1;
    } if(inputNumber < randomNumber){
        presentText.innerHTML = "higher";
        playerGuesses += 1;
    } if(inputNumber === randomNumber){
        presentText.innerHTML = "You Win"
        randomNumber = Math.floor(Math.random() * 10);
    }
    sillyBotsTurn(randomNumber, inputNumber);
}
// timer countDown, also displays submit button
function startTimer() {
    /* setInterval(countDown, 1000); */
    
    // shows input and sumbit when start is pressed
    const submit = document.getElementById('submitGuess');
    const guess = document.getElementById('guess');
    submit.classList.add("show");
    guess.classList.add("show");
}
// timer on start
function countDown(){
    /* timer--;
    if(timer <= 0){
        timer = 0;
        clearInterval(timer)
    }
    let countDown = document.getElementById('timer');
    countDown.innerHTML = timer;  
    return timer; */
}

//display next player!; 
//restart timer.  