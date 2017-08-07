$(".u-zoom").on("click", function() {
    $(this).toggleClass("is-zoomed");
});

// $(document).ready(function(){
// });

// $.featherlightGallery();
// $.featherlightGallery.defaults = {
//     previousIcon: '123'
// }


$('.jsFeatherlightGallery a').featherlightGallery({
    previousIcon: '<spanc class="u-ic u-ic--arrow-left"></span>',     /* Code that is used as previous icon */
    nextIcon: '<spanc class="u-ic u-ic--arrow-right"></span>',         /* Code that is used as next icon */
});
