$("html").stop().animate({ scrollTop: 0 }); //temp
$("main").stop().fadeOut(0);
$(function () {
    let scrollNow = 0;
    $("body").css("overflow", "hidden"); //temp
    $(".fade_button").on("click", () => {
        $(".section1").fadeOut(1000);
        $("main").stop().fadeIn(1000);
        $("body").css("overflow", "visible");
        if (scrollNow > 0) {
            $("html").stop().animate({ scrollTop: scrollNow }, 1000);
        }
        $("main, header").fadeIn(1000);
    });
    $(".home").on("click", () => {
        $(".section1").fadeIn(1000);
        $("body").css("overflow", "hidden");
        scrollNow = document.documentElement.scrollTop;
        $("main, header").fadeOut();
        // console.log(scrollNow);
    });
    $(".phone").on("click", () => {
        $(".phone").text("전화번호: 010-2699-4365");
    });
});

$(function () {
    $(".img_container").slick({
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        adaptiveHeight: true,
    });
    $(".slick-prev").text("<");
    $(".slick-next").text(">");
    $(".slick-dots button").text("1");
});

$(function () {
    $(".to_about_me").on("click", () => {
        $("html")
            .stop()
            .animate({ scrollTop: $(".section2").offset().top - 80 }, 1000);
    });
    $(".to_portfolio").on("click", () => {
        $("html")
            .stop()
            .animate({ scrollTop: $(".section3").offset().top - 80 }, 1000);
    });
    $(".to_ninestars").on("click", () => {
        $("html")
            .stop()
            .animate({ scrollTop: $(".ninestars").offset().top - 80 }, 1000);
    });
    $(".to_illdy").on("click", () => {
        $("html")
            .stop()
            .animate({ scrollTop: $(".illdy").offset().top - 80 }, 1000);
    });
    $(".to_jquery").on("click", () => {
        $("html")
            .stop()
            .animate({ scrollTop: $(".jquery").offset().top - 80 }, 1000);
    });
    $(".to_react").on("click", () => {
        $("html")
            .stop()
            .animate({ scrollTop: $(".react").offset().top - 80 }, 1000);
    });
    $(".to_contact").on("click", () => {
        $("html")
            .stop()
            .animate({ scrollTop: $(".section4").offset().top - 80 }, 1000);
    });
    $(".to_top").on("click", () => {
        $("html").stop().animate({ scrollTop: 0 }, 1000);
    });
});

$(function () {
    $(".toggleSlide").on("click", function () {
        $(this).parent().parent().toggleClass("active");
        $(this).parent().next().stop().slideToggle();
        // console.log($(this).parent().parent());
        if ($(this).parent().parent().is(".active")) {
            $(this).html('<i class="fa-solid fa-sort-up"></i>');
        } else {
            $(this).html('<i class="fa-solid fa-sort-down"></i>');
        }
    });
    $(".up_all").on("click", () => {
        let array = $(".s3_container").children();
        // console.log(array);
        $.map(array, (i) => {
            // console.log(i);
            $(i).children().filter(":first-child").children().html('<i class="fa-solid fa-sort-down"></i>');
            $(i).children().filter(":nth-child(2)").slideUp();
        });
    });
    $(".down_all").on("click", () => {
        let array = $(".s3_container").children();
        $.map(array, (i) => {
            // console.log(i);
            $(i).children().filter(":first-child").children().html('<i class="fa-solid fa-sort-up"></i>');
            $(i).children().filter(":nth-child(2)").slideDown();
        });
    });
});
