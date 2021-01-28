window.addEventListener("load", startTypeWriter);

function startTypeWriter() {
  const indexSentence = "Are you ready?";
  const menuSentence = "Prepare yourself";
  const highScoreSentence = "Praise the champions!";
  const gameSentence = "Better luck next guess";

  if (location.pathname === "/index.html") {
    console.log("test");
    setTimeout(function () {
      typeSignature(0, indexSentence);
    }, 750);
  }
  if (location.pathname === "/menu.html") {
    setTimeout(function () {
      typeSignature(0, menuSentence);
    }, 750);
  }
  if (location.pathname === "/game.html") {
    setTimeout(function () {
      typeSignature(0, gameSentence);
    }, 750);
  }
  if (location.pathname === "/highscore.html") {
    setTimeout(function () {
      typeSignature(0, highScoreSentence);
    }, 750);
  }

  setInterval(blinkCursor, 350);
}

/** Toggle underscore in signature from visible to hidden when used in an interval */
function blinkCursor() {
  const cursor = document.getElementById("cursor");
  let visibility = cursor.style.visibility || "visible";
  cursor.style.visibility = visibility === "hidden" ? "visible" : "hidden";
}

/**
 * Recursive function used to imitate a typewriter for speech bubble
 * @param {Number} i Number used as an index for recursions condition
 * @param {String} sentence Name to typewrite
 */
function typeSignature(i, sentence) {
  if (i < sentence.length) {
    document.getElementById("readySentence").innerHTML += sentence.charAt(i);
    i++;
    setTimeout(function () {
      typeSignature(i, sentence);
    }, 200);
  }
}
