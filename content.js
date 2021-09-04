const textbox = document.getElementById("textbox")

const checkpoint = 600;

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= checkpoint) {
      textbox.style.opacity = 1 - currentScroll / checkpoint;
    }
    else {
      textbox.style.opacity = 0;
    }
  })