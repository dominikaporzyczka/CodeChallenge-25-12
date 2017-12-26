
$(document).ready(function() {
    $(".web").on("click", function(){
        $(this).next().toggleClass("active");
        $(".web").toggleClass("active");
        $(".web-box").toggleClass("orange");
    });

    $(".design").on("click", function(){
        $(this).next().toggleClass("active");
        $(".design").toggleClass("active");
        $(".design-box").toggleClass("yellow");
    });

})