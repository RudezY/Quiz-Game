var gamePage = document.querySelector(".go-button");
//var highScores = document.querySelector(".High-Scores");
const highScoresList = document.getElementById("highScores");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
console.log(highScores);



highScoresList.innerHTML = highScores

highScores.map( score => {
    return `<li class="high-score-list">${score.name} - ${score.score}</li>`;
})
.join("");


function goToGamePage() {
    window.location.assign("../gamepage.html");
}
gamePage.addEventListener("click", function() {
    goToGamePage();
    });
    
