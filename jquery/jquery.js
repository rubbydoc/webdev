var flag = true;



$(document).ready(function () {






    $(".circle").click(function () {
        $("#target").removeClass();
        $("#target").removeAttr("style");
        $("#target").addClass("circle");

        flag = true;
        $("#cssProp").empty();
        if (flag) {
            $("#cssProp").append(" width: 100px; <br> height: 100px;<br> background: red;<br> -moz-border-radius: 50px;<br> -webkit-border-radius: 50px;<br>border-radius: 50px");

            flag = false;
        } else { }

        $(".black").click(function () {
            $("#target").css("background", "black");
            $("#target").css("border-bottom", "0");
            $("#target").css("box-shadow"," 0px 0px 0 0 black");


            flag = true;
            $("#cssProp").empty();
            if (flag) {
                $("#cssProp").append(" width: 100px; <br> height: 100px;<br> -moz-border-radius: 50px;<br> -webkit-border-radius: 50px;<br>border-radius: 50px <br> background: #0000");

                flag = false;
            } else { }

        });
        $(".red").click(function () {
            $("#target").css("background", "#c00000");
            $("#target").css("border-bottom", "0");
            $("#target").css("box-shadow"," 0px 0px 0 0 black");


            flag = true;
            $("#cssProp").empty();
            if (flag) {
                $("#cssProp").append(" width: 100px; <br> height: 100px;<br> -moz-border-radius: 50px;<br> -webkit-border-radius: 50px;<br>border-radius: 50px <br> background: #c00000");

                flag = false;
            } else { }


        });
        $(".yellowGreen").click(function () {
            $("#target").css("background", "#92d050");
            $("#target").css("border-bottom", "0");
            $("#target").css("box-shadow"," 0px 0px 0 0 black");


            flag = true;
            $("#cssProp").empty();
            if (flag) {
                $("#cssProp").append(" width: 100px; <br> height: 100px;<br> -moz-border-radius: 50px;<br> -webkit-border-radius: 50px;<br>border-radius: 50px <br> background: #92d050");

                flag = false;
            } else { }
        });
        $(".blue").click(function () {
            $("#target").css("background", "#002060");
            $("#target").css("border-bottom", "0");
            $("#target").css("box-shadow"," 0px 0px 0 0 black");


            flag = true;
            $("#cssProp").empty();
            if (flag) {
                $("#cssProp").append(" width: 100px; <br> height: 100px;<br> -moz-border-radius: 50px;<br> -webkit-border-radius: 50px;<br>border-radius: 50px <br> background: #002060");

                flag = false;
            } else { }
        });
        $(".skyBlue").click(function () {
            $("#target").css("background", "#5b9bd5");
            $("#target").css("border-bottom", "0");
            $("#target").css("box-shadow"," 0px 0px 0 0 black");


            flag = true;
            $("#cssProp").empty();
            if (flag) {
                $("#cssProp").append(" width: 100px; <br> height: 100px;<br> -moz-border-radius: 50px;<br> -webkit-border-radius: 50px;<br>border-radius: 50px <br> background: #5b9bd5");

                flag = false;
            } else { }
        });
        $(".lightOrange").click(function () {
            $("#target").css("background", "#ffc000");
            $("#target").css("border-bottom", "0");
            $("#target").css("box-shadow"," 0px 0px 0 0 black");


            flag = true;
            $("#cssProp").empty();
            if (flag) {
                $("#cssProp").append(" width: 100px; <br> height: 100px;<br> -moz-border-radius: 50px;<br> -webkit-border-radius: 50px;<br>border-radius: 50px <br> background: #ffc000");

                flag = false;
            } else { }
        });
        $(".green").click(function () {
            $("#target").css("background", "#00b050");
            $("#target").css("border-bottom", "0");
            $("#target").css("box-shadow"," 0px 0px 0 0 black");


            flag = true;
            $("#cssProp").empty();
            if (flag) {
                $("#cssProp").append(" width: 100px; <br> height: 100px;<br> -moz-border-radius: 50px;<br> -webkit-border-radius: 50px;<br>border-radius: 50px <br> background: #00b050");

                flag = false;
            } else { }
        });
        $(".purple").click(function () {
            $("#target").css("background", "#7030a0");
            $("#target").css("border-bottom", "0");
            $("#target").css("box-shadow"," 0px 0px 0 0 black");


            flag = true;
            $("#cssProp").empty();
            if (flag) {
                $("#cssProp").append(" width: 100px; <br> height: 100px;<br> -moz-border-radius: 50px;<br> -webkit-border-radius: 50px;<br>border-radius: 50px <br> background: #7030a0");

                flag = false;
            } else { }
        });
        $(".orange").click(function () {
            $("#target").css("background", "#ed7d31");
            $("#target").css("border-bottom", "0");
            $("#target").css("box-shadow"," 0px 0px 0 0 black");


            flag = true;
            $("#cssProp").empty();
            if (flag) {
                $("#cssProp").append(" width: 100px; <br> height: 100px;<br> -moz-border-radius: 50px;<br> -webkit-border-radius: 50px;<br>border-radius: 50px <br> background: #ed7d31");

                flag = false;
            } else { }
        });
        $(".yellow").click(function () {
            $("#target").css("background", "#ffff00");
            $("#target").css("border-bottom", "0");
            $("#target").css("box-shadow"," 0px 0px 0 0 black");


            flag = true;
            $("#cssProp").empty();
            if (flag) {
                $("#cssProp").append(" width: 100px; <br> height: 100px;<br> -moz-border-radius: 50px;<br> -webkit-border-radius: 50px;<br>border-radius: 50px <br> background: #ffff00");

                flag = false;
            } else { }
        });
        $(".lightblue").click(function () {
            $("#target").css("background", "#00b0f0");
            $("#target").css("border-bottom", "0");
            $("#target").css("box-shadow"," 0px 0px 0 0 black");


            flag = true;
            $("#cssProp").empty();
            if (flag) {
                $("#cssProp").append(" width: 100px; <br> height: 100px;<br> -moz-border-radius: 50px;<br> -webkit-border-radius: 50px;<br>border-radius: 50px <br> background: #00b0f0");

                flag = false;
            } else { }
        });
        $(".pink").click(function () {
            $("#target").css("background", "#f2cff3");
            $("#target").css("border-bottom", "0");
            $("#target").css("box-shadow"," 0px 0px 0 0 black");



            flag = true;
            $("#cssProp").empty();
            if (flag) {
                $("#cssProp").append(" width: 100px; <br> height: 100px;<br> -moz-border-radius: 50px;<br> -webkit-border-radius: 50px;<br>border-radius: 50px <br> background: #f2cff3");

                flag = false;
            } else { }
        });


    });




    
    $(".moon").click(function () {
        $("#target").removeClass();
        $("#target").removeAttr("style");
        $("#target").addClass("moon");
        flag = true;
        $("#cssProp").empty();
        if (flag) {
            $("#cssProp").append("width: 100px;<br> height: 100px;<br> border-radius: 50%;<br> box-shadow: 15px 15px 0 0 red;<br> margin-top: 70px;");

            flag = false;
        } else {}

        $(".black").click(function () {
            $("#target").css("box-shadow"," 15px 15px 0 0 black");
            $("#target").css("background", "transparent");
            $("#target").css("border-bottom", "0");

            flag = true;
            $("#cssProp").empty();
            if (flag) {
                $("#cssProp").append("width: 100px;<br> height: 100px;<br> border-radius: 50%;<br> box-shadow: 15px 15px 0 0 #0000;<br> margin-top: 70px;");

                flag = false;
            } else { }

        });
        $(".red").click(function () {
            $("#target").css("box-shadow"," 15px 15px 0 0 #c00000");
            $("#target").css("border-bottom", "0");

            $("#target").css("background", "transparent");
            flag = true;
            $("#cssProp").empty();
            if (flag) {
                $("#cssProp").append("width: 100px;<br> height: 100px;<br> border-radius: 50%;<br> box-shadow: 15px 15px 0 0 #c00000;<br> margin-top: 70px;");

                flag = false;
            } else { }


        });
        $(".yellowGreen").click(function () {
            $("#target").css("box-shadow"," 15px 15px 0 0 #92d050");
            $("#target").css("border-bottom", "0");

            $("#target").css("background", "transparent");
            flag = true;
            $("#cssProp").empty();
            if (flag) {
                $("#cssProp").append("width: 100px;<br> height: 100px;<br> border-radius: 50%;<br> box-shadow: 15px 15px 0 0 #92d050;<br> margin-top: 70px;");

                flag = false;
            } else { }
        });
        $(".blue").click(function () {
            $("#target").css("box-shadow"," 15px 15px 0 0 #002060");
            $("#target").css("border-bottom", "0");

            $("#target").css("background", "transparent");
            flag = true;
            $("#cssProp").empty();
            if (flag) {
                $("#cssProp").append("width: 100px;<br> height: 100px;<br> border-radius: 50%;<br> box-shadow: 15px 15px 0 0 #002060;<br> margin-top: 70px;");

                flag = false;
            } else { }
        });
        $(".skyBlue").click(function () {
            $("#target").css("box-shadow"," 15px 15px 0 0 #5b9bd5");
            $("#target").css("border-bottom", "0");

            $("#target").css("background", "transparent");
            flag = true;
            $("#cssProp").empty();
            if (flag) {
                $("#cssProp").append("width: 100px;<br> height: 100px;<br> border-radius: 50%;<br> box-shadow: 15px 15px 0 0 #5b9bd5;<br> margin-top: 70px;");

                flag = false;
            } else { }
        });
        $(".lightOrange").click(function () {
            $("#target").css("box-shadow"," 15px 15px 0 0 #ffc000");
            $("#target").css("border-bottom", "0");

            $("#target").css("background", "transparent");
            flag = true;
            $("#cssProp").empty();
            if (flag) {
                $("#cssProp").append("width: 100px;<br> height: 100px;<br> border-radius: 50%;<br> box-shadow: 15px 15px 0 0 #ffc000;<br> margin-top: 70px;");

                flag = false;
            } else { }
        });
        $(".green").click(function () {
            $("#target").css("box-shadow"," 15px 15px 0 0 #00b050");
            $("#target").css("border-bottom", "0");

            $("#target").css("background", "transparent");
            flag = true;
            $("#cssProp").empty();
            if (flag) {
                $("#cssProp").append("width: 100px;<br> height: 100px;<br> border-radius: 50%;<br> box-shadow: 15px 15px 0 0 #00b050;<br> margin-top: 70px;");

                flag = false;
            } else { }
        });
        $(".purple").click(function () {
            $("#target").css("box-shadow"," 15px 15px 0 0 #7030a0");
            $("#target").css("border-bottom", "0");

            $("#target").css("background", "transparent");
            flag = true;
            $("#cssProp").empty();
            if (flag) {
                $("#cssProp").append("width: 100px;<br> height: 100px;<br> border-radius: 50%;<br> box-shadow: 15px 15px 0 0 #7030a0;<br> margin-top: 70px;");

                flag = false;
            } else { }
        });
        $(".orange").click(function () {
            $("#target").css("box-shadow"," 15px 15px 0 0 #ed7d31");
            $("#target").css("border-bottom", "0");

            $("#target").css("background", "transparent");
            flag = true;
            $("#cssProp").empty();
            if (flag) {
                $("#cssProp").append("width: 100px;<br> height: 100px;<br> border-radius: 50%;<br> box-shadow: 15px 15px 0 0 #ed7d31;<br> margin-top: 70px;");

                flag = false;
            } else { }
        });
        $(".yellow").click(function () {
            $("#target").css("box-shadow"," 15px 15px 0 0 #ffff00");
            $("#target").css("border-bottom", "0");

            $("#target").css("background", "transparent");
            flag = true;
            $("#cssProp").empty();
            if (flag) {
                $("#cssProp").append("width: 100px;<br> height: 100px;<br> border-radius: 50%;<br> box-shadow: 15px 15px 0 0 #ffff00;<br> margin-top: 70px;");

                flag = false;
            } else { }
        });
        $(".lightblue").click(function () {
            $("#target").css("box-shadow"," 15px 15px 0 0 #00b0f0");
            $("#target").css("border-bottom", "0");

            $("#target").css("background", "transparent");
            flag = true;
            $("#cssProp").empty();
            if (flag) {
                $("#cssProp").append("width: 100px;<br> height: 100px;<br> border-radius: 50%;<br> box-shadow: 15px 15px 0 0 #00b0f0;<br> margin-top: 70px;");

                flag = false;
            } else { }
        });

        $(".pink").click(function () {
            $("#target").css("box-shadow"," 15px 15px 0 0 #f2cff3");
            $("#target").css("border-bottom", "0");

            $("#target").css("background", "transparent");

            flag = true;
            $("#cssProp").empty();
            if (flag) {
                $("#cssProp").append("width: 100px;<br> height: 100px;<br> border-radius: 50%;<br> box-shadow: 15px 15px 0 0 #f2cff3;<br> margin-top: 70px;");

                flag = false;
            } else { }
        });

        
    });

    $(".triangle-up").click(function () {
        $("#target").removeClass();
        $("#target").removeAttr("style");
        $("#target").addClass("triangle-up");
        $(".pink").empty();


        flag = true;
        $("#cssProp").empty();
        if (flag) {
            $("#cssProp").append("width: 0;<br>height: 0;<br>  border-left: 50px solid transparent;<br> border-right: 50px solid transparent; <br>border-bottom: 100px solid red <br> ");
            flag = false;
        } else {}

        $(".black").click(function () {
            $("#target").css("border-bottom", "100px solid black");
            $("#target").css("background", "transparent");
            $("#target").css("box-shadow"," 0px 0px 0 0 #f2cff3");

            flag = true;
            $("#cssProp").empty();
            if (flag) {
                $("#cssProp").append("width: 0;<br>height: 0;<br>  border-left: 50px solid transparent;<br> border-right: 50px solid transparent; <br>border-bottom: 100px solid #hg <br> ");

                flag = false;
            } else { }

        });
        $(".red").click(function () {
            $("#target").css("border-bottom", "100px solid #c00000");
            $("#target").css("background", "transparent");
            $("#target").css("box-shadow"," 0px 0px 0 0 #f2cff3");

            flag = true;
            $("#cssProp").empty();
            if (flag) {
                $("#cssProp").append("width: 0;<br>height: 0;<br>  border-left: 50px solid transparent;<br> border-right: 50px solid transparent; <br>border-bottom: 100px solid #hg <br> ");

                flag = false;
            } else { }


        });
        $(".yellowGreen").click(function () {
            $("#target").css("border-bottom", "100px solid #92d050");
            $("#target").css("background", "transparent");
            $("#target").css("box-shadow"," 0px 0px 0 0 #f2cff3");

            flag = true;
            $("#cssProp").empty();
            if (flag) {
                $("#cssProp").append("width: 0;<br>height: 0;<br>  border-left: 50px solid transparent;<br> border-right: 50px solid transparent; <br>border-bottom: 100px solid #hg <br> ");

                flag = false;
            } else { }
        });
        $(".blue").click(function () {
            $("#target").css("border-bottom", "100px solid #002060");
            $("#target").css("background", "transparent");
            $("#target").css("box-shadow"," 0px 0px 0 0 #f2cff3");

            flag = true;
            $("#cssProp").empty();
            if (flag) {
                $("#cssProp").append("width: 0;<br>height: 0;<br>  border-left: 50px solid transparent;<br> border-right: 50px solid transparent; <br>border-bottom: 100px solid #hg <br> ");

                flag = false;
            } else { }
        });
        $(".skyBlue").click(function () {
            $("#target").css("border-bottom", "100px solid #5b9bd5");
            $("#target").css("background", "transparent");
            $("#target").css("box-shadow"," 0px 0px 0 0 #f2cff3");

            flag = true;
            $("#cssProp").empty();
            if (flag) {
                $("#cssProp").append("width: 0;<br>height: 0;<br>  border-left: 50px solid transparent;<br> border-right: 50px solid transparent; <br>border-bottom: 100px solid #hg <br> ");

                flag = false;
            } else { }
        });
        $(".lightOrange").click(function () {
            $("#target").css("border-bottom", "100px solid #ffc000");
            $("#target").css("background", "transparent");
            $("#target").css("box-shadow"," 0px 0px 0 0 #f2cff3");

            flag = true;
            $("#cssProp").empty();
            if (flag) {
                $("#cssProp").append("width: 0;<br>height: 0;<br>  border-left: 50px solid transparent;<br> border-right: 50px solid transparent; <br>border-bottom: 100px solid #hg <br> ");

                flag = false;
            } else { }
        });
        $(".green").click(function () {
            $("#target").css("border-bottom", "100px solid #00b050");
            $("#target").css("background", "transparent");
            $("#target").css("box-shadow"," 0px 0px 0 0 #f2cff3");

            flag = true;
            $("#cssProp").empty();
            if (flag) {
                $("#cssProp").append("width: 0;<br>height: 0;<br>  border-left: 50px solid transparent;<br> border-right: 50px solid transparent; <br>border-bottom: 100px solid #hg <br> ");

                flag = false;
            } else { }
        });
        $(".purple").click(function () {
            $("#target").css("border-bottom", "100px solid #7030a0");
            $("#target").css("background", "transparent");
            $("#target").css("box-shadow"," 0px 0px 0 0 #f2cff3");

            flag = true;
            $("#cssProp").empty();
            if (flag) {
                $("#cssProp").append("width: 0;<br>height: 0;<br>  border-left: 50px solid transparent;<br> border-right: 50px solid transparent; <br>border-bottom: 100px solid #hg <br> ");

                flag = false;
            } else { }
        });
        $(".orange").click(function () {
            $("#target").css("border-bottom", "100px solid #ed7d31");
            $("#target").css("background", "transparent");
            $("#target").css("box-shadow"," 0px 0px 0 0 #f2cff3");

            flag = true;
            $("#cssProp").empty();
            if (flag) {
                $("#cssProp").append("width: 0;<br>height: 0;<br>  border-left: 50px solid transparent;<br> border-right: 50px solid transparent; <br>border-bottom: 100px solid #hg <br> ");

                flag = false;
            } else { }
        });
        $(".yellow").click(function () {
            $("#target").css("border-bottom", "100px solid #ffff00");
            $("#target").css("background", "transparent");
            $("#target").css("box-shadow"," 0px 0px 0 0 #f2cff3");

            flag = true;
            $("#cssProp").empty();
            if (flag) {
                $("#cssProp").append("width: 0;<br>height: 0;<br>  border-left: 50px solid transparent;<br> border-right: 50px solid transparent; <br>border-bottom: 100px solid #ffff00 <br> ");

                flag = false;
            } else { }
        });
        $(".lightblue").click(function () {
            $("#target").css("border-bottom", "100px solid #00b0f0");
            $("#target").css("background", "transparent");
            $("#target").css("box-shadow"," 0px 0px 0 0 #f2cff3");

            flag = true;
            $("#cssProp").empty();
            if (flag) {
                $("#cssProp").append("width: 0;<br>height: 0;<br>  border-left: 50px solid transparent;<br> border-right: 50px solid transparent; <br>border-bottom: 100px solid #00b0f0 <br> ");

                flag = false;
            } else { }
        });

        $(".pink").click(function () {
            $("#target").css("border-bottom", "100px solid #f2cff3");
            $("#target").css("background", "transparent");
            $("#target").css("box-shadow"," 0px 0px 0 0 #f2cff3");


            flag = true;
            $("#cssProp").empty();
            if (flag) {
                $("#cssProp").append("width: 0;<br>height: 0;<br>  border-left: 50px solid transparent;<br> border-right: 50px solid transparent; <br>border-bottom: 100px solid #f2cff3 <br> ");

                flag = false;
            } else { }
        });

        

        
    });

    $(".star").click(function () {
        $("#target").removeClass();
        $("#target").removeAttr("style");
        $("#target").addClass("star");


        flag = true;
        $("#cssProp").empty();
        if (flag) {

            $("#cssProp").append("position: relative;<br> margin-top: 2px;<br> width: 0;<br> height: 0; <br> margin-left: .9em;<br> margin-right: .9em;<br> margin-bottom: 1.2em;<br> border-right:  .3em solid transparent;<br> border-bottom: .7em  solid red;<br> border-left:   .3em solid transparent; <br>font-size: 60px; <br>  content: ''; <br>display: block;<br> width: 0;<br> height: 0;<br> position: absolute;<br>top: .6em;<br>left: -1em;<br> border-right:  1em solid transparent;<br> border-bottom: .7em  solid red;<br> border-left:   1em solid transparent;<br>transform: rotate(-35deg); <br>  content: ''; <br>display: block; <br>width: 0;<br> height: 0;<br> position: absolute;<br>top: .6em;<br>left: -1em;<br>border-right:  1em solid transparent;<br> border-bottom: .7em  solid red;<br>border-left:   1em solid transparent;<br>transform: rotate(-35deg);<br>transform: rotate(35deg);");

            flag = false;
        } else {

        }
    });

    $(".octagon").click(function () {
        $("#target").removeClass();
        $("#target").removeAttr("style");
        $("#target").addClass("octagon");

        flag = true;
        $("#cssProp").empty();
        if (flag) {
            $("#cssProp").append(" width: 100px;<br> height: 100px;<br> background: red;<br> position: relative;<br> margin-left: 50px;<br> content: '';<br>position: absolute;<br>top: 0;<br>left: 0;<br>border-bottom: 29px solid red;<br>border-left: 29px solid #eee;<br>border-right: 29px solid #eee;<br>width: 42px;<br>height: 0;<br> content: '';<br>position: absolute;<br>bottom: 0;<br>left: 0;<br>border-top: 29px solid red;<br>border-left: 29px solid #eee;<br>border-right: 29px solid #eee;<br>width: 42px;<br>height: 0;");

            flag = false;
        } else {

        }
    });

    $(".heart").click(function () {
        $("#target").removeClass();
        $("#target").removeAttr("style");
        $("#target").addClass("heart");

        flag = true;
        $("#cssProp").empty();
        if (flag) {
            $("#cssProp").append(" position: relative;<br>width: 100px;<br>height: 90px;<br> margin-top: 30px;<br> position: absolute;<br>content: '';<br>left: 50px;<br>top: 0;<br>width: 50px;<br>height: 80px;<br>background: red;<br>-moz - border - radius: 50px 50px 0 0;<br>border - radius: 50px 50px 0 0;<br>-webkit - transform: rotate(-45deg);<br>-moz - transform: rotate(-45deg);<br>-ms - transform: rotate(-45deg);<br>-o - transform: rotate(-45deg);<br>transform: rotate(-45deg);<br>-webkit - transform - origin: 0 100 %;<br>-moz - transform - origin: 0 100 %;<br>-ms - transform - origin: 0 100 %;<br>-o - transform - origin: 0 100 %;<br>transform - origin: 0 100 %;<br> left: 0;<br>-webkit-transform: rotate(45deg);<br>-moz-transform: rotate(45deg);<br>-ms-transform: rotate(45deg);<br>-o-transform: rotate(45deg);<br>transform: rotate(45deg);<br>-webkit-transform-origin: 100% 100%;<br>-moz-transform-origin: 100% 100%;<br>-ms-transform-origin: 100% 100%;<br>-o-transform-origin: 100% 100%;<br>transform-origin: 100% 100%; ");
            flag = false;
        } else {

        }
    });

    $(".cross").click(function () {
        $("#target").removeClass();
        $("#target").removeAttr("style");
        $("#target").addClass("cross");

        flag = true;
        $("#cssProp").empty();
        if (flag) {
            $("#cssProp").append("background: red;<br>height: 100px;<br>position: relative;<br> width: 20px;<br>margin-left: 90px;<br> background: red;<br>content: '';<br>height: 20px;<br>left: -40px;<br>position: absolute;<br>top: 40px;<br>width: 100px;");

            flag = false;
        } else {

        }
    });

    $(".yin-yang").click(function () {
        $("#target").removeClass();
        $("#target").removeAttr("style");
        $("#target").addClass("yin-yang");

        flag = true;
        $("#cssProp").empty();
        if (flag) {
            $("#cssProp").append(" width: 96px;<br>height: 48px;<br>background: #eee;<br> border-color: red;<br> border-style: solid;<br>border-width: 2px 2px 50px 2px;<br>border-radius: 100%;<br>position: relative;<br>  content: '';<br>position: absolute;<br>top: 50%;<br>left: 0;<br>background: #eee;<br>border: 18px solid red;<br>border-radius: 100%;<br>width: 12px;<br>height: 12px;<br>content: '';<br>position: absolute;<br>top: 50%;<br>left: 50%;<br>background: red;<br>border: 18px solid #eee;<br>border-radius:100%;<br>width: 12px;<br>height: 12px;");

            flag = false;
        } else {

        }
    });






    $(".black").click(function () {
        $("#target").addClass("black");

        $("#target").removeClass(["red", "yellowGreen", "blue", "skyBlue", "lightOrange", "green", "purple", "orange", "yellow", "lightblue", "pink"]);


        flag = true;
        $("#cssProp").empty();
        if (flag) {
            $("#cssProp").append($("#target").attr("style") + "<br>background: #0000;");

            flag = false;
        } else {

        }





    });

    $(".red").click(function () {
        $("#target").addClass("red");
        $("#target").removeClass(["black", "yellowGreen", "blue", "skyBlue", "lightOrange", "green", "purple", "orange", "yellow", "lightblue", "pink"]);


        flag = true;
        $("#cssProp").empty();

        if (flag) {
            $("#cssProp").append($("#target").attr("style") + "<br>background: #c00000;");

            flag = false;
        } else { }


    });

    $(".yellowGreen").click(function () {
        $("#target").addClass("yellowGreen");

        $("#target").removeClass(["red", "black", "blue", "skyBlue", "lightOrange", "green", "purple", "orange", "yellow", "lightblue", "pink"]);


        flag = true;
        $("#cssProp").empty();

        if (flag) {
            $("#cssProp").append($("#target").attr("style") + "<br>background: #92d050;");

            flag = false;
        } else { }
    });

    $(".blue").click(function () {
        $("#target").addClass("blue");
        $("#target").removeClass(["red", "yellowGreen", "blue", "skyBlue", "lightOrange", "green", "purple", "orange", "yellow", "lightblue", "pink"]);


        flag = true;
        $("#cssProp").empty();

        if (flag) {
            $("#cssProp").append($("#target").attr("style") + "<br>background: #002060;");

            flag = false;
        } else { }
    });

    $(".skyBlue").click(function () {
        $("#target").addClass("skyBlue");
        $("#target").removeClass(["red", "yellowGreen", "blue", "black", "lightOrange", "green", "purple", "orange", "yellow", "lightblue", "pink"]);

        flag = true;
        $("#cssProp").empty();

        if (flag) {
            $("#cssProp").append($("#target").attr("style") + "<br>background: #5b9bd5;");

            flag = false;
        } else { }
    });

    $(".lightOrange").click(function () {
        $("#target").addClass("lightOrange");
        $("#target").removeClass(["red", "yellowGreen", "blue", "skyBlue", "black", "green", "purple", "orange", "yellow", "lightblue", "pink"]);


        flag = true;
        $("#cssProp").empty();

        if (flag) {
            $("#cssProp").append($("#target").attr("style") + "<br>background: #ffc000;");

            flag = false;
        } else { }
    });

    $(".green").click(function () {
        $("#target").addClass("green");
        $("#target").removeClass(["red", "yellowGreen", "blue", "skyBlue", "lightOrange", "black", "purple", "orange", "yellow", "lightblue", "pink"]);


        flag = true;
        $("#cssProp").empty();

        if (flag) {
            $("#cssProp").append($("#target").attr("style") + "<br>background: #00b050;");

            flag = false;
        } else { }
    });

    $(".purple").click(function () {
        $("#target").addClass("purple");
        $("#target").removeClass(["red", "yellowGreen", "blue", "skyBlue", "lightOrange", "green", "black", "orange", "yellow", "lightblue", "pink"]);


        flag = true;
        $("#cssProp").empty();

        if (flag) {
            $("#cssProp").append($("#target").attr("style") + "<br>background: #7030a0;");

            flag = false;
        } else { }
    });

    $(".orange").click(function () {
        $("#target").addClass("orange");
        $("#target").removeClass(["red", "yellowGreen", "blue", "skyBlue", "lightOrange", "green", "purple", "black", "yellow", "lightblue", "pink"]);


        flag = true;
        $("#cssProp").empty();

        if (flag) {
            $("#cssProp").append($("#target").attr("style") + "<br>background: #ffff00;");

            flag = false;
        } else { }
    });

    $(".yellow").click(function () {
        $("#target").addClass("yellow");
        $("#target").removeClass(["red", "yellowGreen", "blue", "skyBlue", "lightOrange", "green", "purple", "orange", "black", "lightblue", "pink"]);


        flag = true;
        $("#cssProp").empty();

        if (flag) {
            $("#cssProp").append($("#target").attr("style") + "<br>background: #ffff00;");

            flag = false;
        } else { }
    });

    $(".lightblue").click(function () {
        $("#target").addClass("lightblue");
        $("#target").removeClass(["red", "yellowGreen", "blue", "skyBlue", "lightOrange", "green", "purple", "orange", "yellow", "black", "pink"]);


        flag = true;
        $("#cssProp").empty();

        if (flag) {
            $("#cssProp").append($("#target").attr("style") + "<br>background: #00b0f0;");

            flag = false;
        } else { }

    });

    $(".pink").click(function () {
        $("#target").addClass("pink");
        $("#target").removeClass(["red", "yellowGreen", "blue", "skyBlue", "lightOrange", "green", "purple", "orange", "yellow", "lightblue", "black"]);



        $("#cssProp").empty();
        flag = true;

        if (flag) {

            $("#cssProp").append($("#target").attr("style") + "<br> background: #f2cff3;");

            flag = false;
        } else { }
    });
});