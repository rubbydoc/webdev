var user = false;

var adminUserName = "admin";
var adminPass = "admin";
var name = "user";
var Pass = "user";
var email;


$(document).ready(function () {
  $("#moon").click(function () {
    $("#moon").hide();
    $("#sun").show();
    $("form button, form input, .topnav-right a, h1,h2, #sun, .fa").css("color", "#bdc1c6");
    $("p, .logo").css("color", "#E1D9D1");
    $(".wrapper, .blog_post").css("background", "#141e24");
    $(".topnav, .header, .footer").css("background", "#1c1c1c");




  });
});

$(document).ready(function () {
  $("#sun").click(function () {
    $("#sun").hide();
    $("#moon").show();
    $(" form button,   form input, p").css("color", "#333");
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
    $(".userComment").append("<i class='fa-solid fa-circle-user' style='font-size: 25px; color: #815335; padding-right:10px; margin-bottom:10px'></i>" + $(".com").val() + "<br>");
    $(".com").val("");
  });

  $(".confess").click(function () {
    if (user == false) {
      window.location = 'login.html';
    } else if(user==true){
      return confess();
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


$(document).ready(function () {
  $(".log-in").click(function () {
    var userName = $("#txt-input").val();
    var pass = $("#pwd").val();
    if ((userName == adminUserName) & (pass == adminPass)) {
      return admin();

    } else if ((userName == name) & (pass == pass)) {
      return index1();



    } else {
      alert("invalid username or password");
    }
  });
});

$(document).ready(function () { 
  $(".sign").click(function () {
    
    user=true;
 
    // name = $("#txt-input").val();
    // email = $("#txt-email").val();
    // Pass = $("#pwd").val();
  
   
    return login();
  });
});


$(document).ready(function () {
  $(".confess").click(function () {
    if (user == false) {
      window.location = 'login.html';
    }
    else if(user==true){
      return confess();
    }
  });  
  
});