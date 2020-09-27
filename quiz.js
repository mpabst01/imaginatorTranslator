
$(document).ready(function(){
    $('a.light-open').click(function(){
        window.open(this.href);
        return false;
    });
});

$(document).ready(function(){
    $('a.dark-open').click(function(){
        window.open(this.href);
        return false;
    });
});



// globals: questions is an array of questions objcets
var currentQuestionIndex = 0;
var questionContainerDiv = $("#question-container");
var scoreEl = $("#score");

// there is no need for a nextQDiv. The DOM should only have one question at a time
// var nextQDiv = $("#nextQ");
var correctAnswer = [];

// Handle the modal as part of another issue. JD
// var modal = document.getElementById("myModal");
var myScore = 0; // I believe the initial score should be set to 0


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

    // empty the question container div to clear the previous question
    questionContainerDiv.empty();

    questionContainerDiv.append("<h1>Question:</h1>");
    questionContainerDiv.append("<h5 class='w3-padding-32'>" + q.question + "</h5>");

    // Next without quotes ("") is telling the JavaScript interpreter to find a
    // variable Next, not the string "Next". JD
    // nextQDiv.append("<h3 class='nextBtn'>" + Next + "</h3>"); 
    // nextQDiv.append("<h3 class='nextBtn'>" + "Next" + "</h3>");
    
    //adds question's answers as buttons to html page
    questionContainerDiv.append(renderButton(q.choiceA, "choice-a"));
    questionContainerDiv.append(renderButton(q.choiceB, "choice-b"));
    questionContainerDiv.append(renderButton(q.choiceC, "choice-c"));
    questionContainerDiv.append(renderButton(q.choiceD, "choice-d"));

    // Once again, I think the quotes for a strong got missed here. Not really sure what is going on.??? JD
    // nextQDiv.append(nextButton(styleNext));

    // Also, not sure where the best place is to show the next question button.
    // For now, rendering it within the question container. Instead, render the
    // nextButton when the user chooses an answer

    function renderButton(choice, choiceClass){
        var btnClass = "w3-button w3-black w3-padding-large w3-large w3-margin-top q-choice";
        var btn = $("<button>").addClass(btnClass + " " + choiceClass).text(choice);
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
questionContainerDiv.on("click", ".q-choice", function() {
    console.log($(this).val());
    // check if the answer is correct
    var q = questions[currentQuestionIndex];

    // Not sure what the following line was trying to accomplish. JD
    // myScore = new component("30px", "Consolas", "black", 280, 40, "text");

    // Fix jquery syntax
    // if (q.correctAnswer === $(this.val())) { // <--- incorrect


    // disable question button
    $(".q-choice").attr("disabled", true);
    $(this).addClass("q-choice-active");
    if (q.correctAnswer === $(this).val()) { // <---- fixed
        //update score
        myScore++;
        renderScore();
        currentQuestionIndex++;

        // displaying the trivia info should be part of a future issue once this
        // issue is done and Nilou's issue is done
        //display modal
        // $(function () {
        //     $("#myModal").modal();
        // });

    } else {
        console.log(myScore)
        // answer is incorrect
        // update the score
        //display modal
        // $(function () {
        //     $("#myModal").modal();
        // });
    }

    alert(q.triviaURL)

    // the modal should be handle in another issue once Nilou's work has been merged.
    // alert trivia url modal stuff
    // q.triviaURL
    // show button to go to the next question
    questionContainerDiv.append(nextButton());
  
    // I removed the styleNext parameter. Not sure why it would be needed. See me notes inside the function below. JD
    function nextButton(){
      var classes = "w3-button w3-black w3-padding-large w3-large w3-margin-top next-question";
      var nextBtn = $("<button>").addClass(classes);

      // use alternate text when on the final question
      if (currentQuestionIndex === questions.length - 1) {
        nextBtn.text("Finish");
      } else {
        nextBtn.text("Next Question");
      }

      // I think the text for going to the next question should just be "Next"?? not sure why the text
      // for the next questions would be different each time.
      // i don't think the button to advance to the next question needs a value. JD
      // nextBtn.val(styleNext);
      return nextBtn;
  }
})

// when the user clicks on next question button
$(document).on("click", ".next-question", function(){
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

// why is fetchTriviaFrom swap here. Wasn't this Nilou's assignment? JD
// $(document).ready(function (event) {
//     function fetchTriviaFromSwapi(triviaURL) {
//       // ajax request with the trivia url
//       $.ajax({
//         url: q.triviaURL,
//         method: "GET",
//       }).then(function (fields) {
//         console.log(fields);
//         localStorage.setItem("swapi", JSON.stringify(fields));
//         console.log(fields.name);
//         $("#modal-content").empty();
  
//         // show the trivia info on the page
//         // Get the modal
//         var modal = document.getElementById("myModal");
  
//         // not sure we need the button
//         var btn = document.getElementById("myBtn");
//         btn.onclick = function () {
//           modal.style.display = "block";
//         };
  
//         var span = document.getElementsByClassName("close")[0];
//         span.onclick = function () {
//           modal.style.display = "none";
//         };
  
//         window.onclick = function (event) {
//           if (event.target == modal) {
//             modal.style.display = "none";
//           }
//           var modalHeader = $("<h2>")
//             .addClass("modal-header")
//             .text("The answer is...");
//           console.log(modalHeader);
  
//           var name = $("<h3>")
//             .addClass("modal-body")
//             .text("Name: " + fields.name);
//           console.log(name);
  
//           var height = $("<h4>")
//             .addClass("modal-body")
//             .text("Height: " + fields.height + " cm");
//           console.log(height);
  
//           var eyeColor = $("<h4>")
//             .addClass("modal-body")
//             .text("Eye Color: " + fields.eye_color);
//           console.log(eyeColor);
  
//           var homeWorld = $("<h4>")
//             .addClass("modal-body")
//             .text("Home World: " + fields.homeworld);
//           console.log(homeWorld);
  
//           var birthYear = $("<h4>")
//             .addClass("modal-body")
//             .text("Birth Year: " + fields.birth_year);
//           console.log(birthYear);
  
//           $(".modal").append(
//             modalHeader,
//             name,
//             height,
//             eyeColor,
//             homeWorld,
//             birthYear
//           );
//         };
//       });
//     }
//     fetchTriviaFromSwapi("https://swapi.dev/api/people/25/");
  
//     // localStorage.setItem(subject, subject);
//     // $(".prev-list").prepend(
//     //     "<button class='prev-city mt-1'>" + fields + "</button>"
//     //   );
//     function openModal() {
//       console.log("modal click");
  
//       $("#myBtn").click(function () {
//         $("#myModal").modal("show");
//       });
//     }
//   });