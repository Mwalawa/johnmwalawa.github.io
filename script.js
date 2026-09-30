/* =========================================
   JOHN MWALAWA PORTFOLIO
   Main JavaScript
========================================= */


document.addEventListener("DOMContentLoaded", () => {


    /* =====================================
       MOBILE NAVIGATION
    ====================================== */

    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", () => {

            navLinks.classList.toggle("active");

        });


        const navigationLinks =
            navLinks.querySelectorAll("a");

        navigationLinks.forEach(link => {

            link.addEventListener("click", () => {

                navLinks.classList.remove("active");

            });

        });

    }


    /* =====================================
       PROJECT DETAILS
    ====================================== */

    const projectButtons =
        document.querySelectorAll(".project-toggle");

    projectButtons.forEach(button => {

        button.addEventListener("click", () => {

            const targetId =
                button.getAttribute("data-target");

            const target =
                document.getElementById(targetId);

            if (!target) return;


            target.classList.toggle("active");


            if (target.classList.contains("active")) {

                button.textContent = "Hide Details −";

            } else {

                button.textContent = "View Details +";

            }

        });

    });


    /* =====================================
       NAVIGATION SHADOW ON SCROLL
    ====================================== */

    const navbar =
        document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (!navbar) return;

        if (window.scrollY > 20) {

            navbar.style.boxShadow =
                "0 5px 25px rgba(0,0,0,0.06)";

        } else {

            navbar.style.boxShadow = "none";

        }

    });


    /* =====================================
       CURRENT YEAR
    ====================================== */

    const yearElement =
        document.querySelector("footer p:last-child");

    if (yearElement) {

        const currentYear =
            new Date().getFullYear();

        yearElement.textContent =
            `© ${currentYear} John Mwalawa. All rights reserved.`;

    }

});
