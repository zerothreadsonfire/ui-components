const navbar = document.querySelector(".navbar--full-width");
let lastScroll=0;

window.addEventListener("scroll", (e) => {
  const currentScroll = window.scrollY;
  
  if(currentScroll <= 0) {
    navbar.classList.remove("scroll-up");
  }

  if(currentScroll>lastScroll && !navbar.classList.contains("scroll-down")) {
    navbar.classList.remove("scroll-up");
    navbar.classList.add("scroll-down");
  } else if(currentScroll<lastScroll && navbar.classList.contains("scroll-down")) {
    navbar.classList.remove("scroll-down");
    navbar.classList.add("scroll-up");
  }

  lastScroll = currentScroll;
})