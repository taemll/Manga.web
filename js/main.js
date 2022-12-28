// const fiilter=document.querySelector('.input:checkbox:checked')
// function GetCheckbox(){
// }

function GetCheckbox(){
  $(document).ready(function(){
    $.ajax({
      url: 'http://127.0.0.1:8000/api/manga',
      data: { type_id : $('input:checkbox:checked').val()},
    }).done(function(response){
      $('.media-card').remove();
      let mediaCard = $("#media-card-section");
      let html = "";
      $.each(response.data ,function(i, manga){
        html += '<div class="media-card"><a href="MangaInfo.html?Id='+manga.id+'" class="media-card-href"><img src="'+manga.img_link+'"><p>'+ manga.title+'</p></a></div>';
        console.log(html)
      });
      mediaCard.append(html);
    });  
  });
}


$(document).ready(function(){
  $.ajax({
    url: "http://127.0.0.1:8000/api/manga",
    dataType: "json"
  }).done(function(response){
    let mediaCard = $("#media-card-section");
    let html = "";
    $.each(response.data ,function(i, manga){
      html += '<div class="media-card"><a href="MangaInfo.html?Id='+manga.id+'" class="media-card-href"><img src="'+manga.img_link+'"><p>'+ manga.title+'</p></a></div>';
      console.log(html)
    });
    mediaCard.append(html);
  });
});


document.forms.publish.onsubmit = function() {
  var message = this.message.value;
  $.ajax({
    url: "http://127.0.0.1:8000/api/manga",
    dataType: "json",
    data:{
      "title":""+message
    },
    }).done(function(response){
      $('.media-card').remove();
      //location.reload();
      let mediaCard = $("#media-card-section");
      let html = "";
      $.each(response.data ,function(i, manga){
        html += '<div class="media-card"><a href="MangaInfo.html?Id='+manga.id+'" class="media-card-href"><img src="'+manga.img_link+'"><p>'+ manga.title+'</p></a></div>';
        console.log(html)
      });
      mediaCard.append(html);
  });

  return false;
};

function GetType(type_id){
  $(document).click(function(){
    $.ajax({
      url: "http://127.0.0.1:8000/api/manga?type="+type_id,
      dataType: "json",
      data:{"type_id":""+type_id}
    }).done(function(response){  
      $('.media-card').remove();    
      let mediaCard = $("#media-card-section");
      let html = "";
      $.each(response.data ,function(i, manga){
        html += '<div class="media-card"><a href="MangaInfo.html?Id='+manga.id+'" class="media-card-href"><img src="'+manga.img_link+'"><p>'+ manga.title+'</p></a></div>';
      });
      mediaCard.append(html);
    });
  });
}