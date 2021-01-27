window.addEventListener("load", presentHighscore);

/**
 * Sorts the highscore list saved in localstorage and presents the
 * three highest scores on the highscore page
 */
function presentHighscore() {
    const highscore = JSON.parse(localStorage.getItem("highscore")).guesses

    // Sorts the list from smallest to largest integer
    highscore.sort(function(a, b){
        return a - b;
    });

    if (highscore.length > 3) {
        // Removes the last integer until list has length of 3
        while (highscore.length > 3) {
          highscore.pop();
        }
    }
    
    for (score of highscore) {
        const li = document.createElement("li")
        li.innerHTML = JSON.parse(localStorage.getItem("user")).username + " " + score + " guesses"
        li.classList.add("highscore-list-item")

        const ul = document.getElementById("highscore-list")
        ul.append(li)
    }
    
}
