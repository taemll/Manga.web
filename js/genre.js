$(document).ready(function () {
  $.ajax({
    url: "http://127.0.0.1:8000/api/genres",
    dataType: "json"
  }).done(function (response) {
    let filterGenre = $("#genre");
    let html = "";
    $.each(response, function (i, genre) {
      html += '<option value="' + genre.id + '">' + genre.name + '</option>'
      //console.log(html)
    });
    filterGenre.append(html);
  });
});