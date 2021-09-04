// Get the navbar
var header = document.querySelector("header");

var logo = document.getElementById("logo");

var sideNav = document.getElementById("mySideNav");
var main = document.getElementById("main");
var header = document.getElementById("header");

var sideNavIcon = document.getElementsByClassName("sidenav-icon")[0];

const container = document.getElementsByClassName("container")[0];

let sideNavIsOpen = false;

window.addEventListener("scroll", parralax)

// When the user scrolls the page, execute myFunction 
window.addEventListener("scroll", myFunction)

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  header.classList.toggle("sticky", window.scrollY > 0);
}

logo.onclick = function() {

  if (sideNavIsOpen == false) {

    sideNav.style.width = "300px";
    main.style.left="300px";
    header.style.marginLeft = "300px";

    sideNavIcon.style.transform = "rotate(135deg)";
    sideNavIcon.style.webkitTransform = "rotate(135deg)";

    sideNavIsOpen = true;

  } else {

    /* Set the width of the side navigation to 0 and the left margin of the page content to 0 to hide side nav*/
    sideNav.style.width = "0";
    main.style.left="0";
    header.style.marginLeft = "0";

    sideNavIcon.style.transform = "rotate(-45deg)";
    sideNavIcon.style.webkitTransform = "rotate(-45deg)";

    sideNavIsOpen = false;

  }  
}


function parralax() {
  let offset = window.pageYOffset;
  container.style.backgroundPositionY = offset * 0.8 + "px";
}