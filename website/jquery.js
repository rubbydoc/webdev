$(document).ready(function () {
  $("#moon").click(function () {
    $("#moon").hide();
    $("#sun").show();
    $(".topnav-right a").css("color", "#bdc1c6");
    $("form button").css("color", "#bdc1c6");
    $("form input").css("color", "#bdc1c6");
    $(".tablinks active").css("color", "black");
    $("#tablink").css("color", "#bdc1c6");
    $(".fa").css("color", "#bdc1c6");
    $("p").css("color", "#FFFF00");
    $("h1").css("color", "#bdc1c6");
    $("h2").css("color", "#bdc1c6");
    $(".header").css("background", "#1c1c1c");
    $(".wrapper").css("background", "#141e24");
    $(".blog_post").css("background", "#141e24");
    $(".topnav").css("background", "#1c1c1c");
    $(".footer").css("background", "#1c1c1c");
    $("#sun").css("color", "#bdc1c6");

    $(document).ready(function () {
      $("#active").click(function () {
        $("#tablink").css("color", "white");
        $(this).css("color", "black");

        $(document).ready(function () {
          $("#tablink").mouseenter(function () {
            $("#tablink").css("color", "black");
          });
        });

        $(document).ready(function () {
          $("#tablink").mouseleave(function () {
            $("#tablink").css("color", "white");
          });
        });

        $(document).ready(function () {
          $("#active").mouseleave(function () {
            $("#active").css("color", "black");
          });
        });
      });
    });

    $(document).ready(function () {
      $("#tablink").click(function () {
        $("#active").css("color", "white");

        $(document).ready(function () {
          $("#active").mouseenter(function () {
            $("#active").css("color", "black");
          });
        });

        $(document).ready(function () {
          $("#active").mouseleave(function () {
            $("#active").css("color", "white");
          });
        });

        $(document).ready(function () {
          $("#tablink").mouseleave(function () {
            $("#tablink").css("color", "black");
          });
        });
      });
    });
    $(document).ready(function () {
      $("#tablink").mouseenter(function () {
        $("#tablink").css("color", "black");
      });
    });

    $(document).ready(function () {
      $("#tablink").mouseleave(function () {
        $("#tablink").css("color", "white");
      });
    });
  });
});

$(document).ready(function () {
  $("#sun").click(function () {
    $("#sun").hide();
    $("#moon").show();
    $(".topnav-right a").css("color", "black");
    $("form button").css("color", "black");
    $(".tab button").css("color", "black");
    $(".fa").css("color", "#c38d9e");
    $(".fa-grip").css("color", "#553d67");
    $(".fa-square-pen").css("color", "#553d67");
    $(".fa-user").css("color", "#553d67");
    $(".fa-envelope-open-text").css("color", "#553d67");
    $("p").css("color", "black");
    $("h1").css("color", "#183153");
    $("h2").css("color", "#183153");
    $("#logo").css("color", "black");
    $("form input").css("color", "black");
    $(".header").css("background", "#edc7b7");
    $(".wrapper").css("background", "#eae7dc");
    $(".blog_post").css("background", "#eae7dc");
    $(".topnav").css("background", "#edc7b7");
    $(".footer").css("background", "#edc7b7");
    $(".fa-moon").css("color", "#c38d9e");
    $(".group .category").css("color", "#7A999B");
  });
});
