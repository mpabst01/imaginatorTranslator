//  === code to test fetchTriviaFromSwapi function ===
$(document).ready(function (event) {
  var testPerson = "https://swapi.dev/api/people/44/";
  var testSpecies = "https://swapi.dev/api/species/21/";
  var testPlanets = "https://swapi.dev/api/planets/21/";

  // fetchTriviaFromSwapi(testPerson);
  //   fetchTriviaFromSwapi(testSpecies);
  fetchTriviaFromSwapi(testPlanets);
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
    climate: "polluted"
created: "2014-12-10T16:26:54.384000Z"
diameter: "13490"
edited: "2014-12-20T20:58:18.454000Z"
films: []
gravity: "1 standard"
name: "Eriadu"
orbital_period: "360"
population: "22000000000"
residents: ["http://swapi.dev/api/people/12/"]
rotation_period: "24"
surface_water: "unknown"
terrain: "cityscape"
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
        li = $("<li>").text("Language: " + swapiData.language);
        list.append(li);
        
        li = $("<li>").text("Avg. Life: " + swapiData.average_lifespan);
        list.append(li);
        
        li = $("<li>").text("Eye Colors: " + swapiData.eye_colors);
        list.append(li);
    } else if (triviaURL.includes("planets")) {
        // climate, terrain, rotation_period
        li = $("<li>").text("Climate: " + swapiData.climate);
        list.append(li);
        
        li = $("<li>").text("Terrain: " + swapiData.terrain);
        list.append(li);
        
        li = $("<li>").text("Rotation Period: " + swapiData.rotation_period);
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
