var flag = true;

$(document).ready(function(){
    $(".circle").click(function(){
        $("#target").addClass("circle");
        $("#target").removeClass(["heart", "triangle-up", "star", "moon", "octagon", "cross", "yin-yang"]);
        

        $("#target").removeAttr("style");
    });

    $(".moon").click(function(){
        $("#target").addClass("moon");
        $("#target").removeClass(["circle", "triangle-up", "star", "heart", "octagon", "cross", "yin-yang"]);

        $("#target").removeAttr("style");
    });

    $(".triangle-up").click(function(){
        $("#target").addClass("triangle-up");
        $("#target").removeClass(["circle", "heart", "star", "moon", "octagon", "cross", "yin-yang"]);

        $("#target").removeAttr("style");
    });

    $(".star").click(function(){
        $("#target").addClass("star");
        $("#target").removeClass(["circle", "triangle-up", "heart", "moon", "octagon", "cross", "yin-yang"]);

        $("#target").removeAttr("style");
    });

    $(".octagon").click(function(){
        $("#target").addClass("octagon");
        $("#target").removeClass(["circle", "triangle-up", "star", "moon", "heart", "cross", "yin-yang"]);

        $("#target").removeAttr("style");
    });

    $(".heart").click(function(){
        $("#target").addClass("heart");
        $("#target").removeClass(["circle", "triangle-up", "star", "moon", "octagon", "cross", "yin-yang"]);

        
        $("#target").removeAttr("style");
    });

    $(".cross").click(function(){
        $("#target").addClass("cross");
        $("#target").removeClass(["circle", "triangle-up", "star", "moon", "octagon", "heart", "yin-yang"]);

        $("#target").removeAttr("style");
    });

    $(".yin-yang").click(function(){
        $("#target").addClass("yin-yang");
        $("#target").removeClass(["circle", "triangle-up", "star", "moon", "octagon", "cross", "heart"]);

        $("#target").removeAttr("style");
    });






    $(".black").click(function(){
        $("#target").addClass("black");
        
        $("#target").removeClass(["red","yellowGreen","blue","skyBlue","lightOrange", "green" , "purple", "orange", "yellow", "lightblue", "pink" ]);
       
        
        flag=true;
        $("#cssProp").empty();
        if(flag){
            $("#cssProp").append($("#target").attr("style") + "\nbackground: #0000;");

            flag = false;
        } else{
            // $("#cssProp").empty();
        }
        


    });

    $(".red").click(function(){
        $("#target").addClass("red");
        $("#target").removeClass(["black","yellowGreen","blue","skyBlue","lightOrange", "green" , "purple", "orange", "yellow", "lightblue", "pink" ]);


        flag=true;
        $("#cssProp").empty();

        if(flag){
            $("#cssProp").append($("#target").attr("style") + "\nbackground: #c00000;");

            flag = false;
        } else{}
        
        
    });

    $(".yellowGreen").click(function(){
        $("#target").addClass("yellowGreen");
       
        $("#target").removeClass(["red","black","blue","skyBlue","lightOrange", "green" , "purple", "orange", "yellow", "lightblue", "pink" ]);


        flag=true;
        $("#cssProp").empty();

        if(flag){
            $("#cssProp").append($("#target").attr("style") + "\nbackground: #92d050;");

            flag = false;
        } else{}
    });

    $(".blue").click(function(){
        $("#target").addClass("blue");
             $("#target").removeClass(["red","yellowGreen","blue","skyBlue","lightOrange", "green" , "purple", "orange", "yellow", "lightblue", "pink" ]);


        flag=true;
        $("#cssProp").empty();

        if(flag){
            $("#cssProp").append($("#target").attr("style") + "\nbackground: #002060;");

            flag = false;
        } else{}
    });

    $(".skyBlue").click(function(){
        $("#target").addClass("skyBlue");
        $("#target").removeClass(["red","yellowGreen","blue","black","lightOrange", "green" , "purple", "orange", "yellow", "lightblue", "pink" ]);

        flag=true;
        $("#cssProp").empty();

        if(flag){
            $("#cssProp").append($("#target").attr("style") + "\nbackground: #5b9bd5;");

            flag = false;
        } else{}
    });

    $(".lightOrange").click(function(){
        $("#target").addClass("lightOrange");
        $("#target").removeClass(["red","yellowGreen","blue","skyBlue","black", "green" , "purple", "orange", "yellow", "lightblue", "pink" ]);


        flag=true;
        $("#cssProp").empty();

        if(flag){
            $("#cssProp").append($("#target").attr("style") + "\nbackground: #ffc000;");

            flag = false;
        } else{}
    });

    $(".green").click(function(){
        $("#target").addClass("green");
        $("#target").removeClass(["red","yellowGreen","blue","skyBlue","lightOrange", "black" , "purple", "orange", "yellow", "lightblue", "pink" ]);


        flag=true;
        $("#cssProp").empty();

        if(flag){
            $("#cssProp").append($("#target").attr("style") + "\nbackground: #00b050;");

            flag = false;
        } else{}
    });

    $(".purple").click(function(){
        $("#target").addClass("purple");
        $("#target").removeClass(["red","yellowGreen","blue","skyBlue","lightOrange", "green" , "black", "orange", "yellow", "lightblue", "pink" ]);


        flag=true;
        $("#cssProp").empty();

        if(flag){
            $("#cssProp").append($("#target").attr("style") + "\nbackground: #7030a0;");

            flag = false;
        } else{}
    });

    $(".orange").click(function(){
        $("#target").addClass("orange");
        $("#target").removeClass(["red","yellowGreen","blue","skyBlue","lightOrange", "green" , "purple", "black", "yellow", "lightblue", "pink" ]);


        flag=true;
        $("#cssProp").empty();

        if(flag){
            $("#cssProp").append($("#target").attr("style") + "\nbackground: #ffff00;");

            flag = false;
        } else{}
    });

    $(".yellow").click(function(){
        $("#target").addClass("yellow");
        $("#target").removeClass(["red","yellowGreen","blue","skyBlue","lightOrange", "green" , "purple", "orange", "black", "lightblue", "pink" ]);


        flag=true;
        $("#cssProp").empty();

        if(flag){
            $("#cssProp").append($("#target").attr("style") + "\nbackground: #ffff00;");

            flag = false;
        } else{}
    });

    $(".lightblue").click(function(){
        $("#target").addClass("lightblue");
        $("#target").removeClass(["red","yellowGreen","blue","skyBlue","lightOrange", "green" , "purple", "orange", "yellow", "black", "pink" ]);


        flag=true;
        $("#cssProp").empty();

        if(flag){
            $("#cssProp").append($("#target").attr("style") + "\nbackground: #00b0f0;");

            flag = false;
        } else{}
        
    });

    $(".pink").click(function(){
        $("#target").addClass("pink");
        $("#target").removeClass(["red","yellowGreen","blue","skyBlue","lightOrange", "green" , "purple", "orange", "yellow", "lightblue", "black" ]);


        
        $("#cssProp").empty();
        flag=true;
       
        if(flag){
            
            $("#cssProp").append($("#target").attr("style") + "\n background: #f2cff3;");

            flag = false;
        } else{}
    });
});