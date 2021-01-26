
function displayWin(){
    let hideGame = document.getElementById('userBox')
    let bot= document.getElementById('sillyBot');
    let win= document.getElementById('you-won');
    let again = document.getElementById('againW');
    let backToMain = document.getElementById('boredW');
    let score = document.getElementById('score');
    hideGame.style.display = "none";
    bot.style.display = "none";
    win.style.display = "flex";
    score.innerHTML = `Guesses: ${playerGuesses}`;
    again.addEventListener('click', () => {location.reload()} );
    backToMain.addEventListener('click', () => {location.href = "./menu.html";} );

    //hides continue btn
    let continueBtn = document.getElementById("continue-game-btn");
    continueBtn.classList.remove("show");
    continueBtn.classList.add("hide");

    hideBots()
}


function displayLose(){
    let hideGame = document.getElementById('userBox')
    let bot= document.getElementById('sillyBot');
    let lose= document.getElementById('you-lose');
    let again = document.getElementById('againL');
    let backToMain = document.getElementById('boredL');
    hideGame.style.display = "none";
    bot.style.display = "none";
    lose.style.display = "flex";
    again.addEventListener('click', () => {location.reload()} );
    backToMain.addEventListener('click', () => {location.href = "./menu.html";} );


    //hides continue btn
    let continueBtn = document.getElementById("continue-game-btn");
    continueBtn.classList.remove("show");
    continueBtn.classList.add("hide");

    hideBots()
}