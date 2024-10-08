// this is to hide text
$(document).ready(function(){
    $("#hide").click(function(){
        $("p").hide();
    });

    $("#show").click(function(){
        $("p").show();
    });

    $(".butt").click(function(){
        $(".water").fadeIn();
        $(".cole").fadeIn(2000);
        $(".moo").fadeIn("slow");
    });

    $(".slide").click(function(){
        // $(".container").slideDown();
        $(".container").slideToggle();
    });


});

// this is to show text




    

