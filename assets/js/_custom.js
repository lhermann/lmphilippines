$(".zoomable img").on("click", function() {
    // $(".zoom").removeClass("zoom").siblings();
    $(this).toggleClass("zoom");
    $(this).parent("span").siblings().children().removeClass("zoom");
    // $(this).toggleClass("zoom").siblings().removeClass("zoom");
    // console.log( $(this).parent("span").siblings() );
});
