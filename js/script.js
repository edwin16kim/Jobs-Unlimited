// user interface
$(document).ready(function(){
    $("#limit").addClass("text-center");
    $("#available, #jobsView, .card").addClass("text-center");
    $("#copyright").addClass("text-center");
    $(".buttons, .failed, .userEnter, .passEnter, .fill").addClass("text-center");
    $(".signUp, .failed, .userEnter, .passEnter, .fill").hide();
})

// Businness logic
$(document).ready(function(){
    // The navigation bar
    $(function(){
        $(window).scroll(function(){
            if ($(this).scrollTop() > 80){
             $(".nav-bar").removeAttr("id");
                $(".nav-bar").addClass("navbar-scroll").css("margin-top", "-20px");
            }
            else ($(".nav-bar").removeClass("navbar-scroll"))
        })
        $("#menu-bar").click(function(){
            $(".menu").slideDown();
            $(".nav-nav-brand").removeAttr("id");
            $(".nav-nav-brand").addClass("menu-nav-brand");
            $(".nav-bar-brand").fadeOut();
            $(".menu-cancel").fadeIn();
            $(".body-overlay").fadeIn();
        })
        $(".menu-cancel").click(function(){
            $(".menu").slideUp();
            $(".nav-nav-brand").removeClass("menu-nav-brand");
            $(".nav-nav-brand").attr("id", "navbar-brand");
            $(".nav-bar-brand").fadeIn();
            $(".menu-cancel").fadeOut();
            $(".body-overlay").fadeOut();
        })
    })
    // validate the sign in button
    $("#enter").click(function(event){
        event.preventDefault();
        var userName = $("#userName").val();
        var passWord = $("#passWord").val();
        if(userName=="admin" && passWord=="user")
        {
            document.location.href="services.html";
            return true;
        }
        else if(userName == "" && passWord == ""){
            $(".fill").show(500);
        }
        else if(userName == "" && passWord !== ""){
            $(".userEnter").show(500);
        }
        else if(passWord == "" && userName !== ""){
            $(".passEnter").show(500);
        }
        else{
            $(".failed").show(500);
        }
        $("#userName").click(function(){
            $(".fill").hide(500);
            $(".failed").hide(500);
            $("#userEnter").hide(500);
        })
        $("#passWord").click(function(){
            $(".failed").hide(500);
            $(".passEnter").hide(500);
            $(".fill").hide(500);
        })
    })
    // Validate the sign up button. create account button

    // create account button to show sign up form and hide sign in form
    $("#newAccount").click(function(){
        $(".signUp").show(500);
        $(".sign").hide(500);
    })
    // Returns user to the user sign In form from create new account form
    $("#logIn").click(function(){
        $(".sign").show(500);
        $(".signUp").hide(500);
    })
})