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