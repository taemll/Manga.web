function GetCheckbox() {
  $(document).ready(function () {
    $.ajax({
      url: 'http://127.0.0.1:8000/api/manga',
      data: { type_id: $('input:checkbox:checked').val() },
    }).done(function (response) {
      $('.media-card').remove();
      let mediaCard = $("#media-card-section");
      let html = "";
      $.each(response.data, function (i, manga) {
        html += '<div class="media-card"><a href="MangaInfo.html?Id=' + manga.id + '" class="media-card-href"><img src="' + manga.img_link + '"><p>' + manga.title + '</p></a></div>';
        console.log(html)
      });
      mediaCard.append(html);
    });
  });
}

$(document).ready(function () {
  $.ajax({
    url: "http://127.0.0.1:8000/api/manga",
    dataType: "json"
  }).done(function (response) {
    let mediaCard = $("#media-card-section");
    let html = "";
    $.each(response.data, function (i, manga) {
      html += '<div class="media-card ' + manga.genre_id + '"><a href="MangaInfo.html?Id=' + manga.id + '" class="media-card-href"><img src="' + manga.img_link + '"><p>' + manga.title + '</p></a></div>';
      //console.log(html)
    });
    mediaCard.append(html);
  });
});

document.forms.publish.onsubmit = function () {
  var message = this.message.value;
  $.ajax({
    url: "http://127.0.0.1:8000/api/manga",
    dataType: "json",
    data: {
      "title": "" + message
    },
  }).done(function (response) {
    $('.media-card').remove();
    //location.reload();
    let mediaCard = $("#media-card-section");
    let html = "";
    $.each(response.data, function (i, manga) {
      html += '<div class="media-card"><a href="MangaInfo.html?Id=' + manga.id + '" class="media-card-href"><img src="' + manga.img_link + '"><p>' + manga.title + '</p></a></div>';
      console.log(html)
    });
    mediaCard.append(html);
  });
  return false;
};

function GetType(type_id) {
  $(document).click(function () {
    $.ajax({
      url: "http://127.0.0.1:8000/api/manga?type=" + type_id,
      dataType: "json",
      data: { "type_id": "" + type_id }
    }).done(function (response) {
      $('.media-card').remove();
      let mediaCard = $("#media-card-section");
      let html = "";
      $.each(response.data, function (i, manga) {
        html += '<div class="media-card"><a href="MangaInfo.html?Id=' + manga.id + '" class="media-card-href"><img src="' + manga.img_link + '"><p>' + manga.title + '</p></a></div>';
      });
      mediaCard.append(html);
    });
  });
}

$(document).ready(function () {
  $.ajax({
    url: "http://127.0.0.1:8000/api/genres",
    dataType: "json"
  }).done(function (response) {
    let filterGenre = $("#filter-genre");
    let html = "";
    $.each(response, function (i, genre) {
      html += '<input type="checkbox" data-f="' + genre.id + '" name="filter" value="' + genre.id + '" id="' + genre.name + '">' + genre.name + '<br>';
      //console.log(html)
    });
    filterGenre.append(html);
  });
});

const filterCard = document.querySelectorAll('#media-card-section');
document.querySelector('checkbox'), addEventListener('click', event => {
  //if(event.target.tagName !== 'input') return false;
  let filterClass = event.target.dataset['f'];
  console.log(filterClass);
  filterCard.forEach(elem => {
    if (!elem.classList.contains(filterClass)) {
      console.log(elem);
    }
    //else $('.media-card').show();
  })
})