// globals: questions is an array of questions objcets
var currentQuestionIndex = 0;
var modalFeaturesDiv = $("modal off")
var questionContainerDiv = $("#question-container");
var correctAnswer = [];
var modal = document.getElementById("myModal");
var score;


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
    questionContainerDiv.append("<h5 class='w3-padding-32'>" + q.question + "</h5>");
    
    //adds question's answers as buttons to html page
    questionContainerDiv.append(renderButton(q.choiceA, "choice-a"));
    questionContainerDiv.append(renderButton(q.choiceB, "choice-b"));
    questionContainerDiv.append(renderButton(q.choiceC, "choice-c"));
    questionContainerDiv.append(renderButton(q.choiceD, "choice-d"));

    


    function renderButton(choice, choiceClass){
        var btnClass = "w3-button w3-black w3-padding-large w3-large w3-margin-top q-choice";
        var btn = $("<button>").addClass(btnClass + " " + choiceClass).text(choice);
        btn.val(choice);
        return btn;
    }
}
// render the first question
showQuestion();



function showModalFeatures(){
    modalFeaturesDiv.append("<ul>Trivia from Swapi.api. The answer is...</ul><li>Name:</li><li>Height: cm</li><li>Eye Color:</li><li>Home World:</li><li>Birth Year:</li><button class='close-btn'>Close</button>");
}
showModalFeatures();



// when user clicks on an answer
questionContainerDiv.on("click", ".q-choice", function() {
    console.log($(this).val());
    // check if the answer is correct
    var q = questions[currentQuestionIndex];
    myScore = new component("30px", "Consolas", "black", 280, 40, "text");
    if (q.correctAnswer === $(this.val())) {
        //update score
        score++;
        currentQuestionIndex++;
        //display modal
        
        $(function () {
            const showModal = (ev) => {
                ev.preventDefault();
                let modal = document.querySelector(".modal");
                modal.classList.remove("off");
                modal.classList.add("on");
              };
              const showOverlay = (ev) => {
                ev.preventDefault();
                let overlay = document.querySelector(".overlay");
                overlay.classList.remove("hide");
                overlay.classList.add("show");
                showModal(ev);
              };
              const hideModal = (ev) => {
                  let modal = document.querySelector(".modal");
                  modal.classList.remove ("on");
                  modal. classList.add("off");
              };
              const hideOverlay = (ev) => {
                ev.preventDefault();
                ev.stopPropagation();
                let overlay = document.querySelector(".overlay");
                overlay.classList.remove("show");
                overlay.classList.add("hide");
                hideModal(ev);
              };
              
              const init = (ev)=> {
                document.querySelector("p").addEventListener("click", showOverlay);
              
                document.querySelector(".close-btn").addEventListener("click", hideOverlay);
              };
              
              document.addEventListener("DOMContentLoaded", init);
              

        });

    } else {
        console.log(score)
        // answer is incorrect
        // update the score
        //display modal
        $(function () {
            $("#myModal").modal();
        });
    }

    alert(q.triviaURL)

    // alert trivia url modal stuff
    // q.triviaURL
    // show button to go to the next question
})

// when the user clicks on next question button
// increment currentQuestionIndex
// if currentQuestionIndex < questions.length
// call showQuestions
// else
// navigate to game-over.html page
$(document).ready(function (event) {
    function fetchTriviaFromSwapi(triviaURL) {
      // ajax request with the trivia url
      $.ajax({
        url: q.triviaURL,
        method: "GET",
      }).then(function (fields) {
        console.log(fields);
        localStorage.setItem("swapi", JSON.stringify(fields));
        console.log(fields.name);
        $("#modal-content").empty();
  
        // show the trivia info on the page
        // Get the modal
        var modal = document.getElementById("myModal");
  
        // not sure we need the button
        var btn = document.getElementById("myBtn");
        btn.onclick = function () {
          modal.style.display = "block";
        };
  
        var span = document.getElementsByClassName("close")[0];
        span.onclick = function () {
          modal.style.display = "none";
        };
  
        window.onclick = function (event) {
          if (event.target == modal) {
            modal.style.display = "none";
          }
          var modalHeader = $("<h2>")
            .addClass("modal-header")
            .text("The answer is...");
          console.log(modalHeader);
  
          var name = $("<h3>")
            .addClass("modal-body")
            .text("Name: " + fields.name);
          console.log(name);
  
          var height = $("<h4>")
            .addClass("modal-body")
            .text("Height: " + fields.height + " cm");
          console.log(height);
  
          var eyeColor = $("<h4>")
            .addClass("modal-body")
            .text("Eye Color: " + fields.eye_color);
          console.log(eyeColor);
  
          var homeWorld = $("<h4>")
            .addClass("modal-body")
            .text("Home World: " + fields.homeworld);
          console.log(homeWorld);
  
          var birthYear = $("<h4>")
            .addClass("modal-body")
            .text("Birth Year: " + fields.birth_year);
          console.log(birthYear);
  
          $(".modal").append(
            modalHeader,
            name,
            height,
            eyeColor,
            homeWorld,
            birthYear
          );
        };
      });
    }
    fetchTriviaFromSwapi("https://swapi.dev/api/");
  
    // localStorage.setItem(subject, subject);
    // $(".prev-list").prepend(
    //     "<button class='prev-city mt-1'>" + fields + "</button>"
    //   );
    function openModal() {
      console.log("modal click");
  
      $("#myBtn").click(function () {
        $("#myModal").modal("show");
      });
    }
  });


  //show results at end
  var names = [, , ,];
  var scores = [, , , ];
  var $ = function (id) { return document.getElementById(id); };
  window.onload = function () {
      $("add").onclick = addScore;
      $("display_results").onclick = displayResults;
      $("display_scores").onclick = displayScores;
    };
