$(document).ready(function(){
    $(".blog-links").slice(0, 10).show();
    $("#loadMore").on("click", function(e){
        e.preventDefault();
        $(".blog-links:hidden").slice(0, 10).slideDown();
        if($(".blog-links:hidden").length == 0) {
            $("#loadMore").text("That's all!").addClass("noContent");
        }
    });
})