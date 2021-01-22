// global variables
let sillyBotArray = [];
let ul = document.getElementById("sillyBotUl");
let botWin = false;

// boolean to change in menu when how many bots u want to
// turn to true if u want to play agains Silly
let isSillySelected = true;

// SILLY BOT CODE BELOW /  / / / / / / / / /

// runs after player have pressed submit so the turn passes over to silly bot
function sillyBotsTurn(randomNumber, inputNumber){
    
    let sillyBotAnswer = Math.floor(1 + Math.random() * 10);
    sillyBotArray.push(sillyBotAnswer);
    
    setTimeout(presentSillyGuess, 1000);
    setTimeout(checkIfSillyWinOrLoose, 1000, sillyBotAnswer, randomNumber, inputNumber);
}

// function that checks bots answer and clears the list if bot win
function checkIfSillyWinOrLoose(sillyBotAnswer, randomNumber, inputNumber){
    let presentBotText = document.getElementById("presentBotText");
    
    if(randomNumber === inputNumber){
        // this doesnt work sadly....
        console.log("heh")
        presentBotText.innerHTML = "Silly Lost"
        ul.innerText = "";
    } if(sillyBotAnswer > randomNumber) {
        presentBotText.innerHTML = "Lower";

    } if(sillyBotAnswer < randomNumber){
        presentBotText.innerHTML = "higher";

    } if(sillyBotAnswer === randomNumber){
        presentBotText.innerHTML = "Sillybot Wins"
        console.log("bot won!! Silly guessed " + randomNumber)
        ul.innerText = "";
        botWin = true;
        displayLose()
    }
}
//presents list item of sillybot guess
function presentSillyGuess(){
    for (let i=0; i < sillyBotArray.length; i++){
        // create list item
        let li = document.createElement("li");
        // set its content
        let botAnswer = document.createTextNode(sillyBotArray[i])
        li.appendChild(botAnswer);
        // adds it to the  list
        document.getElementById("sillyBotUl").appendChild(li);
        sillyBotArray.pop();
    }


}

// SILLY BOT CODE ABOVE / / / / / / / / 

// DUMB BOT BELOW / / / / / /








// DUMB BOT ABOVE / / / / / /

// checks wich bot is selected to start game with selected bots
function botSelected(){
    let sillyBot = document.getElementById("sillyBot");
    if(!isSillySelected){
        sillyBot.classList.add("hide");
    } if(isSillySelected){
        sillyBot.classList.add("show");
    }

}