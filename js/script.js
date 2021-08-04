$(function () {
    $(window).scroll(function () {
            if ($(this).scrollTop() > 80) {
                $(".nav-bar").removeAttr("id");
                $(".nav-bar").addClass("navbar-scroll").css("margin-top", "-20px");
            } else {
                $(".nav-bar").removeClass("navbar-scroll")
        }
    })

    $("#menu-bar").click(function(){
        $(".menu").slideDown();
        $(".nav-nav-brand").removeAttr("id");
        $(".nav-nav-brand").addClass("menu-nav-brand");
        $(".menu-cancel").fadeIn();
        $(".body-overlay").fadeIn();
    })

    $(".menu-cancel").click(function(){
        $(".menu").slideUp();
        $(".nav-nav-brand").removeClass("menu-nav-brand");
        $(".nav-nav-brand").attr("id", "navbar-brand");
        $(".menu-cancel").fadeOut();
        $(".body-overlay").fadeOut();
    })
})