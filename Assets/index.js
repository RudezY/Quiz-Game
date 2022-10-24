var getHighScoresList = document.querySelector(".high-score-button");
const highScoreList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

function printHighScore(){
highScoreList = JSON.parse(localStorage.getItem("highScores")) || [];
for (var i = 0; i < highScores.length; i += 1) {
highScoreList.innerHTML = highScores.map(score => { return `<li class="high-score-list">${score.name} - ${score.score}</li>`;
})
.join("");
};
};

getHighScoresList.addEventListener("click", printHighScore);

var resetScores = document.querySelector(".reset-button");

function resetHighScores() {
localStorage.clear();
};

resetScores.addEventListener("click", resetHighScores);
