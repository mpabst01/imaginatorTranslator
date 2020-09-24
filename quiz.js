// Gathering HTML elements for manipulation
var quizMain = document.getElementById("quiz");
var questionsEl = document.getElementById("questions");
var startQuizDiv = document.getElementById("startpage");
var startQuizButton = document.getElementById("startbtn");
var buttonA = document.getElementById("a");
var buttonB = document.getElementById("b");
var buttonC = document.getElementById("c");
var buttonD = document.getElementById("d");
var highScoreCon = document.getElementById("highscoreContainer");
var highScoreDiv = document.getElementById("high-scorePage");
var highScoreInitials = document.getElementById("initials");
var highScoreDisplayName = document.getElementById("highscore-initials");
var endGameButtons = document.getElementById("endGameButtons");
var submitScoreButton = document.getElementById("submitScore");
var highScoreDisplayScore = document.getElementById("highscore-score");
var resultsEl = document.getElementById("result");
var finalScoreEl = document.getElementById("finalScore");
var gameOverDiv = document.getElementById("gameover");

// Light-side Quiz question object
var quizLightQuestions = [
  {
    question: "What planet does C-3PO call home?",
    choiceA: "Tattooine",
    choiceB: "Alderaan",
    choiceC: "Bespin",
    choiceD: "Naboo",
    correctAnswer: "b",
    // https://swapi.dev/api/planets/1/
    // https://swapi.dev/api/people/2/
  },
  {
    question: "When was Obi-Wan Kenobi born?",
    choiceA: "57BBY",
    choiceB: "52BBY",
    choiceC: "102BBY",
    choiceD: "54BBY",
    correctAnswer: "a",
    // https://swapi.dev/api/people/10/
  },
  {
    question: "What planet does Yoda seek refuge from the Dark Side?",
    choiceA: "unknown",
    choiceB: "Dagobah",
    choiceC: "Yavin IV",
    choiceD: "Kamino",
    correctAnswer: "b",
    // https://swapi.dev/api/planets/5/
    // https://swapi.dev/api/people/20/
  },
  {
    question: "What color are Lando Calrissian's eyes?",
    choiceA: "black",
    choiceB: "hazel",
    choiceC: "brown",
    choiceD: "blue",
    correctAnswer: "c",
    // https://swapi.dev/api/people/25/
  },
  {
    question: "Who is Bail Prestor Organa?",
    choiceA: "Luke's stepfather",
    choiceB: "Han Solo's father",
    choiceC: "A rebel fighter",
    choiceD: "Leia's stepfather",
    correctAnswer: "d",
    // https://swapi.dev/api/people/68/
  },
  {
    question: "What language does Chewbacca speak?",
    choiceA: "Toydarian",
    choiceB: "Neimodian",
    choiceC: "Shyriiwook",
    choiceD: "Huttese",
    correctAnswer: "c",
    // https://swapi.dev/api/species/3/
  },
  {
    question: "Who piloted the Millenium Falcon?",
    choiceA: "Rey",
    choiceB: "Lando Calrissian",
    choiceC: "Han Solo",
    choiceD: "All of the above",
    correctAnswer: "d",
    // https://swapi.dev/api/transport/10/
  },
];
// Dark-side Quiz question object
var quizDarkQuestions = [
  {
    question: "Where does Wilhuff Tarkin call home?",
    choiceA: "Bespin",
    choiceB: "Eriadu",
    choiceC: "Coruscant",
    choiceD: "Mustafar",
    correctAnswer: "b",
    // https://swapi.dev/api/planets/21/
  },
  {
    question: "When was Darth Vader born?",
    choiceA: "41.9BBY",
    choiceB: "64BBY",
    choiceC: "200BBY",
    choiceD: "54BBY",
    correctAnswer: "a",
    // https://swapi.dev/api/people/10/
  },
  {
    question: "What planet does Anakin Skywalker seek duel with Obi-Wan Kenobi?",
    choiceA: "unknown",
    choiceB: "Mustafar",
    choiceC: "The Death Star",
    choiceD: "Polis Massa",
    correctAnswer: "b",
    // https://swapi.dev/api/planets/13/
   
  },
  {
    question: "What color are Darth Maul's eyes?",
    choiceA: "black",
    choiceB: "brown",
    choiceC: "yellow",
    choiceD: "blue",
    correctAnswer: "c",
    // https://swapi.dev/api/people/44/
  },
  {
    question: "When was General Grievous born?",
    choiceA: "200BBY",
    choiceB: "82BBY",
    choiceC: "41BBY",
    choiceD: "unknown",
    correctAnswer: "d",
    // https://swapi.dev/api/people/79/
  },
  {
    question: "How tall is Palpatine?",
    choiceA: "160",
    choiceB: "150",
    choiceC: "170",
    choiceD: "180",
    correctAnswer: "c",
    // https://swapi.dev/api/species/21/
  },
  {
    question: "How long is the Death Star?",
    choiceA: "300",
    choiceB: "19,000",
    choiceC: "1,600",
    choiceD: "120,000",
    correctAnswer: "d",
    // https://swapi.dev/api/transport/9/
  },
];
// Other global variables
var finalQuestionIndex = quizQuestions.length;
var currentQuestionIndex = 0;
var timeLeft = 60;
var timerInterval;
var score = 0;
var correct;

