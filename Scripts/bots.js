

// SILLY BOT CODE BELOW /  / / / / / / / / /

// runs after player have pressed submit so the turn passes over to silly bot
function sillyBotsTurn(randomNumber, inputNumber){
    
    let sillyBotAnswer = Math.floor(1 + Math.random() * 10);
    //  let sillyBotAnswer = randomNumber;
    sillyBotArray.push(sillyBotAnswer);
    
    setTimeout(presentSillyGuess, 3000);
    setTimeout(checkIfSillyWinOrLoose,3000 , sillyBotAnswer, randomNumber, inputNumber);
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
        document.getElementById("sillyBotUl").innerText = "Silly guessed " + randomNumber;
        botWin = true;
        displayLose();
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

// DUMB BOT CODE BELOW / / / / / /

function dumbBotsTurn(randomNumber, inputNumber){
    let dumbBotAnswer;
    if(inputNumber < randomNumber) {
        dumbBotAnswer = inputNumber + 1;
    } if (inputNumber > randomNumber) {
        dumbBotAnswer = inputNumber -1;
    }

    dumbBotArray.push(dumbBotAnswer);
    
    setTimeout(presentDumbGuess, 4000);
    setTimeout(checkIfDumbWinOrLoose, 4000, dumbBotAnswer, randomNumber);
}
// function that checks bots answer and clears the list if bot win
function checkIfDumbWinOrLoose(dumbBotAnswer, randomNumber){
    let presentDumbText = document.getElementById("presentDumbText");
    
    if(dumbBotAnswer > randomNumber) {
        presentDumbText.innerHTML = "Lower";

    } if(dumbBotAnswer < randomNumber){
        presentDumbText.innerHTML = "higher";

    } if(dumbBotAnswer === randomNumber){
        presentDumbText.innerHTML = "Dumb Bot Wins"
        document.getElementById("dumbUl").innerText = "Dumb guessed " + randomNumber;
        botWin = true;
        setTimeout(() => {
            displayLose()
        }, 2000);
        
    }
}

//presents list item of hardcorebot guess
function presentDumbGuess(){
    for (let i=0; i < dumbBotArray.length; i++){
        // create list item
        let li = document.createElement("li");
        // set its content
        let botAnswer = document.createTextNode(dumbBotArray[i])
        li.appendChild(botAnswer);
        // adds it to the  list
        document.getElementById("dumbUl").appendChild(li);
        dumbBotArray.pop();
    }


}



// DUMB BOT CODE ABOVE / / / / / /

// checks wich bot is selected to start game with selected bots
function botSelected(){

    let sillyBot = document.getElementById("sillyBot");
    if(!isSillySelected){
        sillyBot.classList.add("hide");
    } if(isSillySelected){
        sillyBot.classList.add("show");
    }
    
    let dumbBot = document.getElementById("dumbBot");
    if(!isDumbSelected){
        dumbBot .classList.add("hide");
    } if(isDumbSelected) {
        dumbBot .classList.add("show");
    }


}