$(document).ready(function () {
    $.ajax({
        url: "http://127.0.0.1:8000/api/pages",
        dataType: "json",
        data: { chapter_id: getUrlParameter('Id') }
    }).done(function (response) {
        let pages = $(".slideshow-container");
        let html = "";
        $.each(response, function (i, page) {
            html += '<div class="mySlides fade"><div class="numbertext">' + i++ + ' /' + page.length + '</div><img src="' + page.img_link + '" style="width:100%"></div>';
            console.log(html);
        });
        pages.append(html);
    });
});

function GetCountOfPages() {
    $.ajax({
        url: "http://127.0.0.1:8000/api/countOfPages",
        dataType: "json",
        data: { chapter_id: getUrlParameter('Id') }
    }).done(function (response) {
        $.each(response, function () {
            console.log();
        });
    });
}
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