// This function cycles through the object array containing the quiz questions to generate the questions and answers.
function generateQuizQuestion() {
  gameOverDiv.style.display = "none";
  if (currentQuestionIndex === finalQuestionIndex) {
    return showScore();
  }
  var currentQuestion = quizQuestions[currentQuestionIndex];
  questionsEl.innerHTML = "<p>" + currentQuestion.question + "</p>";
  buttonA.innerHTML = currentQuestion.choiceA;
  buttonB.innerHTML = currentQuestion.choiceB;
  buttonC.innerHTML = currentQuestion.choiceC;
  buttonD.innerHTML = currentQuestion.choiceD;
}

// Start Quiz function starts the TimeRanges, hides the start button, and displays the first quiz question.
function startQuiz() {
  gameOverDiv.style.display = "none";
  startQuizDiv.style.display = "none";
  generateQuizQuestion();

  //Timer
  timerInterval = setInterval(function () {
    timeLeft--;
    timerEl.textContent = "Time left: " + timeLeft;

    if (timeLeft === 0) {
      clearInterval(timerInterval);
      showScore();
    }
  }, 1000);
  quizMain.style.display = "block";
}
// This function is the end page screen that displays your score after either completeing the quiz or upon timer run out
function showScore() {
  quizMain.style.display = "none";
  gameOverDiv.style.display = "flex";
  clearInterval(timerInterval);
  highScoreInitials.value = "";
  finalScoreEl.innerHTML =
    "You got " + score + " out of " + quizQuestions.length + " correct!";
}

// On click of the submit button, we run the function highscore that saves and stringifies the array of high scores already saved in local stoage
// as well as pushing the new user name and score into the array we are saving in local storage. Then it runs the function to show high scores.
submitScoreButton.addEventListener("click", function highscore() {
  if (highScoreInitials.value === "") {
    alert("Initials cannot be blank");
    return false;
  } else {
    var savedHighscores =
      JSON.parse(localStorage.getItem("savedHighscores")) || [];
    var currentUser = highScoreInitials.value.trim();
    var currentHighscore = {
      name: currentUser,
      score: score,
    };

    gameOverDiv.style.display = "none";
    highScoreCon.style.display = "flex";
    highScoreDiv.style.display = "block";
    endGameButtons.style.display = "flex";

    savedHighscores.push(currentHighscore);
    localStorage.setItem("savedHighscores", JSON.stringify(savedHighscores));
    generateHighscores();
  }
});

// This function clears the list for the high scores and generates a new high score list from local storage
function generateHighscores() {
  highScoreDisplayName.innerHTML = "";
  highScoreDisplayScore.innerHTML = "";
  var highscores = JSON.parse(localStorage.getItem("savedHighscores")) || [];
  for (i = 0; i < highscores.length; i++) {
    var newNameSpan = document.createElement("li");
    var newScoreSpan = document.createElement("li");
    newNameSpan.textContent = highscores[i].name;
    newScoreSpan.textContent = highscores[i].score;
    highScoreDisplayName.appendChild(newNameSpan);
    highScoreDisplayScore.appendChild(newScoreSpan);
  }
}

// This function displays the high scores page while hiding all of the other pages from
function showHighscore() {
  startQuizDiv.style.display = "none";
  gameOverDiv.style.display = "none";
  highScoreCon.style.display = "flex";
  highScoreDiv.style.display = "block";
  endGameButtons.style.display = "flex";

  generateHighscores();
}

// This function clears the local storage of the high scores as well as clearing the text from the high score board
function clearScore() {
  window.localStorage.clear();
  highScoreDisplayName.textContent = "";
  highScoreDisplayScore.textContent = "";
}

// This function sets all the variables back to their original values and shows the home page to enable replay of the quiz
function replayQuiz() {
  highScoreCon.style.display = "none";
  gameOverDiv.style.display = "none";
  startQuizDiv.style.display = "flex";
  timeLeft = 76;
  score = 0;
  currentQuestionIndex = 0;
}

// This function checks the response to each answer
function checkAnswer(answer) {
  correct = quizQuestions[currentQuestionIndex].correctAnswer;

  if (answer === correct && currentQuestionIndex !== finalQuestionIndex) {
    score++;
    alert("That is Correct!");
    currentQuestionIndex++;
    generateQuizQuestion();
    //display in the results div that the answer is correct.
  } else if (
    answer !== correct &&
    currentQuestionIndex !== finalQuestionIndex
  ) {
    alert("That is not correct.");
    currentQuestionIndex++;
    generateQuizQuestion();
    //display in the results div that the answer is wrong.
  } else {
    showScore();
  }
}

// This button starts the quiz!
startQuizButton.addEventListener("click", startQuiz);
