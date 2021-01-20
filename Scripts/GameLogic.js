// global variables
let randomNumber = Math.floor(Math.random() * 100);
let points = 0;
console.log(randomNumber)

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
        console.log("lower")
        presentText.innerHTML = "Lower"
    } if(inputNumber < randomNumber){
        console.log("higher")
        presentText.innerHTML = "higher"
    } if(inputNumber === randomNumber){
        presentText.innerHTML = "You Win"
        points = points + 1;
        randomNumber = Math.floor(Math.random() * 100);
        console.log(randomNumber)
    }
}
