var gamePage = document.querySelector(".go-button");
var highScores = document.querySelector(".High-Scores");


function goToGamePage() {
    window.location.assign("../gamepage.html");
}
gamePage.addEventListener("click", function() {
    goToGamePage();
    });
    
function goToHighScorePage() {
    window.location.assign("../highscores.html");
}

highScores.addEventListener("click", function() {
    goToHighScorePage();
    });
