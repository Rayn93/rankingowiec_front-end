$(window).scroll(function() {
    if ($(this).scrollTop() > 1){
        $('#header-top').addClass("sticky");
    }
    else{
        $('#header-top').removeClass("sticky");
    }
});


$(document).ready(function () {


////dotdotdot
//
//    $(".dot-wrapper h3").dotdotdot({
//        //	configuration goes here
//    });

//Bootstrap karuzela
     $("#myCarousel").carousel({
         interval: 9000,
         pause: "hover"
     });

//SEARCH

     $(".search").mouseenter(function () {
         $(".search input").slideDown("fast");   
     });

     $(".search").mouseleave(function () {
         $(".search input").slideUp("fast");
     });

//PODMIANA KLASY PRZY SZEROKOŚCI OKNA 620PX DLA SEKCJI KATEGORIE

     var width = $(window).width();
     if (width < 620) {
         $("#category .padding").removeClass("col-xs-4").addClass("col-xs-6")
     }

// OSKRYPTOWANIE DLA MENU

     var height = $(window).height();
   
     $(".traggle_menu").css("height", height);

     $(".burger").click(function () {
         $(".traggle_menu").show("slide", { direction: "left" }, 500);
     });


     $(".close").click(function () {
         $(".traggle_menu").hide("slide", "right", 500);
     });


});



//PODMIANA KLASY PRZY SZEROKOŚCI OKNA 620PX DLA SEKCJI KATEGORIE
$(window).resize(function () {

    var width = $(window).width();
    if (width < 620) {
        $("#category .padding").removeClass("col-xs-4").addClass("col-xs-6")
    }

    else {
        $("#category .padding").removeClass("col-xs-6").addClass("col-xs-4")
    }
});



//SKRYP ODPOWIADAJĄCY ZA PRAWIDŁOWE WYŚWIETLANIE STRONY NA TEL KOM.

var scale = 1 / (window.devicePixelRatio || 1);
var content = 'width=device-width, initial-scale=' + scale + ', minimum-scale=' + scale;

document.querySelector('meta[name="viewport"]').setAttribute('content', content);

