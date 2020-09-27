$(document).ready(function (event) {
  var questions = [
    {
      question: "Where does Wilhuff Tarkin call home?",
      answers: ["A. Eriadu", "B. Bespin", "C. Coruscant", "D. Mustafar"],
      correctAnswer: "A. Eriadu",
      triviaURL: "https://swapi.dev/api/planets/21/",
    },
    {
      question: "When was Darth Vader born?",
      answers: ["A. 41.9BBY", "B. 64BBY", "C. 200BBY", "D. 54BBY"],
      correctAnswer: "A. 41.9BBY",
      triviaURL: "https://swapi.dev/api/people/10/",
    },
    {
      question:
        "What planet does Anakin Skywalker seek duel with Obi-Wan Kenobi?",
      answers: [
        "A. unknown",
        "B. Mustafar",
        "C. The Death Star",
        "D. Polis Massa",
      ],
      correctAnswer: "B. Mustafar",
      triviaURL: "https://swapi.dev/api/planets/13/",
    },
    {
      question: "What color are Darth Maul's eyes?",
      answers: ["A. black", "B. brown", "C. yellow", "D. blue"],
      correctAnswer: "C. yellow",
      triviaURL: "https://swapi.dev/api/people/44/",
    },
    {
      question: "When was General Grievous born?",
      answers: ["A. 200BBY", "B. 82BBY", "C. 41BBY", "D. unknown"],
      correctAnswer: "D. unknown",
      triviaURL: "https://swapi.dev/api/people/79/",
    },
    {
      question: "How tall is Palpatine?",
      answers: ["A. 160cm", "B. 150cm", "C. 170cm", "D. 180cm"],
      correctAnswer: "C. 170cm",
      triviaURL: "https://swapi.dev/api/species/21/",
    },
    {
      question:
        "What is the name of the shape shifting assassin hired to kill Padme Amidala?",
      answers: [
        "A. Lama Su",
        "B. Zam Wesell",
        "C. Taun We",
        "D. Dexter Jettster",
      ],
      correctAnswer: "D. Dexter Jettster",
      triviaURL: "https://swapi.dev/api/people/71/",
    },
  ];
    
  // swapi trivia for people
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
    fetchTriviaFromSwapi("https://swapi.dev/api/people/21/");
  
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
  
// // Swapi trivia for planets
//       function fetchPlanetsTriviaFromSwapi(triviaURL) {
//       // ajax request with the trivia url
//       $.ajax({
//         url: triviaURL,
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
//             .text("Climate: " + fields.climate);
//           console.log(climate);
  
//           var eyeColor = $("<h4>")
//             .addClass("modal-body")
//             .text("Terrain: " + fields.terrain);
//           console.log(terrain);
  
//           var homeWorld = $("<h4>")
//             .addClass("modal-body")
//             .text("Surface Water: " + fields.surface_water + " m");
//           console.log(surface_water);
  
//           var birthYear = $("<h4>")
//             .addClass("modal-body")
//             .text("Population: " + fields.population);
//           console.log(population);
  
//           $(".modal").append(
//             modalHeader,
//             name,
//             climate,
//             terrain,
//             surface_water,
//             population
//           );
//         };
//       });
//     }
//     fetchPlanetsTriviaFromSwapi("https://swapi.dev/api/planets/21/");
  
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