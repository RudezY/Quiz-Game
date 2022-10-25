// This sets the const for the username input
const username = document.querySelector('#username');
const saveScore = document.querySelector('#saveScore');
const finalScore = document.querySelector('#finalScore');
const recentScore = localStorage.getItem('recentScore');

//
finalScore.innerText = recentScore;
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
const MAX_HIGH_SCORES = 5;


username.addEventListener('keydown', () => {
saveScore.disabled = !username.value;
});

saveHighScore = e => {

    e.preventDefault();

    const score = {
        score: recentScore,
        name: username.value,
    };
    highScores.push(score);
    highScores.sort((a, b) => {
        return b.score - a.score;
    }) 
    highScores.splice(5);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    
};