document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       MOBILE NAVIGATION
    ========================= */

    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", function () {

            navMenu.classList.toggle("active");

            const icon = menuToggle.querySelector("i");

            if (navMenu.classList.contains("active")) {

                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");

            } else {

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            }

        });


        navMenu.querySelectorAll("a").forEach(function (link) {

            link.addEventListener("click", function () {

                navMenu.classList.remove("active");

                const icon = menuToggle.querySelector("i");

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            });

        });

    }


    /* =========================
       SKILLS
    ========================= */

    const expandButtons =
        document.querySelectorAll(".expand-btn");

    expandButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const card =
                button.closest(".skill-card");

            const expandable =
                card.querySelector(".expandable");

            card.classList.toggle("open");

            if (card.classList.contains("open")) {

                expandable.style.maxHeight =
                    expandable.scrollHeight + "px";

            } else {

                expandable.style.maxHeight = null;

            }

        });

    });


    /* =========================
       PROJECT DETAILS
    ========================= */

    const projectButtons =
        document.querySelectorAll(".project-toggle");

    projectButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const card =
                button.closest(".project-card");

            card.classList.toggle("open");

            if (card.classList.contains("open")) {

                button.innerHTML =
                    'Hide Details <i class="fa-solid fa-arrow-up"></i>';

            } else {

                button.innerHTML =
                    'View Details <i class="fa-solid fa-arrow-down"></i>';

            }

        });

    });


    /* =========================
       EXPERIENCE
    ========================= */

    const experienceButtons =
        document.querySelectorAll(".experience-header");

    experienceButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const card =
                button.closest(".experience-card");

            const details =
                card.querySelector(".experience-details");

            card.classList.toggle("open");

            if (card.classList.contains("open")) {

                details.style.maxHeight =
                    details.scrollHeight + "px";

            } else {

                details.style.maxHeight = null;

            }

        });

    });


    /* =========================
       CYBER SHUJAA
    ========================= */

    const educationButtons =
        document.querySelectorAll(".education-header");

    educationButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const card =
                button.closest(".cyber-card");

            const details =
                card.querySelector(".education-details");

            card.classList.toggle("open");

            if (card.classList.contains("open")) {

                details.style.maxHeight =
                    details.scrollHeight + "px";

            } else {

                details.style.maxHeight = null;

            }

        });

    });


    /* =========================
       CERTIFICATIONS
    ========================= */

    const certToggle =
        document.getElementById("certToggle");

    const certList =
        document.getElementById("certList");

    if (certToggle && certList) {

        certToggle.addEventListener("click", function () {

            certList.classList.toggle("show-all");

            if (certList.classList.contains("show-all")) {

                certToggle.innerHTML =
                    'Hide Certifications <i class="fa-solid fa-arrow-up"></i>';

            } else {

                certToggle.innerHTML =
                    'View All Certifications <i class="fa-solid fa-arrow-down"></i>';

            }

        });

    }


    /* =========================
       NAVBAR SHADOW
    ========================= */

    const navbar =
        document.querySelector(".navbar");

    window.addEventListener("scroll", function () {

        if (window.scrollY > 20) {

            navbar.style.boxShadow =
                "0 4px 18px rgba(0,0,0,0.08)";

        } else {

            navbar.style.boxShadow = "none";

        }

    });

});
