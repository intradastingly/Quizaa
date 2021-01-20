let sillyBotArray = [];

// runs after player have pressed submit so the turn passes over to silly bot
function sillyBotsTurn(randomNumber,inputNumber){
    
    let sillyBotAnswer = Math.floor(Math.random() * 10);
    sillyBotArray.push(sillyBotAnswer);
    
    let ul = document.getElementById("sillyBotUl");
    
    setTimeout(presentBotGuess, 1000, ul);
    setTimeout(checkIfBotWinOrLoose, 1000, sillyBotAnswer, ul);
    // console.log(inputNumber + " = inputnumber")
    // console.log(randomNumber + " = randomNumber")
    // console.log(sillyBotAnswer + " = Silly Bots Guess");
}

function checkIfBotWinOrLoose(sillyBotAnswer, ul){
    let presentBotText = document.getElementById("presentBotText");
    if(sillyBotAnswer > randomNumber) {
        presentBotText.innerHTML = "Lower"
    } if(sillyBotAnswer < randomNumber){
        presentBotText.innerHTML = "higher";
    }if(sillyBotAnswer === randomNumber){
        presentBotText.innerHTML = "Sillybot Wins"
        ul.innerText = "";
    }
    
}
//presents list item of sillybot guess
function presentBotGuess(ul){
    for (let i=0; i < sillyBotArray.length; i++){
        // create list item
        let li = document.createElement("li");
        // set its content
        let botAnswer = document.createTextNode(sillyBotArray[i])
        li.appendChild(botAnswer);
        // adds it to the  list
        ul.appendChild(li);
        sillyBotArray.pop();
    }


}