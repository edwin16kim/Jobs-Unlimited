//form validation
function validate(){
    var username=document.getElementById("name1").value;
    var email=document.getElementById("email1").value;
    var message=document.getElementById("messo").value;

    if(username==''){
        alert('enter your name');
        username.focus();
        return false;
        
    }else if(email==''){
        alert('enter your email address');
        email.focus();
        return false
    }else if(message==''){
        alert('enter your message')
        message.focus()
        return false;
        
    }else
    alert('Dear '+username+'\n  your message has been received.')
}

//SUBSCRIBE form validation

function subcribe(){
    var username=document.getElementById("name2").value;
    var email=document.getElementById("email2").value;
    //var radio=document.getElementById("select").value;

    if(username==''){
        alert('enter your name');
        username.focus();
        return false;
        
    }else if(email==''){
        alert('enter your email address');
        email.focus();
        return false
    }else if(!document.getElementById("daily").checked && !document.getElementById("weekly").checked 
    && !document.getElementById("monthly").checked) {
        alert('select duration')
        message.focus()
        return false;
        
    }else
    alert('Dear '+username+'\n  your have subscribed to receive updates.')
}

//hiding and showing subscribe form
$(document).ready(function(){
    $(".click").click(function(event){
        event.preventDefault();
        $("#form2").show();
    })
    $("#cancelButton").click(function(event){
        event.preventDefault();
        $("#form2").hide();
    })
})

//menu bar
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