$(document).ready(function(){
    $(".blog-teaser-container").slice(0, 10).show();
    $("#loadMore").on("click", function(e){
        e.preventDefault();
        $(".blog-teaser-container:hidden").slice(0, 10).slideDown();
        if($(".blog-teaser-container:hidden").length == 0) {
            $("#loadMore").text("That's all!").addClass("noContent");
        }
    });
})