$(document).ready(function () {
  $("a.light-open").click(function () {
    window.open(this.href);
    return false;
  });
});

$(document).ready(function () {
  $("a.dark-open").click(function () {
    window.open(this.href);
    return false;
  });
});
// globals: questions is an array of questions objects
var currentQuestionIndex = 0;
var questionContainerDiv = $("#question-container");
var scoreEl = $("#score");
var correctAnswer = [];

var myScore = 0;

function showQuestion() {
  //adds questions to html
  var q = questions[currentQuestionIndex];

  // empty the question container div to clear the previous question
  questionContainerDiv.empty();

  questionContainerDiv.append("<h1>Question:</h1>");
  questionContainerDiv.append(
    "<h5 class='w3-padding-32'>" + q.question + "</h5>"
  );

  //adds question's answers as buttons to html page
  questionContainerDiv.append(renderButton(q.choiceA, "choice-a"));
  questionContainerDiv.append(renderButton(q.choiceB, "choice-b"));
  questionContainerDiv.append(renderButton(q.choiceC, "choice-c"));
  questionContainerDiv.append(renderButton(q.choiceD, "choice-d"));

  // nextQDiv.append(nextButton(styleNext));

  // nextButton when the user chooses an answer

  function renderButton(choice, choiceClass) {
    var btnClass =
      "w3-button w3-black w3-padding-large w3-large w3-margin-top q-choice";
    var btn = $("<button>")
      .addClass(btnClass + " " + choiceClass)
      .text(choice);
    btn.val(choice);
    return btn;
  }
}

function renderScore() {
  scoreEl.text("Score: " + myScore);
}

// render the first question
showQuestion();

// display initial score
renderScore();

// when user clicks on an answer
questionContainerDiv.on("click", ".q-choice", function () {
  console.log($(this).val());
  // check if the answer is correct
  var q = questions[currentQuestionIndex];

  // disable question button
  $(".q-choice").attr("disabled", true);
  $(this).addClass("q-choice-active");
  if (q.correctAnswer === $(this).val()) {
    //update score
    myScore++;
    renderScore();
    currentQuestionIndex++;
  } else {
    console.log(myScore);
  }

  fetchTriviaFromSwapi(q.triviaURL);

  // show button to go to the next question
  questionContainerDiv.append(nextButton());

  function nextButton() {
    var classes =
      "w3-button w3-black w3-padding-large w3-large w3-margin-top next-question";
    var nextBtn = $("<button>").addClass(classes);

    // use alternate text when on the final question
    if (currentQuestionIndex === questions.length - 1) {
      nextBtn.text("Finish");
    } else {
      nextBtn.text("Next Question");
    }
    // nextBtn.val(styleNext);
    return nextBtn;
  }
});

// when the user clicks on next question button
$(document).on("click", ".next-question", function () {
  // increment currentQuestionIndex
  currentQuestionIndex += 1;
  // if currentQuestionIndex < questions.length
  if (currentQuestionIndex < questions.length) {
    // call showQuestions
    showQuestion();
  } else {
    // navigate to game-over.html page
    window.location = "game-over.html";
  }
});
