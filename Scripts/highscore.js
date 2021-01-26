window.addEventListener("load", presentHighscore);

/**
 * Sorts the highscore list saved in localstorage and presents the
 * three highest scores on the highscore page
 */
function presentHighscore() {
    const highscore = JSON.parse(localStorage.getItem("highscore")).guesses

    if (highscore.length > 3) {
        // Sorts the list from smallest to largest integer
        highscore.sort(function(a, b){
            return a - b;
        });
        
        // Removes the first integer until list has length of 3
        while (highscore.length > 3) {
          highscore.shift();
        }
    }

    // Beacuse the list is sorted with the largest integer last,
    // the list has to be looped through in reverse order
    for (i = highscore.length - 1; i > -1; i--) {
        const li = document.createElement("li")
        li.innerHTML = JSON.parse(localStorage.getItem("user")).username + " " + highscore[i] + " guesses"
        li.classList.add("highscore-list-item")

        const ul = document.getElementById("highscore-list")
        ul.append(li)
    }
    
}