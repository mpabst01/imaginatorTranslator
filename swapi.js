//  === code to test fetchTriviaFromSwapi function ===
$(document).ready(function (event) {
  var testPerson = "https://swapi.dev/api/people/44/";
  var testSpecies = "https://swapi.dev/api/species/21/";
  var testPlanets = "https://swapi.dev/api/planets/21/";
  var testStarships = "https://swapi.dev/api/starships/10/";

  // fetchTriviaFromSwapi(testPerson);
  //   fetchTriviaFromSwapi(testSpecies);
  //   fetchTriviaFromSwapi(testPlanets);
  fetchTriviaFromSwapi(testStarships);
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
      li = $("<li>").text("Climate: " + swapiData.climate);
      list.append(li);

      li = $("<li>").text("Terrain: " + swapiData.terrain);
      list.append(li);

      li = $("<li>").text("Rotation Period: " + swapiData.rotation_period);
      list.append(li);
    } else (triviaURL.includes("spaceships")) 
      // model, manufacturer, starship_class, passengers
      li = $("<li>").text("Model: " + swapiData.model);
      list.append(li);

      li = $("<li>").text("Manufacturer: " + swapiData.manufacturer);
      list.append(li);

      li = $("<li>").text("Starship Class: " + swapiData.starship_class);
      list.append(li);

      li = $("<li>").text("Passengers: " + swapiData.passengers);
      list.append(li);
    
    /* 
MGLT: "75"
cargo_capacity: "100000"
consumables: "2 months"
cost_in_credits: "100000"
created: "2014-12-10T16:59:45.094000Z"
crew: "4"
edited: "2014-12-20T21:23:49.880000Z"
films: (3) ["http://swapi.dev/api/films/1/", "http://swapi.dev/api/films/2/", "http://swapi.dev/api/films/3/"]
hyperdrive_rating: "0.5"
length: "34.37"
manufacturer: "Corellian Engineering Corporation"
max_atmosphering_speed: "1050"
model: "YT-1300 light freighter"
name: "Millennium Falcon"
passengers: "6"
pilots: (4) ["http://swapi.dev/api/people/13/", "http://swapi.dev/api/people/14/", "http://swapi.dev/api/people/25/", "http://swapi.dev/api/people/31/"]
starship_class: "Light freighter"
url: "http://swapi.dev/api/starships/10/"
    */
    // TODO (later issue): send request to get the homeworld and show it

    // empty the modal
    // append the ul to the modal
    var title = $("<h3>").text("The answer is ...");
    modal.getModalContent().empty().append(title, list);

    // show the modal
    modal.showModal();
  });
}
