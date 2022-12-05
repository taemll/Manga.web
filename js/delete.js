
// $(document).ready(function (response) {
//     $(".controll-button").submit(function (event) {
//         event.preventDefault();
//         var formData = {
//         id: $("#btnDelete").val(),
//         };
//         $.ajax({
//           type: 'DELETE',
//           contentType: 'json',
//           url: 'http://127.0.0.1:8000/api/manga/'+formData.id,
//           data: formData
//         }).done(function (data) {
//             $(this).remove();
//         });
//     });
// });
    $(".btnDel").submit(function (event) {
        event.preventDefault();
        $.ajax({
        type: "delete",
        url: "http://127.0.0.1:8000/api/manga/"+getUrlParameter('Id'),
        dataType: "json",
        }).done(function (data){
            $(this).remove();
            alert("Удалено!")
        });
        return false;
    });


