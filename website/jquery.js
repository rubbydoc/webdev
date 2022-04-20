// $(document).ready(function(){
//     $("#moon").click(function(){
//       $("p").css("color", "white");
//       $("h1").css("color", "white");
//       $("h2").css("color", "white");
//       $(".wrapper").css("background", "black");
//       $(".blog_post").css("background", "black");

//     });
//   });
$(document).ready(function(){

   
    $("#moon").click(function(){
        
        $("#moon").hide();
        $("#sun").show();
        $("p").css("color", "white");
      $("h1").css("color", "white");
      $("h2").css("color", "white");
      $(".wrapper").css("background", "black");
      $(".blog_post").css("background", "black");
      
        



    })
});


$(document).ready(function(){
    $("#sun").click(function(){
        $("#sun").hide();
        $("#moon").show();
        // $("h1").css("color", "#183153");
        // $("h2").css("color", "#183153");
    })
});