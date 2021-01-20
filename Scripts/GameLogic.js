// global variables
let randomNumber = Math.floor(Math.random() * 100);
let points = 0;

function eventListeners(){ 
    const submit = document.getElementById('submitGuess');
    submit.onclick = playGame;
}

function takeInput() {
    const guess = document.getElementById('guess').value;
    return guess;
}

function playGame() {
    let inputNumber = Number(takeInput());
    let presentText = document.getElementById("presentText");
    if(inputNumber > randomNumber){
        presentText.innerHTML = "Lower"
    } if(inputNumber < randomNumber){
        presentText.innerHTML = "higher"
    } if(inputNumber === randomNumber){
        presentText.innerHTML = "You Win"
        points = points + 1;
        randomNumber = Math.floor(Math.random() * 100);
    }
}
