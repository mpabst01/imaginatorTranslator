function fetchTriviaFromSwapi(triviaURL) {
  // ajax request with the trivia url
  $.ajax({
    url: triviaURL,
    method: "GET",
  }).then(function (swapiData) {
    console.log(swapiData);

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
    } else if (triviaURL.includes("spaceships")) {
      li = $("<li>").text("Model: " + swapiData.model);
      list.append(li);

      li = $("<li>").text("Manufacturer: " + swapiData.manufacturer);
      list.append(li);

      li = $("<li>").text("Starship Class: " + swapiData.starship_class);
      list.append(li);

      li = $("<li>").text("Passengers: " + swapiData.passengers);
      list.append(li);
    }
    var title = $("<h3>").text("The answer is ...");
    modal.getModalContent().empty().append(title, list);

    // show the modal
    modal.showModal();
  });
}
