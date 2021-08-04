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
    // create account button to show sign up form and hide sign in form
    $("#newAccount").click(function(event){
        event.preventDefault();
        $(".signUp").show(500);
        $(".sign").hide();
    })
    // Returns user to the user sign In form from create new account form
    $("#logIn").click(function(){
        $(".sign").show();
        $(".signUp").hide(500);
    })
})