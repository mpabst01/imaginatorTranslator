var allPeople = [];
var queryUrl = "https://swapi.dev/api/people/";

function makeRequest(queryUrl) {
  $.ajax({
    method: "GET",
    url: queryUrl,
  }).done(function (data) {
    // add people to all people
    allPeople = allPeople.concat(data.results);
    // if there is a next, do another request
    if (!data.next) {
      // display all people in the text area
      console.log(allPeople);
      $("#results").val(JSON.stringify(allPeople, null, 2));
      return;
    }
    makeRequest(data.next);
  });
}

$("#send").on("click", function () {
  makeRequest(queryUrl);
});
