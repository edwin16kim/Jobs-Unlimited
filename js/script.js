// user interface
$(document).ready(function(){
    $("#limit").addClass("text-center");
    $("#available, #jobsView, .card").addClass("text-center");
    $("#copyright").addClass("text-center");
    $(".buttons, .failed").addClass("text-center");
    $(".signUp, .failed").hide();
})

// Businness logic

$(document).ready(function(){
    //header
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
    // On clicking the sign in button
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
            alert("Please fill the input fields")
        }
        else{
            $(".failed").show();
        }
    })
    // create account button to show sign up form and hide sign in form
    $("#newAccount").click(function(){
        $(".signUp").show(500);
        $(".sign").hide();
    })
    // Returns user to the user sign In form from create new account form
    $("#logIn").click(function(){
        $(".sign").show();
        $(".signUp").hide(500);
    })
})