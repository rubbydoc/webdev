var user = false;




$(document).ready(function () {
  $("#moon").click(function () {
    $("#moon").hide();
    $("#sun").show();
    $("form button, form input, .topnav-right a, h1,h2, #sun, #tablink, .fa").css("color", "#bdc1c6");
    $(".tablinks active").css("color", "black");
    $("p, .logo").css("color", "#E1D9D1");
    $(".wrapper, .blog_post").css("background", "#141e24");
    $(".topnav, .header, .footer").css("background", "#1c1c1c");

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
    $(" form button, .tab button,  form input, p").css("color", "#333");
    $(".fa, .fa-moon").css("color", "#c38d9e");
    $(".fa-grip, .fa-square-pen, .fa-user, .fa-envelope-open-text").css("color", "#553d67");
    $(".logo,.topnav-right a,h1, h2").css("color", "#183153");
    $(".wrapper, .blog_post").css("background", "#eae7dc");
    $(".topnav, .footer, .header").css("background", "#edc7b7");
    $(".group .category").css("color", "#7A999B");
  });
});

$(document).ready(function () {
  $(".fa-paper-plane").click(function () {
    $(".userComment").append("<i class='fa-solid fa-circle-user' style='font-size: 25px; color: #815335; padding-right:10px; margin-bottom:10px'></i>"+ $(".com").val()+"<br>");
    $(".com").val("");
  });

  $(".confess").click(function () {
    if (user==false){
      window.location = 'login.html';
    }
  });


  $("#sign").click(function () {
    window.location = 'sign.html';
  });
  $("#log").click(function () {
    window.location = 'login.html';
  });
  // $(".log-in").click(function () {
  //   window.location = 'confession.html';
  // });
});
