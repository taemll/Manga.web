$(".btnDel").submit(function (event) {
    event.preventDefault();
    $.ajax({
    type: "delete",
    url: "http://127.0.0.1:8000/api/manga/"+getUrlParameter('Id'),
    dataType: "json",
    }).done(function (data){
        $(this).remove();
        alert("Удалено!")
        //location.reload();
        window.location.href='MainPage.html';
    });
    return false;
});


