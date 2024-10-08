$(document).ready(function(){
    $(".btn").click(function(){
        $(".itemlist").append('<p class="add">added text</p>');
        $(".itemlist").css("background","red")
        $(".contain").toggleClass("square")
    });
    $(".remove").click(function(){
        $(".itemlist").children()[0].remove();
    })

})