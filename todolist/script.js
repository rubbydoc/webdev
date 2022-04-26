$(document).ready(function(){


    $("#subtn").click(function(){
        var addItem = $("input[name=list_item]").val();
        
        $("ol").append("<li>"+addItem+"<i class='fa fa-trash'</i></li>");
        $("input[name=list_item]").val("");

        
    });

    $(document).on('click','.fa-trash, li', function(){
       
        $(this).toggleClass("strike");
        $(this).fadeOut();
        


    });
    $(".item").sortable({cursor:'pointer'});


});
