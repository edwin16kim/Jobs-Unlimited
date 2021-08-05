// user interface
$(document).ready(function () {
    $("#limit").addClass("text-center");
    $("#available, #jobsView, .card").addClass("text-center");
    $("#copyright, .confirm").addClass("text-center");
    $(".buttons, .failed, .userEnter, .passEnter, .fill").addClass("text-center");
    $("#signIn, .failed, .userEnter, .passEnter, .fill, .confirm").hide();
    $("#create1, #create2, #create3, #create4, #create5").hide();
})

// Businness logic
$(document).ready(function () {
    // The navigation bar
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
    // validate the sign in button
    $("#enter").click(function (event) {
        event.preventDefault();
        var userName = $("#userName").val();
        var passWord = $("#passWord").val();
        var createUser = $("#createUser").val();
        var createPass = $("#createPass").val();
        if (userName === createUser && passWord === createPass) {
            window.location.href = "services.html";
            return true;
        } else if (userName === "" && passWord === "") {
            $(".fill").show(500);
            return false;
        } else if (userName === "" && passWord !== "") {
            $(".userEnter").show(500);
            return false;
        } else if (passWord === "" && userName !== "") {
            $(".passEnter").show(500);
        } else {
            $(".failed").show(500);
            return false
        }
        $("#userName").click(function () {
            $(".fill").hide(500);
            $(".failed").hide(500);
            $("#userEnter").hide(500);
        })
        $("#passWord").click(function () {
            $(".failed").hide(500);
            $(".passEnter").hide(500);
            $(".fill").hide(500);
        })
    })

    // Validate the sign up button. create account button
    $("#create").click(function () {
        var createName = $("#createName").val();
        var createUser = $("#createUser").val();
        var createEmail = $("#createEmail").val();
        var createPass = $("#createPass").val();
        var createConfirm = $("#createConfirm").val();
        if (createName == "") {
            $("#create1").show(500);
        } else if (createUser == "") {
            $("#create2").show(500);
        } else if (createEmail == "") {
            $("#create3").show(500);
        } else if (createPass == "") {
            $("#create4").show(500);
        } else if (createConfirm == "") {
            $("#create5").show(500);
        } else if (createPass !== createConfirm) {
            alert("password and confirm password are not the same");
        } else {
            $(".signUp").hide(500);
            $("#signIn").show(500);
            $(".confirm").show(500);
        }
        $("#createName").click(function () {
            $("#create1").hide(500);
        })
        $("#createUser").click(function () {
            $("#create2").hide(500);
        })
        $("#createEmail").click(function () {
            $("#create3").hide(500);
        })
        $("#createPass").click(function () {
            $("#create4").hide(500);
        })
        $("#createConfirm").click(function () {
            $("#create5").hide(500);
        })
    })
    // create account button to show sign up form and hide sign in form
    $("#newAccount").click(function () {
        $(".signUp").show(500);
        $("#signIn").hide(500);
    })
    // Returns user to the user sign In form from create new account form
    $("#logIn").click(function () {
        $("#signIn").show(500);
        $(".signUp").hide(500);
    })
})