// function handleCheckbox(){
//     let checkboxField=document.forms[0].additionals;
//     console.log(checkboxField, typeof(checkboxField));
//     for(let i=0; i< checkboxField.length;i++){
//         if(checkboxField[i].checked){
//             console.log("The selected option was:", checkboxField[i].value);
//         }
//     }
// }


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
        console.log(type_id)
      });
      mediaCard.append(html);
    });
  });
}

// document.forms.type1.onsubmit = function() {
//   var mData = {
//     type_id: $("#dropdown-item").val(),
//     };  
//     $.ajax({
//     url: "http://127.0.0.1:8000/api/manga",
//     dataType: "json",
//     data:{
//       "type_id":""+mData
//     },
//     }).done(function(response){
//       $('.media-card').remove();
//       //location.reload();
//       let mediaCard = $("#media-card-section");
//       let html = "";
//       $.each(response.data ,function(i, manga){
//         html += '<div class="media-card"><a href="MangaInfo.html?id='+manga.id+'" class="media-card-href"><img src="'+manga.img_link+'"><p>'+ manga.title+'</p></a></div>';
//         console.log(html)
//       });
//       mediaCard.append(html);
//   });

//   return false;
// };

