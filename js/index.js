
$(document).ready(function() {
    $(".header .nav ul  li:nth-child(2) a").on("click",function (e) { 
        e.preventDefault();
        $("html,body").animate({scrollTop : $(".section-about").offset().top},500);
        if (e.stopPropagation) e.stopPropagation();
    });

    $(".header .nav ul  li:nth-child(3) a").on("click",function (e) { 
        e.preventDefault();
        $("html,body").animate({scrollTop : $(".section-service").offset().top},500);
        if (e.stopPropagation) e.stopPropagation();
    });
    
    $(".header .nav ul  li:nth-child(4) a").on("click",function (e) { 
        e.preventDefault();
        $("html,body").animate({scrollTop : $(".section-portfolio").offset().top},500);
        if (e.stopPropagation) e.stopPropagation();
    });

    $(".header .nav ul  li:nth-child(5) a").on("click",function (e) { 
        e.preventDefault();
        $("html,body").animate({scrollTop : $(".section-banner").offset().top},500);
        if (e.stopPropagation) e.stopPropagation();
    });

    $(".header .nav ul  li:nth-child(6) a").on("click",function (e) { 
        e.preventDefault();
        $("html,body").animate({scrollTop : $(".section-feedback").offset().top},500);
        if (e.stopPropagation) e.stopPropagation();
    });

    $(".header .nav ul  li:nth-child(7) a").on("click",function (e) { 
        e.preventDefault();
        $("html,body").animate({scrollTop : $(".section-advantages").offset().top},500);
        if (e.stopPropagation) e.stopPropagation();
    });

    
});