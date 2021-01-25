// global variables
let sillyBotArray = [];
let hardCoreBotArray = [];
let botWin = false;

// boolean to change in menu when how many bots u want to
// turn to true on wich bot u want to play against
let isSillySelected = true;
let isHardCoreSelected = true;

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
        document.getElementById("sillyBotUl").innerText = "Silly guessed " + randomNumber;
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

// HARDCORE BOT CODE BELOW / / / / / /

function hardCoreBotsTurn(randomNumber, inputNumber){
    let hardCoreBotAnswer;
    if(inputNumber < randomNumber) {
        hardCoreBotAnswer = inputNumber + 1;
    } if (inputNumber > randomNumber) {
        hardCoreBotAnswer = inputNumber -1;
    }
    // let hardCoreBotAnswer = Math.floor(1 + Math.random() * 10);
    hardCoreBotArray.push(hardCoreBotAnswer);
    
    setTimeout(presentHardCoreGuess, 2000);
    setTimeout(checkIfHardCoreWinOrLoose, 2000, hardCoreBotAnswer, randomNumber, inputNumber);
}
// function that checks bots answer and clears the list if bot win
function checkIfHardCoreWinOrLoose(hardCoreBotAnswer, randomNumber, inputNumber){
    let presentHardCoreText = document.getElementById("presentHardCoreText");
    
    if(hardCoreBotAnswer > randomNumber) {
        presentHardCoreText.innerHTML = "Lower";

    } if(hardCoreBotAnswer < randomNumber){
        presentHardCoreText.innerHTML = "higher";

    } if(hardCoreBotAnswer === randomNumber){
        presentHardCoreText.innerHTML = "HardCore Bot Wins"
        console.log("bot won!! Hardcore guessed " + randomNumber)
        document.getElementById("hardCoreUl").innerText = "Silly guessed " + randomNumber;
        botWin = true;
        displayLose()
    }
}

//presents list item of hardcorebot guess
function presentHardCoreGuess(){
    for (let i=0; i < hardCoreBotArray.length; i++){
        // create list item
        let li = document.createElement("li");
        // set its content
        let botAnswer = document.createTextNode(hardCoreBotArray[i])
        li.appendChild(botAnswer);
        // adds it to the  list
        document.getElementById("hardCoreUl").appendChild(li);
        hardCoreBotArray.pop();
    }


}







// HARDCORE BOT CODE ABOVE / / / / / /

// checks wich bot is selected to start game with selected bots
function botSelected(){
    let sillyBot = document.getElementById("sillyBot");
    let hardCoreBot = document.getElementById("hardCoreBot");
    if(!isSillySelected){
        sillyBot.classList.add("hide");
    } if(isSillySelected){
        sillyBot.classList.add("show");
    }

    if(!isHardCoreSelected){
        hardCoreBot.classList.add("hide");
    } if(isHardCoreSelected) {
        hardCoreBot.classList.add("show");
    }


}