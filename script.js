// Get the navbar
var header = document.querySelector("header");

const container = document.getElementById("container");

const checkpoint = 400;

const textbox = document.getElementById("textbox")

window.addEventListener("scroll", parralax)

// When the user scrolls the page, execute myFunction 
window.addEventListener("scroll", myFunction)

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= checkpoint) {
    textbox.style.opacity = 1 - currentScroll / checkpoint;
  }
  else {
    textbox.style.opacity = 0;
  }
})

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  header.classList.toggle("sticky", window.scrollY > 0);
}

function openNav() {
  document.getElementById("mySideNav").style.width = "300px";
  document.getElementById("main").style.left="300px";
  document.getElementById("header").style.marginLeft = "300px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySideNav").style.width = "0";
  document.getElementById("main").style.left="0";
  document.getElementById("header").style.marginLeft = "0";
}

function parralax() {
  let offset = window.pageYOffset;
  container.style.backgroundPositionY = offset * 0.8 + "px";
}

document.getElementById("logo").addEventListener("click", openNav);