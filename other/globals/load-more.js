$(document).ready(function(){
    $(".blog-links-container").slice(0, 10).show();
    $("#loadMore").on("click", function(e){
        e.preventDefault();
        $(".blog-links-container:hidden").slice(0, 10).slideDown();
        if($(".blog-links-container:hidden").length == 0) {
            $("#loadMore").text("That's all!").addClass("noContent");
        }
    });
})