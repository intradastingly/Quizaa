// SILLY BOT CODE BELOW /  / / / / / / / / /

// runs after player have pressed submit so the turn passes over to silly bot
function sillyBotsTurn(randomNumber, inputNumber){
    
    let sillyBotAnswer = Math.floor(1 + Math.random() * 10);
    //  let sillyBotAnswer = randomNumber;
    sillyBotArray.push(sillyBotAnswer);
    
    setTimeout(presentSillyGuess, 5000);
    setTimeout(checkIfSillyWinOrLoose,5000 , sillyBotAnswer, randomNumber, inputNumber);
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
        setTimeout(() => {
            displayLose()
        }, 3000);
    }
}
//presents list item of sillybot guess
function presentSillyGuess() {
  for (let i = 0; i < sillyBotArray.length; i++) {
    // create list item
    let li = document.createElement("li");
    // set its content
    let botAnswer = document.createTextNode(sillyBotArray[i]);
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
    
    setTimeout(presentDumbGuess, 6000);
    setTimeout(checkIfDumbWinOrLoose, 6000, dumbBotAnswer, randomNumber);
}
// function that checks bots answer and clears the list if bot win
function checkIfDumbWinOrLoose(dumbBotAnswer, randomNumber){
    let presentDumbText = document.getElementById("presentDumbText");
    
    if(dumbBotAnswer > randomNumber) {
        presentDumbText.innerHTML = "Lower";

    } if(dumbBotAnswer < randomNumber){
        presentDumbText.innerHTML = "Higher";

    } if(dumbBotAnswer === randomNumber){
        presentDumbText.innerHTML = "Dumb Bot Wins"
        document.getElementById("dumbUl").innerText = "Dumb guessed " + randomNumber;
        botWin = true;
        setTimeout(() => {
            displayLose()
        }, 3000);
        
    }
}

//presents list item of dumbbot guess
function presentDumbGuess() {
  for (let i = 0; i < dumbBotArray.length; i++) {
    // create list item
    let li = document.createElement("li");
    // set its content
    let botAnswer = document.createTextNode(dumbBotArray[i]);
    li.appendChild(botAnswer);
    // adds it to the  list
    document.getElementById("dumbUl").appendChild(li);
    dumbBotArray.pop();
  }
}

// DUMB BOT CODE ABOVE / / / / / /

// HARD CORE BOT CODE BELOW /  / / / / / / / / /

function hardcoreBotsTurn(randomNumber, inputNumber) {
  let hardcoreBotAnswer;
  if (inputNumber < randomNumber) {
    hardcoreBotAnswer = Math.round((inputNumber + randomNumber) / 2);
  }
  if (inputNumber > randomNumber) {
    hardcoreBotAnswer = Math.round((inputNumber - randomNumber) / 2);
  }
  hardcoreBotArray.push(hardcoreBotAnswer);

  setTimeout(presentHardcoreGuess, 7000);
  setTimeout(checkIfHardcoreWinOrLoose, 7000, hardcoreBotAnswer, randomNumber);
}

// function that checks bots answer and clears the list if bot win
function checkIfHardcoreWinOrLoose(hardcoreBotAnswer, randomNumber) {
  let presentHardcoreText = document.getElementById("presentHardcoreText");

  if (hardcoreBotAnswer > randomNumber) {
    presentHardcoreText.innerHTML = "Lower";
  }
  if (hardcoreBotAnswer < randomNumber) {
    presentHardcoreText.innerHTML = "higher";
  }
  if (hardcoreBotAnswer === randomNumber) {
    presentHardcoreText.innerHTML = "Hardcore bot Wins";
    document.getElementById("hardcoreBotUl").innerText =
      "Hardcore guessed " + randomNumber;
    botWin = true;
    setTimeout(() => {
      displayLose();
    }, 2000);
  }
}
//presents list item of hardcorebot guess
function presentHardcoreGuess() {
  for (let i = 0; i < hardcoreBotArray.length; i++) {
    // create list item
    let li = document.createElement("li");
    // set its content
    let botAnswer = document.createTextNode(hardcoreBotArray[i]);
    li.appendChild(botAnswer);
    // adds it to the  list
    document.getElementById("hardcoreBotUl").appendChild(li);
    hardcoreBotArray.pop();
  }
}

// HARD CORE BOT CODE ABOVE / / / / / / / /

// checks wich bot is selected to start game with selected bots
function botSelected() {
  let sillyBot = document.getElementById("sillyBot");
  if (!isSillySelected) {
    sillyBot.classList.add("hide");
  }
  if (isSillySelected) {
    sillyBot.classList.add("show");
  }

  let dumbBot = document.getElementById("dumbBot");
  if (!isDumbSelected) {
    dumbBot.classList.add("hide");
  }
  if (isDumbSelected) {
    dumbBot.classList.add("show");
  }

  let hardcoreBot = document.getElementById("hardcoreBot");
  if (!isHardcoreSelected) {
    hardcoreBot.classList.add("hide");
  }
  if (isHardcoreSelected) {
    hardcoreBot.classList.add("show");
  }
}
