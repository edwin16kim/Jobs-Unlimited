$(function(){
   $(window).scroll(function(){
       if ($(this).scrollTop() > 100){
           $("#navbar").addClass("navbar-scroll").css("margin-top", "-20px");
       }

       else ($("#navbar").removeClass("navbar-scroll"))
   })
})