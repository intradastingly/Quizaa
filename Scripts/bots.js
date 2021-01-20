
let sillyBotArray = [];
let ul = document.getElementById("sillyBotUl");

// runs after player have pressed submit so the turn passes over to silly bot
function sillyBotsTurn(randomNumber){
    
    let sillyBotAnswer = Math.floor(Math.random() * 10);
    sillyBotArray.push(sillyBotAnswer);
    
    
    setTimeout(presentBotGuess, 1000);
    setTimeout(checkIfBotWinOrLoose, 1000, sillyBotAnswer, randomNumber);
}

function checkIfBotWinOrLoose(sillyBotAnswer, randomNumber){
    let presentBotText = document.getElementById("presentBotText");
    if(sillyBotAnswer > randomNumber) {
        presentBotText.innerHTML = "Lower"
    } if(sillyBotAnswer < randomNumber){
        presentBotText.innerHTML = "higher";
    }if(sillyBotAnswer === randomNumber){
        presentBotText.innerHTML = "Sillybot Wins"
        console.log("bot won")
        ul.innerText = "";
    }
    
}
//presents list item of sillybot guess
function presentBotGuess(){
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

