var flag = true;



$(document).ready(function(){

$(".circle, .triangle-up, .yin-yang, .star, .moon, .octagon, .cross").click(function(){
    $(".black").click(function(){
        $("#target").css("background", "black");
    });
    $(".red").click(function(){
        $("#target").css("background", "#c00000");
    });
    $(".yellowGreen").click(function(){
        $("#target").css("background", "#92d050");
    });
    $(".blue").click(function(){
        $("#target").css("background", "#002060");
    });
    $(".skyBlue").click(function(){
        $("#target").css("background", "#5b9bd5");
    });
    $(".lightOrange").click(function(){
        $("#target").css("background", "#ffc000");
    });
    $(".green").click(function(){
        $("#target").css("background", "#00b050");
    });
    $(".purple").click(function(){
        $("#target").css("background", "#7030a0");
    });
    $(".orange").click(function(){
        $("#target").css("background", "#ed7d31");
    });
    $(".yellow").click(function(){
        $("#target").css("background", "#ffff00");
    });
    $(".lightblue").click(function(){
        $("#target").css("background", "#00b0f0");
    });
    $(".pink").click(function(){
        $("#target").css("background", "#f2cff3");
    });


});




    $(".circle").click(function(){
        $("#target").addClass("circle");
        $("#target").removeClass(["heart", "triangle-up", "star", "moon", "octagon", "cross", "yin-yang"]);
        $("#target").removeClass(["red","black","yellowGreen","blue","skyBlue","lightOrange", "green" , "purple", "orange", "yellow", "lightblue", "pink" ]);
 

        $("#target").removeAttr("style");

        flag=true;
        $("#cssProp").empty();
        if(flag){
            $("#cssProp").append(" width: 100px; <br> height: 100px;<br> background: red;<br> -moz-border-radius: 50px;<br> -webkit-border-radius: 50px;<br>border-radius: 50px");

            flag = false;
        } else{}

  
    });

    $(".moon").click(function(){
        $("#target").addClass("moon");
        $("#target").removeClass(["circle", "triangle-up", "star", "heart", "octagon", "cross", "yin-yang"]);
        $("#target").removeClass(["red","black","yellowGreen","blue","skyBlue","lightOrange", "green" , "purple", "orange", "yellow", "lightblue", "pink" ]);

        $("#target").removeAttr("style");

        flag=true;
        $("#cssProp").empty();
        if(flag){
            $("#cssProp").append("width: 100px;<br> height: 100px;<br> border-radius: 50%;<br> box-shadow: 15px 15px 0 0 red;<br> margin-top: 70px;");

            flag = false;
        } else{
            
        }
    });

    $(".triangle-up").click(function(){
        $("#target").addClass("triangle-up");
        $("#target").removeClass(["circle", "heart", "star", "moon", "octagon", "cross", "yin-yang"]);
        $("#target").removeClass(["red","black","yellowGreen","blue","skyBlue","lightOrange", "green" , "purple", "orange", "yellow", "lightblue", "pink" ]);

        $("#target").removeAttr("style");

        flag=true;
        $("#cssProp").empty();
        if(flag){
            $("#cssProp").append("width: 0;<br>height: 0;<br>  border-left: 50px solid transparent;<br> border-right: 50px solid transparent; <br>border-bottom: 100px solid red");
            flag = false;
        } else{
            
        }
    });

    $(".star").click(function(){
        $("#target").addClass("star");
        $("#target").removeClass(["circle", "triangle-up", "heart", "moon", "octagon", "cross", "yin-yang"]);
        $("#target").removeClass(["red","black","yellowGreen","blue","skyBlue","lightOrange", "green" , "purple", "orange", "yellow", "lightblue", "pink" ]);

        $("#target").removeAttr("style");


        flag=true;
        $("#cssProp").empty();
        if(flag){
            $("#cssProp").append("position: relative;<br> margin-top: 2px;<br> width: 0;<br> height: 0; <br> margin-left: .9em;<br> margin-right: .9em;<br> margin-bottom: 1.2em;<br> border-right:  .3em solid transparent;<br> border-bottom: .7em  solid red;<br> border-left:   .3em solid transparent; <br>font-size: 60px;");

            flag = false;
        } else{
            
        }
    });

    $(".octagon").click(function(){
        $("#target").addClass("octagon");
        $("#target").removeClass(["circle", "triangle-up", "star", "moon", "heart", "cross", "yin-yang"]);
        $("#target").removeClass(["red","black","yellowGreen","blue","skyBlue","lightOrange", "green" , "purple", "orange", "yellow", "lightblue", "pink" ]);

        $("#target").removeAttr("style");

        flag=true;
        $("#cssProp").empty();
        if(flag){
            $("#cssProp").append(" width: 100px;<br> height: 100px;<br> background: red;<br> position: relative;<br> margin-left: 50px;");

            flag = false;
        } else{
            
        }
    });

    $(".heart").click(function(){
        $("#target").addClass("heart");
        $("#target").removeClass(["circle", "triangle-up", "star", "moon", "octagon", "cross", "yin-yang"]);
        $("#target").removeClass(["red","black","yellowGreen","blue","skyBlue","lightOrange", "green" , "purple", "orange", "yellow", "lightblue", "pink" ]);

        
        $("#target").removeAttr("style");

        flag=true;
        $("#cssProp").empty();
        if(flag){
            $("#cssProp").append(" position: relative;<br>width: 100px;<br>height: 90px;<br> margin-top: 30px;");
            flag = false;
        } else{
            
        }
    });

    $(".cross").click(function(){
        $("#target").addClass("cross");
        $("#target").removeClass(["circle", "triangle-up", "star", "moon", "octagon", "heart", "yin-yang"]);
        $("#target").removeClass(["red","black","yellowGreen","blue","skyBlue","lightOrange", "green" , "purple", "orange", "yellow", "lightblue", "pink" ]);

        $("#target").removeAttr("style");

        flag=true;
        $("#cssProp").empty();
        if(flag){
            $("#cssProp").append("background: red;<br>height: 100px;<br>position: relative;<br> width: 20px;<br>margin-left: 90px;");

            flag = false;
        } else{
            
        }
    });

    $(".yin-yang").click(function(){
        $("#target").addClass("yin-yang");
        $("#target").removeClass(["circle", "triangle-up", "star", "moon", "octagon", "cross", "heart"]);
        $("#target").removeClass(["red","black","yellowGreen","blue","skyBlue","lightOrange", "green" , "purple", "orange", "yellow", "lightblue", "pink" ]);

        $("#target").removeAttr("style");

        flag=true;
        $("#cssProp").empty();
        if(flag){
            $("#cssProp").append(" width: 96px;<br>height: 48px;<br>background: #eee;<br> border-color: red;<br> border-style: solid;<br>border-width: 2px 2px 50px 2px;<br>border-radius: 100%;<br>position: relative;");

            flag = false;
        } else{
            
        }
    });






    $(".black").click(function(){
        $("#target").addClass("black");
        
        $("#target").removeClass(["red","yellowGreen","blue","skyBlue","lightOrange", "green" , "purple", "orange", "yellow", "lightblue", "pink" ]);
       
        
        flag=true;
        $("#cssProp").empty();
        if(flag){
            $("#cssProp").append($("#target").attr("style") + "<br>background: #0000;");

            flag = false;
        } else{
            
        }

        
        


    });

    $(".red").click(function(){
        $("#target").addClass("red");
        $("#target").removeClass(["black","yellowGreen","blue","skyBlue","lightOrange", "green" , "purple", "orange", "yellow", "lightblue", "pink" ]);


        flag=true;
        $("#cssProp").empty();

        if(flag){
            $("#cssProp").append($("#target").attr("style") + "<br>background: #c00000;");

            flag = false;
        } else{}
        
        
    });

    $(".yellowGreen").click(function(){
        $("#target").addClass("yellowGreen");
       
        $("#target").removeClass(["red","black","blue","skyBlue","lightOrange", "green" , "purple", "orange", "yellow", "lightblue", "pink" ]);


        flag=true;
        $("#cssProp").empty();

        if(flag){
            $("#cssProp").append($("#target").attr("style") + "<br>background: #92d050;");

            flag = false;
        } else{}
    });

    $(".blue").click(function(){
        $("#target").addClass("blue");
             $("#target").removeClass(["red","yellowGreen","blue","skyBlue","lightOrange", "green" , "purple", "orange", "yellow", "lightblue", "pink" ]);


        flag=true;
        $("#cssProp").empty();

        if(flag){
            $("#cssProp").append($("#target").attr("style") + "<br>background: #002060;");

            flag = false;
        } else{}
    });

    $(".skyBlue").click(function(){
        $("#target").addClass("skyBlue");
        $("#target").removeClass(["red","yellowGreen","blue","black","lightOrange", "green" , "purple", "orange", "yellow", "lightblue", "pink" ]);

        flag=true;
        $("#cssProp").empty();

        if(flag){
            $("#cssProp").append($("#target").attr("style") + "<br>background: #5b9bd5;");

            flag = false;
        } else{}
    });

    $(".lightOrange").click(function(){
        $("#target").addClass("lightOrange");
        $("#target").removeClass(["red","yellowGreen","blue","skyBlue","black", "green" , "purple", "orange", "yellow", "lightblue", "pink" ]);


        flag=true;
        $("#cssProp").empty();

        if(flag){
            $("#cssProp").append($("#target").attr("style") + "<br>background: #ffc000;");

            flag = false;
        } else{}
    });

    $(".green").click(function(){
        $("#target").addClass("green");
        $("#target").removeClass(["red","yellowGreen","blue","skyBlue","lightOrange", "black" , "purple", "orange", "yellow", "lightblue", "pink" ]);


        flag=true;
        $("#cssProp").empty();

        if(flag){
            $("#cssProp").append($("#target").attr("style") + "<br>background: #00b050;");

            flag = false;
        } else{}
    });

    $(".purple").click(function(){
        $("#target").addClass("purple");
        $("#target").removeClass(["red","yellowGreen","blue","skyBlue","lightOrange", "green" , "black", "orange", "yellow", "lightblue", "pink" ]);


        flag=true;
        $("#cssProp").empty();

        if(flag){
            $("#cssProp").append($("#target").attr("style") + "<br>background: #7030a0;");

            flag = false;
        } else{}
    });

    $(".orange").click(function(){
        $("#target").addClass("orange");
        $("#target").removeClass(["red","yellowGreen","blue","skyBlue","lightOrange", "green" , "purple", "black", "yellow", "lightblue", "pink" ]);


        flag=true;
        $("#cssProp").empty();

        if(flag){
            $("#cssProp").append($("#target").attr("style") + "<br>background: #ffff00;");

            flag = false;
        } else{}
    });

    $(".yellow").click(function(){
        $("#target").addClass("yellow");
        $("#target").removeClass(["red","yellowGreen","blue","skyBlue","lightOrange", "green" , "purple", "orange", "black", "lightblue", "pink" ]);


        flag=true;
        $("#cssProp").empty();

        if(flag){
            $("#cssProp").append($("#target").attr("style") + "<br>background: #ffff00;");

            flag = false;
        } else{}
    });

    $(".lightblue").click(function(){
        $("#target").addClass("lightblue");
        $("#target").removeClass(["red","yellowGreen","blue","skyBlue","lightOrange", "green" , "purple", "orange", "yellow", "black", "pink" ]);


        flag=true;
        $("#cssProp").empty();

        if(flag){
            $("#cssProp").append($("#target").attr("style") + "<br>background: #00b0f0;");

            flag = false;
        } else{}
        
    });

    $(".pink").click(function(){
        $("#target").addClass("pink");
        $("#target").removeClass(["red","yellowGreen","blue","skyBlue","lightOrange", "green" , "purple", "orange", "yellow", "lightblue", "black" ]);


        
        $("#cssProp").empty();
        flag=true;
       
        if(flag){
            
            $("#cssProp").append($("#target").attr("style") + "<br> background: #f2cff3;");

            flag = false;
        } else{}
    });
});