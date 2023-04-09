$(document).ready(function(){
  $(".add-base").append(function(){
    $.ajax({
      url: "http://127.0.0.1:8000/api/manga",
      dataType: "json",
      data:{"id":getUrlParameter('Id')},
    }).done(function(response){
      let Mtype = $(".input-section");
      let html = "";
      $.each(response.data ,function(i, manga){
        html += '<label for="title">Название манги</label><br><input class="inputs" id="title" type="text" size="40%" autocomplete="off" value="'+manga.title+'"><br><p></p><label for="release_age">Год релиза</label><br><input class="inputs" id="release_age" type="text" size="40%" autocomplete="off" value="'+manga.release_age+'"><br><p></p><label for="author">Автор</label><br><input class="inputs" id="author" type="text" size="40%" autocomplete="off" value="'+manga.author.name+'"><br><p></p><label for="publisher">Издательство</label><br><input class="inputs" id="publisher" type="text" size="40%" autocomplete="off" value="'+manga.publisher.name+'"><br><p></p><label for="description">Описание</label><br><input class="inputs" id="description" type="text" size="40%" autocomplete="off" value="'+manga.description+'"><br><p></p><label for="imgLink">Ссылка на картинку</label><br><input class="inputs" id="imgLink" type="text" size="40%" autocomplete="off" value="'+manga.img_link+'"><br>';
        //console.log(html)
      });
      Mtype.append(html);
      });
  });
});

document.forms.updt.onsubmit = function() {
    var mangaData = {
        type_id:$("#type").val(),
        title:$("#title").val(),
        release_age:$("#release_age").val(),
        author_id:$("#author").val() ,
        genre_id:$("#genre").val(),
        publisher_id:$("#publisher").val(),
        description:$("#description").val(),
        img_link:$("#imgLink").val(),
    };
    $.ajax({
    type: "put",
    url: "http://127.0.0.1:8000/api/manga/"+getUrlParameter('Id'),
    data: mangaData,
    dataType: "json",
    }).done(function (data) {
        alert("Изменения сохранены!")
        console.log(data);
        window.location.href='MainPage.html';
        //location.reload();
    });
    return false;
};

