$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 80) {
            $(".nav-bar").removeAttr("id");
            $(".nav-bar").addClass("navbar-scroll").css("margin-top", "-20px");
        } else($(".nav-bar").removeClass("navbar-scroll"))
    })
})