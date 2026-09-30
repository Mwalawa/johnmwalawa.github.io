/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("open");

        const icon = menuToggle.querySelector("i");

        if (navMenu.classList.contains("open")) {

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    });


    /* Close mobile menu after clicking a link */

    document.querySelectorAll(".nav-link").forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("open");

            const icon = menuToggle.querySelector("i");

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        });

    });

}


/* =========================================================
   EXPANDABLE SKILLS / EXPERIENCE / EDUCATION
========================================================= */

document.querySelectorAll(".expand-btn").forEach(button => {

    button.addEventListener("click", () => {

        const parent = button.closest(".expandable");

        if (!parent) return;

        parent.classList.toggle("open");

    });

});


/* =========================================================
   PROJECT DETAILS
========================================================= */

document.querySelectorAll(".project-toggle").forEach(button => {

    button.addEventListener("click", () => {

        const card = button.closest(".project-card");

        if (!card) return;

        card.classList.toggle("open");

        if (card.classList.contains("open")) {

            button.innerHTML =
                'Hide Details <i class="fa-solid fa-arrow-up"></i>';

        } else {

            button.innerHTML =
                'View Details <i class="fa-solid fa-arrow-right"></i>';

        }

    });

});


/* =========================================================
   CERTIFICATIONS
========================================================= */

const certToggle = document.getElementById("certToggle");
const certList = document.getElementById("certList");

if (certToggle && certList) {

    certToggle.addEventListener("click", () => {

        certList.classList.toggle("show");

        if (certList.classList.contains("show")) {

            certToggle.innerHTML =
                'Hide Certifications <i class="fa-solid fa-chevron-up"></i>';

        } else {

            certToggle.innerHTML =
                'View All Certifications <i class="fa-solid fa-chevron-down"></i>';

        }

    });

}


/* =========================================================
   ACTIVE NAVIGATION ON SCROLL
========================================================= */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            current = section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${current}`) {

            link.classList.add("active");

        }

    });

});


/* =========================================================
   NAVBAR SHADOW ON SCROLL
========================================================= */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 30) {

        navbar.style.boxShadow =
            "0 8px 30px rgba(0,0,0,.25)";

    } else {

        navbar.style.boxShadow = "none";

    }

});
