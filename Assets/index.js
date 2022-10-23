
const highScoreList = document.getElementById("highScores");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];




highScoreList.innerHTML = highScores.map(score => { return `<li class="high-score-list">${score.name} - ${score.score}</li>`;
})
.join("");



