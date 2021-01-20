

function sillybot(randomNumber){
    let sillyBotArray = [];
    let sillyBotUl = document.getElementById("sillyBotUl");

    let sillyBotLi = document.createElement("li");
    let sillyBotAnswer = Math.floor(Math.random() * 10)
    sillyBotArray.push(sillyBotAnswer);
    
    // let textNode = document.createTextNode(sillyBotAnswer)
    for (let i=0; i < sillyBotArray.length; i++){
        let botAnswer = document.createTextNode(sillyBotArray[i])
        sillyBotLi.appendChild(botAnswer);
        console.log(sillyBotArray)
        sillyBotUl.appendChild(sillyBotLi);
    }
    // let textNode = document.createTextNode(sillyBotAnswer)

    console.log(sillyBotAnswer + " = Silly Bots Guess");
    console.log(randomNumber + " = randomNumber")
}


// create list item
// add list item to array
// show list item 
// present higher or lower or correct
// move to next bot