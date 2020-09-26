$(document).ready(function () {
  //Array for searched topics to be added
  var topics = [];

  //Function with AJAX call to GIPHY; Q parameterc for API link set to search term, limit 10 results
  //Create div with respective still and animate image sources with "data-state", "data-still" and "data-animate" attributes
  function displayStarwarsCharacter() {
    var x = $(this).data("search");
    console.log(x);

    var queryURL =
      "https://api.giphy.com/v1/gifs/search?q=" +
      x +
      "&api_key=vJV4l1M7luL2JnbOcT3gzyvyJY2BZut0&limit=10";

    console.log(queryURL);

    $.ajax({
      url: queryURL,
      method: "GET",
    }).done(function (response) {
      var results = response.data;
      console.log(results);
      for (var i = 0; i < results.length; i++) {
        var characterDiv = $("<div class='col-md-4'>");

        var defaultAnimatedSrc = results[i].images.fixed_height.url;
        var staticSrc = results[i].images.fixed_height_still.url;
        var characterImage = $("<img>");

        showImage.attr("src", staticSrc);
        showImage.addClass("starwarsGiphy");
        showImage.attr("data-state", "still");
        showImage.attr("data-still", staticSrc);
        showImage.attr("data-animate", defaultAnimatedSrc);
        showDiv.append(p);
        showDiv.append(characterImage);
        $("#gifArea").prepend(characterDiv);
      }
    });
  }

  //Submit button click event takes search term from form input, trims and pushes to topics array, displays button
  $("#addCharacter").on("click", function (event) {
    event.preventDefault();
    var newCharacter = $("#starwarsInput").val().trim();
    topics.push(newCharacter);
    console.log(topics);
    $("#starwarsInput").val("");
    displayButtons();
  });

  //Function iterates through topics array to display button with array values in "myButtons" section of HTML
  function displayButtons() {
    $("#myButtons").empty();
    for (var i = 0; i < topics.length; i++) {
      var a = $('<button class="btn btn-primary">');
      a.attr("id", "character");
      a.attr("data-search", topics[i]);
      a.text(topics[i]);
      $("#myButtons").append(a);
    }
  }

  displayButtons();

  //Click event on button with id of "show" executes displayStarwarsCharacter function
  $(document).on("click", "#show", displayStarwarsCharacter);

  //Click event on gifs with class of "starwarsGiphy" executes pausePlayGifs function
  $(document).on("click", ".starwarsGiphy", pausePlayGifs);

  //Function accesses "data-state" attribute and depending on status, changes image source to "data-animate" or "data-still"
  function pausePlayGifs() {
    var state = $(this).attr("data-state");
    if (state === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    } else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    }
  }
});
