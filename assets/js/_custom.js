(function() {
    $(".u-zoom").on("click", function() {
        $(this).toggleClass("is-zoomed");
    });
})();

$.featherlightGallery.prototype.afterContent = function() {
    var caption = this.$currentTarget.find("img").attr("alt");
    this.$instance.find(".featherlight-caption").remove();
    if (caption) {
        $('<div class="featherlight-caption">')
            .text(caption)
            .appendTo(this.$instance.find(".featherlight-content"));
    }
};

$(".jsFeatherlightGallery a").featherlightGallery({
    previousIcon:
        '<spanc class="u-ic u-ic--arrow-left"></span>' /* Code that is used as previous icon */,
    nextIcon:
        '<spanc class="u-ic u-ic--arrow-right"></span>' /* Code that is used as next icon */
});
