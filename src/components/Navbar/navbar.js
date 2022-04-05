class Navbar {
  constructor() {
    this.smoothScroll();
    this.navbarAltStyle();
  }

  navbarAltStyle = () => {
    const sectionOne = document.querySelector(".cmp-banner");
    const navbar = document.querySelector(".navbar--full-width");

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting==false) {
          navbar.classList.add("navbar--alt-style");
        } else {
          navbar.classList.remove("navbar--alt-style");
        }
      });
    }, {
      rootMargin: "-100px 0px 0px 0px"
    });

    observer.observe(sectionOne);
  }

  smoothScroll = () => {
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
    });
  }
}

new Navbar();
