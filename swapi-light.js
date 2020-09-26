$(document).ready(function (event) {
  function fetchTriviaFromSwapi(triviaURL) {
    // ajax request with the trivia url
    $.ajax({
      url: triviaURL,
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
  fetchTriviaFromSwapi("https://swapi.dev/api/people/25/");

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
