function fetchTriviaFromSwapi(triviaURL) {
  // ajax request with the trivia url
  $.ajax({
    url: triviaURL,
    method: "GET",
  }).then(function (fields) {
    console.log(fields);
    localStorage.setItem("swapi", JSON.stringify(fields));
    console.log(fields.name);
    $("#trivia").empty();

    // show the trivia info on the page
    //   var modal = $("<div>").addClass("modal");
    //   var modalBody = $("<div>").addClass("modal-body");
    var modalTitle = $("<h2>")
      .addClass("modal-title")
      .text("The answer is ...");
    console.log(modalTitle);
    var name = $("<h3>")
      .addClass("modal-text")
      .text("Name: " + fields.name);
    console.log(name);
    $("body").append(name);
    var height = $("<h4>")
      .addClass("modal-text")
      .text("Height: " + fields.height + " cm");
    console.log(height);
    $("body").append(height);
    var eyeColor = $("<h4>")
      .addClass("modal-text")
      .text("Eye Color: " + fields.eye_color);
    console.log(eyeColor);
    $("body").append(eyeColor);
    var homeWorld = $("<h4>")
      .addClass("modal-text")
      .text("Home World: " + fields.homeworld);
    console.log(homeWorld);
    $("body").append(homeWorld);
    var birthYear = $("<h4>")
      .addClass("modal-text")
      .text("Birth Year: " + fields.birth_year);
    console.log(birthYear);
    $("body").append(birthYear);
    // $("#trivia").append(
    //   modal.append(
    //     modalBody.append(modalTitle, name, height, eyeColor, homeWorld, birthYear)
    //   )
    // );
  });
}
fetchTriviaFromSwapi("https://swapi.dev/api/people/25/");

// localStorage.setItem(subject, subject);
// $(".prev-list").prepend(
//     "<button class='prev-city mt-1'>" + fields + "</button>"
//   );
