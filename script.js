/* =========================================================
   JOHN MWALAWA PORTFOLIO
   JavaScript
   ========================================================= */


/* =========================================================
   MOBILE NAVIGATION
   ========================================================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {

  menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");

    menuBtn.setAttribute("aria-expanded", isOpen);

    menuBtn.textContent = isOpen ? "✕" : "☰";

  });


  // Close menu when a navigation link is clicked

  document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", () => {

      navLinks.classList.remove("open");

      menuBtn.setAttribute("aria-expanded", "false");

      menuBtn.textContent = "☰";

    });

  });

}


/* =========================================================
   ACTIVE NAVIGATION LINK
   ========================================================= */

const sections = document.querySelectorAll("section[id]");
const navigationLinks = document.querySelectorAll(".nav-link");

function updateActiveNavigation() {

  let currentSection = "";

  sections.forEach(section => {

    const sectionTop = section.offsetTop - 120;

    if (window.scrollY >= sectionTop) {
      currentSection = section.getAttribute("id");
    }

  });

  navigationLinks.forEach(link => {

    link.classList.remove("active");

    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }

  });

}

window.addEventListener("scroll", updateActiveNavigation);


/* =========================================================
   PROJECT DETAILS
   ========================================================= */

const detailButtons = document.querySelectorAll(".details-btn");

detailButtons.forEach(button => {

  button.addEventListener("click", () => {

    const details = button.nextElementSibling;

    if (!details) return;

    details.classList.toggle("hidden");

    if (details.classList.contains("hidden")) {

      button.textContent = "Show Details";

    } else {

      button.textContent = "Hide Details";

    }

  });

});


/* =========================================================
   CERTIFICATIONS TOGGLE
   ========================================================= */

const certToggle = document.getElementById("certToggle");
const certGrid = document.getElementById("certGrid");

if (certToggle && certGrid) {

  certToggle.addEventListener("click", () => {

    certGrid.classList.toggle("hidden");

    if (certGrid.classList.contains("hidden")) {

      certToggle.textContent = "Show Certifications";

    } else {

      certToggle.textContent = "Hide Certifications";

    }

  });

}


/* =========================================================
   CURRENT YEAR
   ========================================================= */

const currentYear = document.getElementById("currentYear");

if (currentYear) {

  currentYear.textContent = new Date().getFullYear();

}


/* =========================================================
   CLOSE MOBILE MENU WITH ESCAPE
   ========================================================= */

document.addEventListener("keydown", event => {

  if (event.key === "Escape") {

    if (navLinks) {
      navLinks.classList.remove("open");
    }

    if (menuBtn) {
      menuBtn.setAttribute("aria-expanded", "false");
      menuBtn.textContent = "☰";
    }

  }

});
