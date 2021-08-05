// user interface
$(document).ready(function(){
    $("#limit").addClass("text-center");
    $("#available, #jobsView, .card").addClass("text-center");
    $("#copyright").addClass("text-center");
    $(".buttons").addClass("text-center");
    $(".signUp").hide();
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
     })
    // On clicking the sign in button
    $("#enter").click(function(){
        var personName = $("#userName").val();
        if(personName == ""){
            alert("Please enter Username");
        }
        else{
            return true;
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