$(document).ready(function (event) {
  var questions = [
    {
      question: "What planet does C-3PO call home?",
      answers: ["A. Tattooine", "B. Alderaan", "C: Bespin", "D. Naboo"],
      correctAnswer: "A. Tattooine",
      triviaURL: "https://swapi.dev/api/planets/1/",
    },
    {
      question: "When was Obi-Wan Kenobi born?",
      answers: ["A. 57BBY", "B. 52BBY", "C. 102BBY", "D. 204BBY"],
      correctAnswer: "A. 57BBY",
      triviaURL: "https://swapi.dev/api/people/10/",
    },
    {
      question: "What planet does Yoda seek refuge from the Dark Side?",
      answers: ["A. unknown", "B. Dagobah", "C. Yavin IV", "D. Kamino"],
      correctAnswer: "B. Dagobah",
      triviaURL: "https://swapi.dev/api/planets/5/",
    },
    {
      question: "What color are Lando Calrissian's eyes?",
      answers: ["A. black", "B. hazel", "C. brown", "D. blue"],
      correctAnswer: "C. brown",
      triviaURL: "https://swapi.dev/api/people/25/",
    },
    {
      //q4
      question: "Who is Bail Prestor Organa?",
      answers: [
        "A. Luke's stepfather",
        "B. Han Solo's father",
        "C. A rebel fighter",
        "D. Leia's stepfather",
      ],
      correctAnswer: "D. Leia's stepfather",
      triviaURL: "https://swapi.dev/api/people/68/",
    },
    {
      //q5
      question: "What language does Chewbacca speak?",
      answers: ["A. Toydarian", "B. Neimodian", "C. Shyriiwook", "D. Huttese"],
      correctAnswer: "C. Shyriiwook",
      triviaURL: "https://swapi.dev/api/species/3/",
    },
    {
      //q6
      question: "Who piloted the Millennium Falcon?",
      answers: [
        "A. Rey",
        "B. Lando Calrissian",
        "C. Han Solo",
        "D. All of the above",
      ],
      correctAnswer: "D. All of the above",
      triviaURL: "https://swapi.dev/api/starships/10/",
    },
  ];
 
 
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
  const showModal = (ev) => {
    ev.preventDefault();
    let modal = document.querySelector(".modal");
    modal.classList.remove("off");
    modal.classList.add("on");
  };
  const showOverlay = (ev) => {
    ev.preventDefault();
    let overlay = document.querySelector(".overlay");
    overlay.classList.remove("hide");
    overlay.classList.add("show");
    showModal(ev);
  };
  const hideModal = (ev) => {
      let modal = document.querySelector(".modal");
      modal.classList.remove ("on");
      modal. classList.add("off");
  };
  const hideOverlay = (ev) => {
    ev.preventDefault();
    ev.stopPropagation();
    let overlay = document.querySelector(".overlay");
    overlay.classList.remove("show");
    overlay.classList.add("hide");
    hideModal(ev);
  };
  
  const init = (ev)=> {
    document.querySelector("p").addEventListener("click", showOverlay);
  
    document.querySelector(".close-btn").addEventListener("click", hideOverlay);
  };
  
  document.addEventListener("DOMContentLoaded", init);
});