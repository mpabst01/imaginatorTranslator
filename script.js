// Quiz question object




var questionsEl = document.getElementById("questions");
var startQuizDiv = document.getElementById("startpage");
var startQuizButton = document.getElementById("startbtn");
var buttonA = document.getElementById("a");
var buttonB = document.getElementById("b");
var buttonC = document.getElementById("c");
var buttonD = document.getElementById("d");
var correctAnswer = [];
var queryUrl = "https://swapi.dev/api/";
//var thingUrls = ["people/", "films/", "starships/", "transport", "species/", "planets/"];
var quizLightQuestions = [
  {
    question: "What planet does C-3PO call home?",
    choiceA: "Tattooine",
    choiceB: "Alderaan",
    choiceC: "Bespin",
    choiceD: "Naboo",
    correctAnswer: "a",
    // https://swapi.dev/api/planets/1/
  },
  {
    question: "When was Obi-Wan Kenobi born?",
    choiceA: "57BBY",
    choiceB: "52BBY",
    choiceC: "102BBY",
    choiceD: "204BBY",
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
    //q4
    question: "Who is Bail Prestor Organa?",
    choiceA: "Luke's stepfather",
    choiceB: "Han Solo's father",
    choiceC: "A rebel fighter",
    choiceD: "Leia's stepfather",
    correctAnswer: "d",
    // https://swapi.dev/api/people/68/
  },
  {
    //q5
    question: "What language does Chewbacca speak?",
    choiceA: "Toydarian",
    choiceB: "Neimodian",
    choiceC: "Shyriiwook",
    choiceD: "Huttese",
    correctAnswer: "c",
    // https://swapi.dev/api/species/3/
  },
  {
    //q6
    question: "Who piloted the Millenium Falcon?",
    choiceA: "Rey",
    choiceB: "Lando Calrissian",
    choiceC: "Han Solo",
    choiceD: "All of the above",
    correctAnswer: "d",
    // https://swapi.dev/api/transport/10/
  },
];
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
    question:
      "What planet does Anakin Skywalker seek duel with Obi-Wan Kenobi?",
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

  // This conditional function cycles through the array containing the light-side quiz questions to generate the q&a and correct/incorrect answers
  function generateLightQuizQuestion() {
    if (currentLightQuestionIndex === finalLightQuestionIndex) {
      // return showScore();
    }
    var currentLightQuestion = quizLightQuestions[currentLightQuestionIndex];
    questionsLightElement.innerHTML =
      "<p>" + currentLightQuestion.question + "</p>";

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
buttonC.addEventListener("click", function (event) {
  window.location.href = "Students.html";
});
buttonD.addEventListener("click", function (event) {
  window.location.href = "Students.html";
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
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
