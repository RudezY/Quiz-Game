var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var highScores = document.querySelector(".High-Score");
var timer;
var timerCount;
var highScores;
const quizContainer = document.getElementsByClassName("Quiz-Area");
const highScoresContainer = document.getElementsByClassName("High-Score");

// questions that will be asked
const myQuestions = [
{ 
    question: "If we declare a variable, let test = 1, then later, reassign, stating test = 2, what will happen?",
    answers: {
        a: "test will equal 1",
        b: "test will equal 2",
        c: "test will return true",
        d: "Javascript will return an error"
    },
    correctAnswer: "b"
},
{
  question: "If we declare a variable, const test = 1, then later, reassign, stating test = 2, what will happen?",
  answers: {
    a: "test will equal 1",
    b: "test will equal 2",
    c: "test will return true",
    d: "Javascript will return an error"
},
correctAnswer: "a"
},
{
    question: "What are the main differences between let and const?",
    answers: {
      a: "let can be reassigned, const cannot be reassigned",
      b: "let cannot be reassigned, const can be reassigned",
      c: "let is functional scope, while const is block scope",
      d: "let is block scope, while const is functional scope"
  },
  correctAnswer: "a"
  },
  {
    question: "The != and !== symbols both work the same for inequality comparisons:",
    answers: {
      a: "true",
      b: "false",

  },
  correctAnswer: "b"
  },
  {
    question: "For strict equality comparisons, we should use:",
    answers: {
      a: "=",
      b: "==",
      c: "===",
  },
  correctAnswer: "c"
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    answers: {
      a: "<scripting>",
      b: "<js>",
      c: "<javascript>",
      d: "<script>"
  },
  correctAnswer: "d"
  },
];

// the initial function called when the page loads
function init() {
    getHighScores();
}
// The begin quiz function when the button is clicked

// the end quiz function is called when either all questions are answered or time runs out

// the SetTimer function starts and stops the timer and will trigger the total score calculation

// the SetHighScore function calculates score when either all questions are answered or time runs out
function setHighScores() {
    startButton.disabled = false;
}

// Creates questions on the screen

// updates the high scores on screen and sends high scores to client storage
function updateHighScores() {

// this function is used by init to grab the high scores from storage

// attach even listener to begin quiz button on click

//call init so it loads when page is opened

// reset button for high scores
function resetQuiz() {
    highScores = 0;
    setHighScores()
}
// event listener for reset button on click
resetButton.addEventListener("click", resetQuiz)


