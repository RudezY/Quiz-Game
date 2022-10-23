const qs = function (tag){
  return document.getElementById(tag);
};
const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName('choice-text'));
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var currentQuestion = {}
var questionCounter = 0;
var acceptingAnswer = false
var availableQuestions = [];
var timeLeft = 120;
var timerCount;
var score = 0;
const gameContainer = qs("game");


// questions that will be asked
var questions = [
{ 
    question: "If we declare a variable, let test = 1, then later, reassign, stating test = 2, what will happen?",
        choice1: "test will equal 1",
        choice2: "test will equal 2",
        choice3: "test will return true",
        choice4: "Javascript will return an error",
        answer: 2
},
{
  question: "If we declare a variable, const test = 1, then later, reassign, stating test = 2, what will happen?",
  choice1: "test will equal 1",
  choice2: "test will equal 2",
  choice3: "test will return true",
  choice4: "Javascript will return an error",
    answer: 1
},
{
    question: "What are the main differences between let and const?",
    choice1: "let can be reassigned, const cannot be reassigned",
    choice2: "let cannot be reassigned, const can be reassigned",
    choice3: "let is functional scope, while const is block scope",
    choice4: "let is block scope, while const is functional scope",
      answer: 1
  },
  {
    question: "The != and !== symbols both work the same for inequality comparisons:",
    choice1: "true",
    choice2: "false",
    choice3: "null",
    choice4: "NaN",
      answer: 2
  },
  {
    question: "For strict equality comparisons, we should use:",
    choice1: "=",
    choice2: "==",
    choice3: "===",
    choice4: "null",
      answer: 3
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    choice1: "<scripting>",
    choice2: "<js>",
    choice3: "<javascript>",
    choice4: "<script>",
      answer: 4
  },
  {
    question:
      "What is the correct syntax for referring to an external script called 'xxx.js'?",
    choice1: "<script href='xxx.js'>",
    choice2: "<script name='xxx.js'>",
    choice3: "<script src='xxx.js'>",
    choice4: "<script file='xxx.js'>",
    answer: 3
  },
  {
    question: " How do you write 'Hello World' in an alert box?",
    choice1: "msgBox('Hello World');",
    choice2: "alertBox('Hello World');",
    choice3: "msg('Hello World');",
    choice4: "alert('Hello World');",
    answer: 4
  }
];

// constant needed for game
const Correct_Points = 10;
const Max_Questions = 5;



// eventlistener for on click begin quiz button // on click will start timer and game.
startButton.addEventListener("click", startGame);
console.log ("hi");
//startButton.addEventListener("click", startTimer);

function startTimer() {
  timerElement.textContent = timeLeft;
  timer = setInterval(() => {
    timeLeft --;
  timerElement.textContent = timeLeft;
  }, 1000);
}



// nest within timer and start button
function startGame() {
  startButton.classlist.add("hide");
  gameContainer.classlist.remove("hide");
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  
  getNewQuestions();
};
// grabs a random question from the array to ask
getNewQuestions = () => {
  // returns to high score page 
  if(availableQuestions.length === 0 || questionCounter > Max_Questions || timeLeft <= 0) {
    localStorage.setItem('recentScore', score);
    return window.location.assign("../results.html")

  }
  questionCounter ++;
  const questionOrder = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionOrder];
  question.innerText = currentQuestion.question;

  choices.forEach(choice => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });
//removes a question that was already asked
  availableQuestions.splice(questionOrder, 1);

  acceptingAnswer = true;

};
// listens for click to log which "choice" was picked
 choices.forEach(choice => {
 choice.addEventListener("click", e => {
  if (!acceptingAnswer) return;
  acceptingAnswer = false;
  const selectedChoice = e.target;
  const selectedAnswer = selectedChoice.dataset["number"];
 // this applies if selected choice was correct or incorrect.
 var valueToApply = "incorrect";
  if ( selectedAnswer == currentQuestion.answer){
    valueToApply = "correct";
  }else {
  if ( selectedAnswer == currentQuestion.answer){
    valueToApply = "incorrect";
    timeLeft -= 10;
  }
  }
  ;

if (valueToApply === "correct"){
  incrementScore(Correct_Points)
}

  setTimeout( () => {
  getNewQuestions();
  }, 1000);
 });
});

incrementScore = num => {
  score += num;
  console.log(score);
};




// The begin quiz button when the button is clicked

// the end quiz function is called when either all questions are answered or time runs out

// the SetTimer function starts and stops the timer and will trigger the total score calculation

// the SetHighScore function calculates score when either all questions are answered or time runs out

// attach even listener to begin quiz button on click
