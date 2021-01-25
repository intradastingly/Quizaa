
function displayWin(){
    let hideGame = document.getElementById('userBox')
    let bot= document.getElementById('sillyBot');
    let win= document.getElementById('you-won');
    hideGame.style.display = "none";
    bot.style.display = "none";
    win.style.display = "flex";
}

function displayLose(){
    let hideGame = document.getElementById('userBox')
    let bot= document.getElementById('sillyBot');
    let lose= document.getElementById('you-lose');
    hideGame.style.display = "none";
    bot.style.display = "none";
    lose.style.display = "flex";
}