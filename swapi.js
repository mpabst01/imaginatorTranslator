//  === code to test fetchTriviaFromSwapi function ===
$(document).ready(function (event) {
  var testPerson = "https://swapi.dev/api/people/44/";
  var testSpecies = "https://swapi.dev/api/species/21/";
  var testStarships = "https://swapi.dev/api/starships/10/";

    fetchTriviaFromSwapi(testPerson);
//   fetchTriviaFromSwapi(testSpecies);
});

// === end test code ===

function fetchTriviaFromSwapi(triviaURL) {
  // ajax request with the trivia url
  $.ajax({
    url: triviaURL,
    method: "GET",
  }).then(function (swapiData) {
    console.log(swapiData);

    /* 
    average_height: "180"
    average_lifespan: "70"
    classification: "amphibian"
    created: "2014-12-20T10:18:58.610000Z"
    designation: "sentient"
    edited: "2014-12-20T21:36:42.181000Z"
    eye_colors: "black"
    films: ["http://swapi.dev/api/films/4/"]
    hair_colors: "none"
    homeworld: "http://swapi.dev/api/planets/44/"
    language: "Nautila"
    name: "Nautolan"
    people: ["http://swapi.dev/api/people/53/"]
    skin_colors: "green, blue, brown, red"
    url: "http://swapi.dev/api/species/21/"
    */

    // create a ul
    var list = $("<ul>");

    var li = $("<li>").text("Name: " + swapiData.name);
    list.append(li);
    if (triviaURL.includes("people")) {
      li = $("<li>").text("Height: " + swapiData.height + " cm");
      list.append(li);

      li = $("<li>").text("Eye Color: " + swapiData.eye_color);
      list.append(li);

      li = $("<li>").text("Birth Year: " + swapiData.birth_year);
      list.append(li);
    } else if (triviaURL.includes("species")) {
      // language, average_lifespan, eye_colors
      li = $("<li>").text("Language: " + swapiData.language);
      list.append(li);

      li = $("<li>").text("Avg. Life: " + swapiData.average_lifespan);
      list.append(li);

      li = $("<li>").text("Eye Colors: " + swapiData.eye_colors);
      list.append(li);
    }

    // TODO (later issue): send request to get the homeworld and show it

    // empty the modal
    // append the ul to the modal
    var title = $("<h3>").text("The answer is ...");
    modal.getModalContent().empty().append(title, list);

    // show the modal
    modal.showModal();
  });
}
