document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");
  const mobileClose = document.getElementById("mobileClose");
  const mobileDetails = document.querySelectorAll(".mobile-nav details");

  function openMenu() {
    mobileMenu.classList.add("open");
    document.body.classList.add("no-scroll");
    hamburger.setAttribute("aria-expanded", "true");
  }

  function closeMenu() {
    mobileMenu.classList.remove("open");
    document.body.classList.remove("no-scroll");
    hamburger.setAttribute("aria-expanded", "false");
    
    // Reset all accordions when closing
    mobileDetails.forEach((detail) => {
      detail.removeAttribute("open");
    });
  }

  hamburger.addEventListener("click", openMenu);

  // StopPropagation prevents the click from "bleeding through" to the background
  mobileClose.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    closeMenu();
  });

  // Clicking the dark area closes the menu
  mobileMenu.addEventListener("click", (e) => {
    if (e.target === mobileMenu) {
      closeMenu();
    }
  });

  // Accordion logic: only one open at a time
  mobileDetails.forEach((detail) => {
    detail.addEventListener("toggle", () => {
      if (detail.open) {
        mobileDetails.forEach((otherDetail) => {
          if (otherDetail !== detail) {
            otherDetail.removeAttribute("open");
          }
        });
      }
    });
  });
});