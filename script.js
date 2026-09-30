/* =========================================================
   JOHN MWALAWA PORTFOLIO
   JAVASCRIPT
   ========================================================= */


/* =========================================================
   MOBILE NAVIGATION
   ========================================================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {

  menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("open");

    const isOpen =
      navLinks.classList.contains("open");

    menuBtn.setAttribute(
      "aria-expanded",
      isOpen
    );

    menuBtn.innerHTML = isOpen
      ? '<i class="fa-solid fa-xmark"></i>'
      : '<i class="fa-solid fa-bars"></i>';

  });


  /* Close mobile menu when a link is clicked */

  document
    .querySelectorAll(".nav-link")
    .forEach(link => {

      link.addEventListener("click", () => {

        navLinks.classList.remove("open");

        menuBtn.setAttribute(
          "aria-expanded",
          "false"
        );

        menuBtn.innerHTML =
          '<i class="fa-solid fa-bars"></i>';

      });

    });

}


/* =========================================================
   ACTIVE NAVIGATION
   ========================================================= */

const sections =
  document.querySelectorAll("section[id]");

const navigationLinks =
  document.querySelectorAll(".nav-link");


function updateActiveNavigation() {

  let currentSection = "";

  sections.forEach(section => {

    const sectionTop =
      section.offsetTop - 140;

    if (window.scrollY >= sectionTop) {

      currentSection =
        section.getAttribute("id");

    }

  });


  navigationLinks.forEach(link => {

    link.classList.remove("active");

    if (
      link.getAttribute("href") ===
      `#${currentSection}`
    ) {

      link.classList.add("active");

    }

  });

}


window.addEventListener(
  "scroll",
  updateActiveNavigation
);


/* =========================================================
   COLLAPSIBLE SKILLS
   ========================================================= */

const skillHeaders =
  document.querySelectorAll(".skill-header");


skillHeaders.forEach(header => {

  header.addEventListener("click", () => {

    const selectedCard =
      header.closest(".collapsible-card");

    const wasOpen =
      selectedCard.classList.contains("open");


    /* Close every skill */

    document
      .querySelectorAll(".collapsible-card")
      .forEach(card => {

        card.classList.remove("open");

        const cardHeader =
          card.querySelector(".skill-header");

        if (cardHeader) {

          cardHeader.setAttribute(
            "aria-expanded",
            "false"
          );

        }

      });


    /* Open selected skill */

    if (!wasOpen) {

      selectedCard.classList.add("open");

      header.setAttribute(
        "aria-expanded",
        "true"
      );

    }

  });

});


/* =========================================================
   PROJECT DETAILS
   ========================================================= */

const detailButtons =
  document.querySelectorAll(".details-btn");


detailButtons.forEach(button => {

  button.addEventListener("click", () => {

    const details =
      button.nextElementSibling;

    const text =
      button.querySelector("span");

    const icon =
      button.querySelector("i");


    if (!details) return;


    const isHidden =
      details.classList.contains("hidden");


    if (isHidden) {

      details.classList.remove("hidden");

      if (text) {
        text.textContent = "Hide Details";
      }

      if (icon) {

        icon.className =
          "fa-solid fa-chevron-up";

      }

    } else {

      details.classList.add("hidden");

      if (text) {
        text.textContent = "Show Details";
      }

      if (icon) {

        icon.className =
          "fa-solid fa-chevron-down";

      }

    }

  });

});


/* =========================================================
   CERTIFICATIONS TOGGLE
   ========================================================= */

const certToggle =
  document.getElementById("certToggle");

const certGrid =
  document.getElementById("certGrid");


if (certToggle && certGrid) {

  certToggle.addEventListener("click", () => {

    certGrid.classList.toggle("hidden");

    const isHidden =
      certGrid.classList.contains("hidden");


    const text =
      certToggle.querySelector("span");

    const icon =
      certToggle.querySelector("i");


    if (isHidden) {

      if (text) {
        text.textContent =
          "Show Certifications";
      }

      if (icon) {

        icon.className =
          "fa-solid fa-chevron-down";

      }

    } else {

      if (text) {
        text.textContent =
          "Hide Certifications";
      }

      if (icon) {

        icon.className =
          "fa-solid fa-chevron-up";

      }

    }

  });

}


/* =========================================================
   CURRENT YEAR
   ========================================================= */

const currentYear =
  document.getElementById("currentYear");


if (currentYear) {

  currentYear.textContent =
    new Date().getFullYear();

}


/* =========================================================
   ESCAPE KEY
   ========================================================= */

document.addEventListener(
  "keydown",
  event => {

    if (event.key === "Escape") {

      if (navLinks) {

        navLinks.classList.remove("open");

      }

      if (menuBtn) {

        menuBtn.setAttribute(
          "aria-expanded",
          "false"
        );

        menuBtn.innerHTML =
          '<i class="fa-solid fa-bars"></i>';

      }

    }

  }
);
