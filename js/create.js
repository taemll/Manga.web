document.forms.addd.onsubmit = function() {
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
    type: "POST",
    url: "http://127.0.0.1:8000/api/manga",
    data: mangaData,
    dataType: "json",
    }).done(function (data) {
        alert("Добавлено!")
        console.log(data);
        //location.reload();
        window.location.href='MainPage.html';
    });
    return false;
};