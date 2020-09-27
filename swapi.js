//  === code to test fetchTriviaFromSwapi function ===
$(document).ready(function (event) {
  var testPerson = "https://swapi.dev/api/people/44/";

//   fetchTriviaFromSwapi(testPerson);
});
// === end test code ===

function fetchTriviaFromSwapi(triviaURL) {
  // ajax request with the trivia url
  $.ajax({
    url: triviaURL,
    method: "GET",
  }).then(function (swapiData) {
    console.log(swapiData);

    // create a ul
    var list = $("<ul>");
    
    var li = $("<li>").text("Name: " + swapiData.name);
    list.append(li);
    
    li = $("<li>").text("Height: " + swapiData.height + " cm");
    list.append(li);
    
    li = $("<li>").text("Eye Color: " + swapiData.eye_color);
    list.append(li);
    
    li = $("<li>").text("Birth Year: " + swapiData.birth_year);
    list.append(li);
    
    // TODO (later issue): send request to get the homeworld and show it
    
    // empty the modal
    // append the ul to the modal
    var title = $("<h3>").text("The answer is ...");
    modal.getModalContent().empty().append(title, list);
    
    // show the modal
    modal.showModal();
  });
}
