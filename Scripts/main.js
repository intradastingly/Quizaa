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

window.addEventListener("load", indexEventListeners);

function indexEventListeners() {
  setTimeout(function () {
    typeSignature(0, "Are you ready?");
  }, 750);

  setInterval(blinkCursor, 350);
}

/** Toggle underscore in signature from visible to hidden when used in an interval */
function blinkCursor() {
  const cursor = document.getElementById("cursor");
  //let visibility = cursor.style.visibility || "visible";
  //cursor.style.visibility = visibility === "hidden" ? "visible" : "hidden";
}

/**
 * Recursive function used to imitate a typewriter for speech bubble
 * @param {Number} i Number used as an index for recursions condition
 * @param {String} sentence Name to typewrite
 */
function typeSignature(i, sentence) {
  if (i < sentence.length) {
    //document.getElementById("readySentence").innerHTML += sentence.charAt(i);
    i++;
    setTimeout(function () {
      typeSignature(i, sentence);
    }, 200);
  }
}
