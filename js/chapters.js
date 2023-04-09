
$(document).ready(function () {
    $.ajax({
        url: "http://127.0.0.1:8000/api/chapters",
        dataType: "json",
        data:{manga_id : getUrlParameter('Id')}
    }).done(function (response) {
        let chapters = $("#chptr");
        let html = "";
        $.each(response, function (i, chapter) {
            html += '<div class="chapters_main"><a href="ReadPage.html?Id=' + chapter.id + '"><div class="' + chapter.id + '">'+chapter.manga_id+'-' + chapter.title +'</div></a></div>';
            //console.log(html.length);
        });
        chapters.append(html);
    });
});