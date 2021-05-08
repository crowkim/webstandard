$(function(){
    /*전체메뉴*/
    $(".nav").hide();
    $(".tit .btn").click(function (e) {
        e.preventDefault();
        $(".nav").slideToggle(200);
        $(this).toggleClass("on");
    });
    /*//전체메뉴*/

    /*배너*/
    $('.ban').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true
    });
    /*//배너*/

    /*탭메뉴*/
    $(".tab_menu ul li ul").hide();
    $(".tab_menu ul li.active ul").show();
    $(".tab_menu ul li a").click(function (e) {
        e.preventDefault();
        $(this).focus();
        $(".tab_menu ul li ul").hide();
        $(this).next("ul").show();
        $(".tab_menu ul li").removeClass("active");
        $(this).parent("li").addClass("active");
        /*$(this).next("ul").show().parent("li").addClass("active").siblings("li").removeClass("active").find(">ul").hide();*/
    });
    /*//탭메뉴*/

    /*갤러리*/
    $(".gal_img").slick({
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2000
    });
    $(".play").click(function () {
        $(".gal_img").slick("slickPlay");
    });
    $(".pause").click(function () {
        $(".gal_img").slick("slickPauese");
    });
    $(".prev").click(function () {
        $(".gal_img").slick("slickPrev");
    });
    $(".next").click(function () {
        $(".gal_img").slick("slickNext");
    });
    /*//갤러리*/

    /*레이어 팝업*/
    $(".layer").click(function (e) {
        e.preventDefault();
        $("#layer").show();
    })
    $(".close").click(function (e) {
        e.preventDefault();
        $("#layer").hide();
    });

    /*윈도우 팝업*/
    $(".window").click(function (e) {
        e.preventDefault();
        window.open("popup.html", "popup01",
            "width=800,height=590,left=50,top=50,scrollbars=0,toolbar=0,menubar=0")
    })
    /*옵션 : left, top, width, height, status, toolbar, location, menubar, scroollbars, fullscreen*/

    /*라이트 박스*/
    $(".lightgallery").lightgallery();
    /*//라이트 박스*/
})