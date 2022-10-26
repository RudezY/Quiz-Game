// This sets the const for the username input
const username = document.querySelector('#username');
const saveScore = document.querySelector('#saveScore');
const finalScore = document.querySelector('#finalScore');
const recentScore = localStorage.getItem('recentScore');

//will update the final score h1 with the recent score from the storage
finalScore.innerText = recentScore;
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
const MAX_HIGH_SCORES = 5;

// on keydown this event listener will allow saving of the username value
username.addEventListener('keydown', () => {
saveScore = !username.value;
});

saveHighScore = e => {
//prevent saving the score as default (no input)
    e.preventDefault();
    // this sets the constant for score with the score and username value input
    const score = {
        score: recentScore,
        name: username.value,
    };
    highScores.push(score);
    highScores.sort((a, b) => {
        return b.score - a.score;
    }) 
    highScores.splice(5);
// this sets the high scores into a string and is saved to local storage
    localStorage.setItem('highScores', JSON.stringify(highScores));
    
};