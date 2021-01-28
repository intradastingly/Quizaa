// global variables
let sillyBotArray = [];
let dumbBotArray = [];
let hardcoreBotArray = [];
let botWin = false;

// boolean to change in menu when how many bots u want to
// turn to true on wich bot u want to play against
let isSillySelected = false;
let isDumbSelected = false;
let isHardcoreSelected = false;

const playersSelected = JSON.parse(localStorage.getItem("chosenPlayers"));

for (const player of playersSelected) {
  if (player === "dumb-bot") {
    isDumbSelected = true;
  }
  if (player === "hardcore-bot") {
    isHardcoreSelected = true;
  }
  if (player === "silly-bot") {
    isSillySelected = true;
  }
}
