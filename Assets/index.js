//var getHighScoresList = document.querySelector(".high-score-button");
var highScoreList = document.getElementById("highScoresList");
var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
console.log(highScores);
highScoreList.innerHTML = highScores.map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`
}).join('')

//getHighScoresList.addEventListener("click", printHighScore);

var resetScores = document.querySelector(".reset-button");

function resetHighScores() {
localStorage.clear();
};

resetScores.addEventListener("click", resetHighScores);
