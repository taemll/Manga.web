// let strUml=window.location.href;
// let umlId=(strUml.split("id"[1]));    
// console.log(umlId);
function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;
  
    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');
  
        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
    return false;
  };

$(document).ready(function(){
    console.log(getUrlParameter('Id'))
    $(".information-list").append(function (){
      $.ajax({
        url: "http://127.0.0.1:8000/api/manga",
        dataType: "json",
        data:{"id":getUrlParameter('Id')},
      }).done(function(response){
        let Mtype = $(".base1");
        let html = "";
        $.each(response.data ,function(i, manga){
          html += '<div class="base"><div class="img-section"><img src="'+manga.img_link+'"></img></div><div class="title-section"><div class="text-title"><h2>'+manga.title+'</h2></div><div class="text-information"><h6>Тип</h6><div class="MType"><p>'+manga.type+'</p></div><h6>Год выпуска</h6><p id="MRelizeAge">'+manga.release_age+'</p><h6>Автор</h6><p id="MAuthor">'+manga.author+'</p><h6>Издательство</h6><p id="MPublisher">'+manga.publisher+'</p><h6>Жанры</h6><p id="MGenre">'+manga.genre+'</p></div></div><div class="description-section"><div class="text-description"><p>'+manga.description+'</p>';
          console.log(html)
        });
        Mtype.append(html);
      });
    });
  });

//   document.forms.publish.onsubmit = function() {
//     var message = this.message.value;
//     $.ajax({
//       url: "http://127.0.0.1:8000/api/manga",
//       dataType: "json",
//       data:{
//         "title":""+message
//       },
//       }).done(function(data){
//         $('.media-card').remove();
//         //location.reload();
//         let mediaCard = $("#media-card-section");
//         let html = "";
//         $.each(data.data ,function(i, manga){
//           html += '<div class="media-card"><a href="MangaInfo.html?title='+manga.title+'" class="media-card-href"><img src="'+manga.img_link+'"><p>'+ manga.title+'</p></a></div>';
//           console.log(html)
//         });
//         mediaCard.append(html);
//     });
  
//     return false;
//   };
  
