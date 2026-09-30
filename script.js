/* =========================================
   JOHN ANDERSON MWALAWA
   PORTFOLIO JAVASCRIPT
========================================= */


document.addEventListener("DOMContentLoaded", function () {


  /* =========================================
     MOBILE MENU
  ========================================== */

  const menuBtn =
    document.getElementById("menuBtn");

  const navLinks =
    document.getElementById("navLinks");


  if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", function () {

      navLinks.classList.toggle("show");

    });


    navLinks
      .querySelectorAll("a")
      .forEach(function (link) {

        link.addEventListener("click", function () {

          navLinks.classList.remove("show");

        });

      });

  }


  /* =========================================
     ACTIVE NAVIGATION
  ========================================== */

  const sections =
    document.querySelectorAll("section[id]");

  const navigationLinks =
    document.querySelectorAll(".nav-links a");


  function updateActiveNavigation() {

    let currentSection = "";

    sections.forEach(function (section) {

      const sectionTop =
        section.offsetTop - 130;

      const sectionHeight =
        section.offsetHeight;


      if (
        window.scrollY >= sectionTop &&
        window.scrollY <
        sectionTop + sectionHeight
      ) {

        currentSection =
          section.getAttribute("id");

      }

    });


    navigationLinks.forEach(function (link) {

      link.classList.remove("active");


      if (
        link.getAttribute("href") ===
        "#" + currentSection
      ) {

        link.classList.add("active");

      }

    });

  }


  window.addEventListener(
    "scroll",
    updateActiveNavigation
  );


  updateActiveNavigation();


  /* =========================================
     NAVBAR SCROLL EFFECT
  ========================================== */

  const header =
    document.getElementById("header");


  function updateHeader() {

    if (!header) return;


    if (window.scrollY > 20) {

      header.style.boxShadow =
        "0 8px 30px rgba(0,0,0,.15)";

    } else {

      header.style.boxShadow = "none";

    }

  }


  window.addEventListener(
    "scroll",
    updateHeader
  );


  updateHeader();


  /* =========================================
     CURRENT YEAR
  ========================================== */

  const year =
    document.getElementById("year");


  if (year) {

    year.textContent =
      new Date().getFullYear();

  }


});
