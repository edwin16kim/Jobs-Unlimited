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