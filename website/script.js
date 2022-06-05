
function openNav() {
document.getElementById("sidePanel").style.width = "250px";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
document.getElementById("sidePanel").style.width = "0";
}






function myFunction() {
document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
if (!event.target.matches('.dropbtn')) {
var dropdowns = document.getElementsByClassName("dropdown-content");
var i;
for (i = 0; i < dropdowns.length; i++) {
  var openDropdown = dropdowns[i];
  if (openDropdown.classList.contains('show')) {
    openDropdown.classList.remove('show');
  }
}
}
}


function myFunction2() {
  document.getElementById("myDropdown2").classList.toggle("show2");
  
  }
  

  
  window.onclick = function(event) {
    
  if (!event.target.matches('.dropbtn2')) {
  var dropdown = document.getElementsByClassName("dropdown-content2");
  var j;
  for (j = 0; j < dropdown.length; j++) {
    var openDropdown = dropdown[j];
    if (openDropdown.classList.contains('show2')) {
      openDropdown.classList.remove('show2');
    }
  }
  }
  }



  function show() {
    var p = document.getElementById('pwd');
    p.setAttribute('type', 'text');
}

function hide() {
    var p = document.getElementById('pwd');
    p.setAttribute('type', 'password');
}

var pwShown = 0;

document.getElementById("eye").addEventListener("click", function () {
    if (pwShown == 0) {
        pwShown = 1;
        show();
    } else {
        pwShown = 0;
        hide();
    }
}, false);

function admin() {   
  window.location.href = "admin.html";
  return false;
}
function index(){

  window.location.href = "index.html";
  return false;
}
function index1(){

  window.location.href = "index1.html";
  return false;
}

function confess(){

  window.location.href = "confession.html";
  return false;
}
function login(){

  window.location.href = "login.html";
  return false;
}