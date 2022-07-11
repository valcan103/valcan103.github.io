//slick 슬라이드 설정
$(function () {
    $(".slide").slick({
        arrows: false,
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        variableWidth: true,
        adaptiveHeight: true,
        pauseOnHover: true,
        pauseOnFocus: true,
    });
    $(".slide #slick-slide-control00").text("노을");
    $(".slide #slick-slide-control01").text("불꽃놀이");
    $(".slide #slick-slide-control02").text("거미줄");
    $(".slide #slick-slide-control03").text("산길");
});

//animate of scroll 설정
$(function () {
    AOS.init();
});

//splitting 설정
$(function () {
    Splitting();
});

//스크롤 효과
$(function () {
    $(".more").on("click", () => {
        $("html")
            .stop()
            .animate({ scrollTop: $(".content").offset().top - 180 }, 400);
    });
});

$(function () {
    $(".to_top").on("click", () => {
        $("html").stop().animate({ scrollTop: 0 }, 400);
    });
});

var navScroll = 0;
navScroll = $(document).scrollTop();
fixHeader();

$(window).on("scroll resize", () => {
    navScroll = $(document).scrollTop();
    fixHeader();
    activeFooter();
    console.log(
        "top" + $(document).scrollTop(),
        "footer" + ($("footer").offset().top - 1200)
    );
});

//네브바 스크롤에 따라 변화
function fixHeader() {
    if (navScroll > 600) {
        $(".nav_container").addClass("active");
        $(".img_container").attr("padding-top", "100px");
    } else {
        $(".nav_container").removeClass("active");
        $(".img_container").removeAttr("padding-top");
    }
}

//네브바 메뉴 클릭시 이동효과
$(function () {
    $("#content1").on("click", () => {
        $("html")
            .stop()
            .animate({ scrollTop: $(".content1").offset().top - 180 }, 400);
    });
});

$(function () {
    $("#content2").on("click", () => {
        $("html")
            .stop()
            .animate({ scrollTop: $(".content2").offset().top - 50 }, 400);
    });
});

$(function () {
    $("#content3").on("click", () => {
        $("html")
            .stop()
            .animate({ scrollTop: $(".content3").offset().top - 100 }, 400);
    });
});

$(function () {
    $("#content4").on("click", () => {
        $("html")
            .stop()
            .animate({ scrollTop: $(".content4").offset().top - 350 }, 400);
    });
});

//아코디언 메뉴 활성화
$(function () {
    $(".arcodian").on("click", function () {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(this).children(".answer").stop().slideUp();
        } else {
            var index = $(".arcodian").index(this);
            $(".arcodian").siblings().removeClass("active");
            $(".arcodian").children(".answer").stop().slideUp();
            $(".arcodian").eq(index).addClass("active");
            $(this).children(".answer").stop().slideDown();
        }
    });
});

//모달창
$(function () {
    $(".open_modal").on("click", () => {
        $(".modal").fadeIn();
        $(".modal_bg").fadeIn();
    });
});

$(function () {
    $(".close_modal, .modal_bg").on("click", () => {
        $(".modal").fadeOut();
        $(".modal_bg").fadeOut();
    });
});

//푸터 스크롤위치로 활성화
function activeFooter() {
    if ($(document).scrollTop() > $("footer").offset().top - 1200) {
        $(".waves").addClass("active");
    } else {
        $(".waves").removeClass("active");
    }
}
