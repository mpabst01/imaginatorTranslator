$(document).ready(function (event) {
  // Quiz question object
  var questionsEl = document.getElementById("questions");
var startQuizDiv = document.getElementById("startpage");
var startQuizButton = document.getElementById("startbtn");
  // var correctAnswer = [];
  var triviaUrl = "https://swapi.dev/api/";
  var currentLightQuestionIndex = 0;
  var currentDarkQuestionIndex = 0;
  //var urlAttributes = ["people/", "starships/", "species/", "planets/"];

  
// This button starts the quiz!
startQuizButton.addEventListener("click", startQuiz);





function questionClick() {
  console.log(this.value);
  if (
    this.value !== quizLightQuestions[currentLightQuestionIndex].correctAnswer
  ) {
    $(function () {
      $("#myModal").modal();
    });
  }
  currentQuestionIndex++;
  if (currentLightQuestionIndex === quizLightQuestions.length) {
    showScore();
  }
  generateLightQuizQuestion();
}
// This conditional function cycles through the array containing the dark-side quiz questions to generate the q&a and correct/incorrect answers
function generateDarkQuizQuestion() {
  if (currentDarkQuestionIndex === finalDarkQuestionIndex) {
    return showScore();
  }
  var currentDarkQuestion = quizDarkQuestions[currentDarkQuestionIndex];
  questionsEl.innerHTML = "<p>" + currentDarkQuestion.question + "</p>";

  buttonBox.innerHTML = "";
  currentDarkQuestion.answers.forEach(function (answer) {
    var button = document.createElement("button");
    button.setAttribute("class", "answer");
    button.setAttribute("value", answer);
    button.textContent = answer;
    button.onclick = questionClick;
    buttonBox.appendChild(button);
  });
  console.log(currentDarkQuestion);
}
// This function checks the response to each answer
function questionClick() {
  console.log(this.value);
  if (
    this.value !== quizDarkQuestions[currentDarkQuestionIndex].correctAnswer
  ) {
    $(function () {
      $("#myModal").modal();
    });
  }
  currentQuestionIndex++;
  if (currentDarkQuestionIndex === quizDarkQuestions.length) {
    showScore();
  }
  generateDarkQuizQuestion();
}

//add event listener
// startLightSideQuizButton.addEventListener("click", function (event) {
//   window.location.href = "Students.html";
// });
// buttonA.addEventListener("click", function (event) {
//   window.location.href = "Students.html";
// });
// buttonB.addEventListener("click", function (event) {
//   window.location.href = "Students.html";
// });
// buttonC.addEventListener("click", function (event) {
//   window.location.href = "Students.html";
// });
// buttonD.addEventListener("click", function (event) {
//   window.location.href = "Students.html";
// });

// startLightSideQuizButton.addEventListener("click", startQuiz);
}); 
