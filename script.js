$(document).ready(function(event) {
// Quiz question object
var questionsLightElement = document.getElementById("lightQuestions");
var questionsDarkElement = document.getElementById("darkQuestions");
var startLightSideQuizButton = document.getElementById("#startLightSideQuiz");
var startDarkSideQuizButton = document.getElementById("#startDarkSideQuiz");
// var correctAnswer = [];
var triviaUrl = "https://swapi.dev/api/";
var currentLightQuestionIndex = 0;
var currentDarkQuestionIndex = 0;
//var urlAttributes = ["people/", "starships/", "species/", "planets/"];
var quizLightQuestions = [
  {
    question: "What planet does C-3PO call home?",
    answers: ["A. Tattooine", "B. Alderaan", "C: Bespin", "D. Naboo"],
    correctAnswer: "A. Tattooine",
    triviaURL: "https://swapi.dev/api/planets/1/",
  },
  {
    question: "When was Obi-Wan Kenobi born?",
    answers: ["A. 57BBY", "B. 52BBY", "C. 102BBY", "D. 204BBY"],
    correctAnswer: "A. 57BBY",
    triviaURL: "https://swapi.dev/api/people/10/",
  },
  {
    question: "What planet does Yoda seek refuge from the Dark Side?",
    answers: ["A. unknown", "B. Dagobah", "C. Yavin IV", "D. Kamino"],
    correctAnswer: "B. Dagobah",
    triviaURL: "https://swapi.dev/api/planets/5/",
  },
  {
    question: "What color are Lando Calrissian's eyes?",
    answers: ["A. black", "B. hazel", "C. brown", "D. blue"],
    correctAnswer: "C. brown",
    triviaURL: "https://swapi.dev/api/people/25/",
  },
  {
    //q4
    question: "Who is Bail Prestor Organa?",
    answers: [
      "A. Luke's stepfather",
      "B. Han Solo's father",
      "C. A rebel fighter",
      "D. Leia's stepfather",
    ],
    correctAnswer: "D. Leia's stepfather",
    triviaURL: "https://swapi.dev/api/people/68/",
  },
  {
    //q5
    question: "What language does Chewbacca speak?",
    answers: ["A. Toydarian", "B. Neimodian", "C. Shyriiwook", "D. Huttese"],
    correctAnswer: "C. Shyriiwook",
    triviaURL: "https://swapi.dev/api/species/3/",
  },
  {
    //q6
    question: "Who piloted the Millennium Falcon?",
    answers: [
      "A. Rey",
      "B. Lando Calrissian",
      "C. Han Solo",
      "D. All of the above",
    ],
    correctAnswer: "D. All of the above",
    triviaURL: "https://swapi.dev/api/starships/10/",
  },
];
var quizDarkQuestions = [
  {
    question: "Where does Wilhuff Tarkin call home?",
    answers: ["A. Eriadu", "B. Bespin", "C. Coruscant", "D. Mustafar"],
    correctAnswer: "A. Eriadu",
    triviaURL: "https://swapi.dev/api/planets/21/",
  },
  {
    question: "When was Darth Vader born?",
    answers: ["A. 41.9BBY", "B. 64BBY", "C. 200BBY", "D. 54BBY"],
    correctAnswer: "A. 41.9BBY",
    triviaURL: "https://swapi.dev/api/people/10/",
  },
  {
    question:
      "What planet does Anakin Skywalker seek duel with Obi-Wan Kenobi?",
    answers: [
      "A. unknown",
      "B. Mustafar",
      "C. The Death Star",
      "D. Polis Massa",
    ],
    correctAnswer: "B. Mustafar",
    triviaURL: "https://swapi.dev/api/planets/13/",
  },
  {
    question: "What color are Darth Maul's eyes?",
    answers: ["A. black", "B. brown", "C. yellow", "D. blue"],
    correctAnswer: "C. yellow",
    triviaURL: "https://swapi.dev/api/people/44/",
  },
  {
    question: "When was General Grievous born?",
    answers: ["A. 200BBY", "B. 82BBY", "C. 41BBY", "D. unknown"],
    correctAnswer: "D. unknown",
    triviaURL: "https://swapi.dev/api/people/79/",
  },
  {
    question: "How tall is Palpatine?",
    answers: ["A. 160cm", "B. 150cm", "C. 170cm", "D. 180cm"],
    correctAnswer: "C. 170cm",
    triviaURL: "https://swapi.dev/api/species/21/",
  },
  {
    question:
      "What is the name of the shape shifting assassin hired to kill Padme Amidala?",
    answers: [
      "A. Lama Su",
      "B. Zam Wesell",
      "C. Taun We",
      "D. Dexter Jettster",
      "D. Dexter Jettster",
    ],
    triviaURL: "https://swapi.dev/api/people/71/",
  },
];
// global variables
var finalLightQuestionIndex = quizLightQuestions.length;
var finalDarkQuestionIndex = quizDarkQuestions.length;

// This conditional function cycles through the array containing the light-side quiz questions to generate the q&a and correct/incorrect answers
function generateLightQuizQuestion() {
  if (currentLightQuestionIndex === finalLightQuestionIndex) {
    // return showScore();
  }
  var currentLightQuestion = quizLightQuestions[currentLightQuestionIndex];
  questionsLightElement.innerHTML = "<p>" + currentLightQuestion.question + "</p>";

  buttonBox.innerHTML = "";
  currentLightQuestion.answers.forEach(function (answer) {
    var button = document.createElement("button");
    button.setAttribute("class", "answer");
    button.setAttribute("value", answer);
    button.textContent = answer;
    button.onclick = questionClick;
    buttonBox.appendChild(button);
  });
  console.log(currentLightQuestion);
}
// This function checks the response to each light-side answer
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