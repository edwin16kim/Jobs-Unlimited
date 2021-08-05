$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 80) {
            $(".nav-bar").removeAttr("id");
            $(".nav-bar").addClass("navbar-scroll").css("margin-top", "-20px");
        } else($(".nav-bar").removeClass("navbar-scroll"))
    })

    $("#menu-bar").click(function () {
        $(".menu").slideDown();
        $(".nav-nav-brand").removeAttr("id");
        $(".nav-nav-brand").addClass("menu-nav-brand");
        $(".nav-bar-brand").fadeOut();
        $(".menu-cancel").fadeIn();
        $(".body-overlay").fadeIn();
    })
    $(".menu-cancel").click(function () {
        $(".menu").slideUp();
        $(".nav-nav-brand").removeClass("menu-nav-brand");
        $(".nav-nav-brand").attr("id", "navbar-brand");
        $(".nav-bar-brand").fadeIn();
        $(".menu-cancel").fadeOut();
        $(".body-overlay").fadeOut();
    })
})