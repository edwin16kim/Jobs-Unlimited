// navbar sticky position
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 80) {
            $(".nav-bar").removeAttr("id");
            $(".nav-bar").addClass("navbar-scroll").css("margin-top", "-20px");
        } else {
            $(".nav-bar").removeClass("navbar-scroll")
        }
    })
    //  Navigation menu
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
    // Input [type = file]
    $("#displayFile").click(function () {
        $("#input-file").slideDown();
        $("#submitFiles").slideDown();
    })

    $("#form").submit(function (event) {
        event.preventDefault();

        if (($("#input-file").val() === "") || ($("#input-file")[0].files.length < 2)) {
            $("#form-error2").hide();
            $("#form-error").slideDown();
            return false;
        } else if ($("#input-file")[0].files.length > 2) {
            $("#form-error").hide();
            $("#form-error2").slideDown();
            return false;
        } else {
            alert("Thanks you for submitting your documents,we'll get back to you after we've reviewed them.");
            $("#submitFiles").prop("disabled", true).css("cursor", "not-allowed")
            $("#form-error").slideUp();
            $("#form-error2").slideUp();
            $("#input-file").slideUp();
            $("#submitFiles").slideUp();
            $("#form").trigger("reset");
            return true;
        }
    })

    // Apply jobs form
    $("#submit-application").focus(function () {
        $(this).css("background-color", "lightgrey");
    })

    $(".apply-form").submit(function (event) {
        event.preventDefault();

        if ($(".apply-form-inputs").val() === "") {
            $(".apply-form-inputs").css("border", "1px solid red");
            $("#form-input-name").focus();
            return false;
        } else {
            alert("Thank you for applying.We,ll reach up to you shortly");
            $(".apply-form-inputs").css("border", "1px solid black");
            $("#submit-application").css("background-color", "transparent")
            $(".apply-form").trigger("reset");
            return true;
        }
    })

    $(".job-btns").click(function () {
        $(".apply-form").fadeIn();
        $(".body-overlay").fadeIn();
    })

    $("#applyHide").click(function () {
        $(".apply-form").fadeOut();
        $(".body-overlay").fadeOut();
    })

    // Post jobs form
    $("#submit-jobs").focus(function () {
        $(this).css("background-color", "lightgrey");
    })

    $(".jobs-form").submit(function (event) {
        event.preventDefault();

        if ($(".form-inputs").val() === "") {

            return false;
        } else {
            alert("Thank you! Your job was posted");
            $("#submit-jobs").css("background-color", "transparent")
            $(".jobs-form").trigger("reset");
            return true;
        }
    })

    $(".post-btn").click(function () {
        $(".jobs-form").fadeIn();
        $(".body-overlay").fadeIn();
    })

    $("#jobsHide").click(function () {
        $(".jobs-form").fadeOut();
        $(".body-overlay").fadeOut();
    })
})