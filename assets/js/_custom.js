$(".u-zoomable").on("click", function() {
    hasClass = $(this).hasClass("zoom");
    $(".zoom").removeClass("zoom");
    if( !hasClass ) {
        $(this).addClass("zoom");
    }
});
