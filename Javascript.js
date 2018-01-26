$(document).ready(function () {
    
    $("#upbutton").click(function () {//clickbutton function
        $("html, body").animate({ scrollTop: 0 }, 800); //animation to top
        return false;
    });//end of function

    //clickbuttonfadeout function
    $("#upbutton").hide(); // default fadeout
    window.onscroll = scrollFunction; //function repeat after scroll
    function scrollFunction() {
        if ($(window).scrollTop() > ($(window).height() / 10) * 4) { //if scrollpos > windowheight
            $("#upbutton").fadeIn(800); //fade-in
        }
        else $("#upbutton").fadeOut(800);//fade-out
    }

    $("#button1").click(function () {//clickupbutton function
        $("html, body").animate({ scrollTop: $(window).height() * 2 + $(window).height() / 10  * 2}, 800); //animation to destination
        return false;
    });//end of function
    $("#button2").click(function () {//clickupbutton function
        $("html, body").animate({ scrollTop: $(window).height() * 3 + $(window).height() / 10  * 3}, 1000); //animation to destination
        return false;
    });//end of function
    $("#button3").click(function () {//clickupbutton function
        $("html, body").animate({ scrollTop: $(window).height() * 4 + $(window).height() / 10  * 4}, 1400); //animation to destination
        return false;
    });//end of function
    $("#button4").click(function () {//clickupbutton function
        $("html, body").animate({ scrollTop: $(window).height() * 5 + $(window).height() / 10  * 5}, 1700); //animation to destination
        return false;
    });//end of function
    $("#button5").click(function () {//clickupbutton function
        $("html, body").animate({ scrollTop: $(window).height() * 6 + $(window).height() / 10  * 6}, 2000); //animation to destination
        return false;
    });//end of function
    $("#button6").click(function () {//clickupbutton function
        $("html, body").animate({ scrollTop: $(window).height() + $(window).height() / 10}, 600); //animation to destination
        return false;
    });//end of function


});//end of Jquery


