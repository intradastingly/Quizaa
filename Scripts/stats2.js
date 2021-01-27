let sillyBotGuesses = 0;
let dumbBotGuesses = 0;
let hardcoreBotGuesses = 0;

window.addEventListener("load", presentTableStats)

function presentTableStats() {
    if (document.getElementById("stats-table")) {
        presentSillyBotStats();
        presentDumbBotStats();
        presentHardcoreBotStats();
        presentPlayerStats();
    }
}

function presentSillyBotStats() {
    const sillyRow = document.getElementById("silly-row")
    const sillyGuesses = JSON.parse(localStorage.getItem("sillyGuesses"))
    const sillyAnswers = JSON.parse(localStorage.getItem("sillyAnswers"))

    sillyAverageGuesses = calculateAverage(sillyGuesses)
    sillyAverageAnswers = calculateAverage(sillyAnswers)


    const sillyGuessesTd = document.createElement("td")
    sillyGuessesTd.innerHTML = sillyAverageGuesses

    const sillyAnswersTd = document.createElement("td")
    sillyAnswersTd.innerHTML = sillyAverageAnswers    
    
    sillyRow.append(sillyGuessesTd, sillyAnswersTd)
}

function presentDumbBotStats() {
    const dumbRow = document.getElementById("dumb-row")
    const dumbGuesses = JSON.parse(localStorage.getItem("dumbGuesses"))
    const dumbAnswers = JSON.parse(localStorage.getItem("dumbAnswers"))

    dumbAverageGuesses = calculateAverage(dumbGuesses)
    dumbAverageAnswers = calculateAverage(dumbAnswers)

    const dumbGuessesTd = document.createElement("td")
    dumbGuessesTd.innerHTML = dumbAverageGuesses

    const dumbAnswersTd = document.createElement("td")
    dumbAnswersTd.innerHTML = dumbAverageAnswers    
    
    dumbRow.append(dumbGuessesTd, dumbAnswersTd)
}

function presentHardcoreBotStats() {
    const hardcoreRow = document.getElementById("hardcore-row")
    const hardcoreGuesses = JSON.parse(localStorage.getItem("hardcoreGuesses"))
    const hardcoreAnswers = JSON.parse(localStorage.getItem("hardcoreAnswers"))

    hardcoreAverageGuesses = calculateAverage(hardcoreGuesses)
    hardcoreAverageAnswers = calculateAverage(hardcoreAnswers)

    const hardcoreGuessesTd = document.createElement("td")
    hardcoreGuessesTd.innerHTML = hardcoreAverageGuesses

    const hardcoreAnswersTd = document.createElement("td")
    hardcoreAnswersTd.innerHTML = hardcoreAverageAnswers    
    
    hardcoreRow.append(hardcoreGuessesTd, hardcoreAnswersTd)
}

function presentPlayerStats() {
    const playerRow = document.getElementById("player-row")

    const playerUsername = JSON.parse(localStorage.getItem("user")).username
    const playerGuesses = JSON.parse(localStorage.getItem("highscore"))
    const playerAnswers = JSON.parse(localStorage.getItem("playerAnswers")) 

    playerAverageGuesses = calculateAverage(playerGuesses)
    playerAverageAnswers = calculateAverage(playerAnswers)

    const playerUsernameTd = document.createElement("td")
    playerUsernameTd.innerHTML = playerUsername

    const playerGuessesTd = document.createElement("td")
    playerGuessesTd.innerHTML = hardcoreAverageGuesses

    const playerAnswersTd = document.createElement("td")
    playerAnswersTd.innerHTML = playerAverageAnswers

    playerRow.append(playerUsernameTd, playerGuessesTd, playerAnswersTd)
}

function calculateAverage(array) {
    if (array) {
        let value = 0;
        for (inter in array) {
            value += array[inter]
        }
        const average = Math.round(value / array.length)
        return average;
    } else {
        return "undefined"
    }
}

function saveSillyBotAnswers(answer) {
    const sillyAnswers = JSON.parse(localStorage.getItem("sillyAnswers")) || [];
    sillyAnswers.push(answer)
    saveToLocalStorage("sillyAnswers", sillyAnswers)
}

function saveSillyBotGuesses() {
    const sillyGuesses = JSON.parse(localStorage.getItem("sillyGuesses")) || [];
    sillyGuesses.push(sillyBotGuesses)
    saveToLocalStorage("sillyGuesses", sillyGuesses)
}

function saveDumbBotAnswers(answer) {
    const dumbAnswers = JSON.parse(localStorage.getItem("dumbAnswers")) || [];
    dumbAnswers.push(answer)
    saveToLocalStorage("dumbAnswers", dumbAnswers)
}

function saveDumbBotGuesses() {
    const dumbGuesses = JSON.parse(localStorage.getItem("dumbGuesses")) || [];
    dumbGuesses.push(dumbBotGuesses)
    saveToLocalStorage("dumbGuesses", dumbGuesses)
}

function saveHardcoreBotAnswers(answer) {
    const hardcoreAnswers = JSON.parse(localStorage.getItem("hardcoreAnswers")) || [];
    hardcoreAnswers.push(answer)
    saveToLocalStorage("hardcoreAnswers", hardcoreAnswers)
}

function saveHardcoreBotGuesses() {
    const hardcoreGuesses = JSON.parse(localStorage.getItem("hardcoreGuesses")) || [];
    hardcoreGuesses.push(hardcoreBotGuesses)
    saveToLocalStorage("hardcoreGuesses", hardcoreGuesses)
}

function savePlayerAnswers(answer) {
    const playerAnswers = JSON.parse(localStorage.getItem("playerAnswers")) || [];
    playerAnswers.push(answer)
    saveToLocalStorage("playerAnswers", playerAnswers)
}

function saveToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}