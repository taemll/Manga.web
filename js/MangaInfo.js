

$(document).ready(function(){
  $(".information-list").append(function(){
    $.ajax({
      url: "http://127.0.0.1:8000/api/manga",
      dataType: "json",
      data : {id : getUrlParameter('Id')}
    }).done(function(response){
      let Mtype = $(".base1");
      let html = "";
      $.each(response.data ,function(i, manga){
        html += '<div class="base"><div class="img-section"><img src="'+manga.img_link+'"></img></div><div class="title-section"><div class="text-title"><h2>'+manga.title+'</h2></div><div class="text-information"><h6>Тип</h6><div class="MType"><p>'+manga.type.name+'</p></div><h6>Год выпуска</h6><p id="MRelizeAge">'+manga.release_age+'</p><h6>Автор</h6><p id="MAuthor">'+manga.author.name+'</p><h6>Издательство</h6><p id="MPublisher">'+manga.publisher.name+'</p><h6>Жанры</h6><p id="MGenre">'+manga.genre.name+'</p></div></div><div class="description-section"><div class="text-description"><p>'+manga.description+'</p></div><div class="controll-button"><form id="updateForm"><a href="UpdatePage.html?Id='+manga.id+'" id="btnUpdate">Редактировать</a></form><a href="ChaptersPage.html?Id='+manga.id+'" id="chaptersBtnId">Главы</a></div></div>'
        console.log(html)
      });
      Mtype.append(html);
    });
  });
});
