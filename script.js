// Get the navbar
var header = document.querySelector("header");

var logo = document.getElementsByClassName("logo")[0];

var sideNav = document.getElementById("side-nav");
var main = document.getElementsByClassName("main")[0];
var header = document.getElementsByClassName("header")[0];

var sideNavIcon = document.getElementsByClassName("sidenav-icon")[0];

const container = document.getElementsByClassName("container")[0];

let sideNavIsOpen = false;

let sideNavWidth = "20%";

window.addEventListener("scroll", parralax)

// When the user scrolls the page, execute myFunction 
window.addEventListener("scroll", myFunction)

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  header.classList.toggle("sticky", window.scrollY > 0);
}

// When user changes window size, execute resizeSideNav to resize side navbar
resizeSideNav();

window.onresize = resizeSideNav;

function resizeSideNav () {

  if (window.matchMedia("(max-width: 600px)").matches) {
    sideNavWidth = "75%";
  } else {
    sideNavWidth = "20%";
  }
}

logo.onclick = function() {

  if (sideNavIsOpen == false) {

    sideNav.style.width = sideNavWidth;
    main.style.left = sideNavWidth;
    header.style.marginLeft = sideNavWidth;

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