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
  $(".showmanga").append(function (event){
    $.ajax({
      url: "http://127.0.0.1:8000/api/manga",
      dataType: "json"
    }).done(function(response){
      let mediaCard = $("#media-card-section");
      let html = "";
      $.each(response.data ,function(i, manga){
        html += '<div class="media-card"><a href="MangaInfo.html?" class="media-card-href"><img src="'+manga.img_link+'"><p>'+ manga.title+'</p></a></div>';
        console.log(html)
      });
      mediaCard.append(html);
    });
  });
});

function GetType(Type){

}