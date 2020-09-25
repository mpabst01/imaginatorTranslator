var questionsEl = document.getElementById("questions");
var startQuizDiv = document.getElementById("startpage");
var startQuizButton = document.getElementById("startbtn");
var buttonA = document.getElementById("a");
var buttonB = document.getElementById("b");
var buttonC = document.getElementById("c");
var buttonD = document.getElementById("d");

function retrieveAns(){
    var correctAnswer = [];
    var queryUrl = "https://swapi.dev/api/";

    function answerCorrect(queryUrl){
        $.ajax({
            method: "GET",
            url: queryUrl,
        }).done(function (data) {

            var people = [];
            var films = [];
            var starships = [];
            var transport = [];
            var species = [];
            var planets = [];
            var correctAnswer = {people: "$("#results").val(JSON.stringify(people, null, 2))", films: $("#results").val(JSON.stringify(films, null, 2)), starships: $("#results").val(JSON.stringify(starships, null, 2)), transport: $("#results").val(JSON.stringify(transport, null, 2)), species: $("#results").val(JSON.stringify(species, null, 2)), planets: $("#results").val(JSON.stringify(planets, null, 2))};
            var quizLightQuestions = [
                {
                    //q0
                  question: "What planet does C-3PO call home?",
                  choiceA: "Tattooine",
                  choiceB: "Alderaan",
                  choiceC: "Bespin",
                  choiceD: "Naboo",
                  correctAnswer["planets"] "b",
                  // https://swapi.dev/api/planets/1/
                },
                {
                    //q1
                  question: "When was Obi-Wan Kenobi born?",
                  choiceA: "57BBY",
                  choiceB: "52BBY",
                  choiceC: "102BBY",
                  choiceD: "Dunedin",
                  correctAnswer[]: "a",
                  // https://swapi.dev/api/people/10/
                },
                {
                    //q2
                  question: "What planet does Yoda seek refuge from the Dark Side?",
                  choiceA: "unknown",
                  choiceB: "Dagobah",
                  choiceC: "Yavin IV",
                  choiceD: "Kamino",
                  correctAnswer: "b",
                  // https://swapi.dev/api/planets/5/
                },
                {
                    //q3
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
            // add people to all people
            // if there is a next, do another request
            if (!data.next) {
            // display all people in the text area
            console.log(correctAnswer);
            $("#results").val(JSON.stringify(correctAnswer, null, 2));
            return;
            }
            answerCorrect(data.next);
        });

    }

    $("#send").on("click", function () {
        answerCorrect(queryUrl);
    });

}





//var urlAdd = ["people/", "films/", "starships/", "transport/", "species/", "planets/"];







//function retrieveAns(){
    
    //if (question[]

    
    
    
    //let queryUrl = i;
    //while (i === (queryUrl)) {
        //text += "The number is " + i;
        //i++;
      //}

 

//}

// This function checks the response to each answer
function checkAnswer(answer) {
    correct = quizQuestions[currentQuestionIndex].correctAnswer;
    if (answer === correct && currentQuestionIndex !== finalQuestionIndex) {
      score++;
      console.log("That is Correct!");
      currentQuestionIndex++;
      generateQuizQuestion();
      //display in the results div that the answer is correct.
    } else if (
      answer !== correct &&
      currentQuestionIndex !== finalQuestionIndex
    ) {
      console.log("That is not correct.");
      currentQuestionIndex++;
      generateQuizQuestion();
      //display in the results div that the answer is wrong.
    } else {
      showScore();
    }
}

// This button starts the quiz!
startQuizButton.addEventListener("click", startQuiz);