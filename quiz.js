// globals: questions is an array of questions objcets
var currentQuestionIndex = 0;
var questionContainerDiv = $("#question-container");
var correctAnswer = [];

/* 
<h1>Question:</h1>
<h5 class="w3-padding-32">[ Question goes here ]</h5>
        
<button class="w3-button w3-black w3-padding-large w3-large w3-margin-top choice-a">A</button>
<button class="w3-button w3-black w3-padding-large w3-large w3-margin-top choice-b">B</button>
<button class="w3-button w3-black w3-padding-large w3-large w3-margin-top choice-c">C</button>
<button class="w3-button w3-black w3-padding-large w3-large w3-margin-top choice-d">D</button>
<button class="w3-button w3-black w3-padding-large w3-large w3-margin-top next-question">NEXT QUESTION</button>

question: "What planet does C-3PO call home?",
choiceA: "Tattooine",
choiceB: "Alderaan",
choiceC: "Bespin",
choiceD: "Naboo",
correctAnswer: "Tattoine",
triviaURL: "https://swapi.dev/api/planets/1/"
*/
function showQuestion(){
    //adds questions to html
    var q = questions[currentQuestionIndex];
    questionContainerDiv.append("<h1>Question:</h1>");
    questionContainerDiv.append("<h5 class='w3-padding-32'>questions" + q.question + "</h5>");
    
    //adds question's answers as buttons to html page
    var btn = $("<button>").addClass("w3-button w3-black w3-padding-large w3-large w3-margin-top choice-a").text(q.choiceA);
    questionContainerDiv.append(btn);
    btn = $("<button>").addClass("w3-button w3-black w3-padding-large w3-large w3-margin-top choice-b").text(q.choiceB);
    questionContainerDiv.append(btn);
    btn = $("<button>").addClass("w3-button w3-black w3-padding-large w3-large w3-margin-top choice-c").text(q.choiceC);
    questionContainerDiv.append(btn);
    btn = $("<button>").addClass("w3-button w3-black w3-padding-large w3-large w3-margin-top choice-d").text(q.choiceD);
    questionContainerDiv.append(btn);
    

}

// render the first question
showQuestion();
// when user clicks on an answer
// check if the answer is correct
// update the score
// alert trivia url

// when the user clicks on next question button
// increment currentQuestionIndex
// if currentQuestionIndex < questions.length
// call showQuestions
// else
// navigate to game-over.html page

