document.addEventListener("DOMContentLoaded", () => {


  /* =====================================
     MOBILE NAVIGATION
  ===================================== */

  const menuToggle = document.querySelector("#menuToggle");
  const navLinks = document.querySelector("#navLinks");

  if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

      const isOpen =
        navLinks.classList.toggle("open");

      menuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
      );

      const icon =
        menuToggle.querySelector("i");

      if (icon) {

        icon.classList.toggle(
          "fa-bars",
          !isOpen
        );

        icon.classList.toggle(
          "fa-xmark",
          isOpen
        );

      }

    });


    /* Close mobile menu after clicking a link */

    navLinks
      .querySelectorAll("a")
      .forEach((link) => {

        link.addEventListener("click", () => {

          navLinks.classList.remove("open");

          menuToggle.setAttribute(
            "aria-expanded",
            "false"
          );

          const icon =
            menuToggle.querySelector("i");

          if (icon) {

            icon.classList.add("fa-bars");
            icon.classList.remove("fa-xmark");

          }

        });

      });


    /* Close when clicking outside */

    document.addEventListener("click", (event) => {

      if (
        !navLinks.contains(event.target) &&
        !menuToggle.contains(event.target)
      ) {

        navLinks.classList.remove("open");

        menuToggle.setAttribute(
          "aria-expanded",
          "false"
        );

        const icon =
          menuToggle.querySelector("i");

        if (icon) {

          icon.classList.add("fa-bars");
          icon.classList.remove("fa-xmark");

        }

      }

    });


    /* Close with Escape */

    document.addEventListener("keydown", (event) => {

      if (event.key === "Escape") {

        navLinks.classList.remove("open");

        menuToggle.setAttribute(
          "aria-expanded",
          "false"
        );

        const icon =
          menuToggle.querySelector("i");

        if (icon) {

          icon.classList.add("fa-bars");
          icon.classList.remove("fa-xmark");

        }

      }

    });

  }


  /* =====================================
     SKILLS ACCORDION
  ===================================== */

  const skillCategories =
    document.querySelectorAll(".skill-category");

  skillCategories.forEach((category) => {

    const button =
      category.querySelector(".skill-header");

    if (!button) return;

    button.setAttribute(
      "aria-expanded",
      "false"
    );

    button.addEventListener("click", () => {

      const isCurrentlyOpen =
        category.classList.contains("open");


      /* Close all categories first */

      skillCategories.forEach((item) => {

        item.classList.remove("open");

        const itemButton =
          item.querySelector(".skill-header");

        if (itemButton) {

          itemButton.setAttribute(
            "aria-expanded",
            "false"
          );

        }

      });


      /* Open selected category */

      if (!isCurrentlyOpen) {

        category.classList.add("open");

        button.setAttribute(
          "aria-expanded",
          "true"
        );

      }

    });

  }


  /* =====================================
     PROJECT DETAILS
  ===================================== */

  const projectCards =
    document.querySelectorAll(".project-card");

  projectCards.forEach((card) => {

    const button =
      card.querySelector(".project-toggle");

    if (!button) return;

    button.setAttribute(
      "aria-expanded",
      "false"
    );

    button.addEventListener("click", () => {

      const isOpen =
        card.classList.toggle("show-details");

      button.setAttribute(
        "aria-expanded",
        String(isOpen)
      );

      button.textContent =
        isOpen
          ? "Hide Details"
          : "View Details";

    });

  });


  /* =====================================
     CERTIFICATIONS ACCORDION
  ===================================== */

  const certifications =
    document.querySelector(".certifications");

  if (certifications) {

    const certToggle =
      certifications.querySelector(".cert-toggle");

    if (certToggle) {

      certToggle.setAttribute(
        "aria-expanded",
        "false"
      );


      certToggle.addEventListener("click", () => {

        const isOpen =
          certifications.classList.toggle("open");

        certToggle.setAttribute(
          "aria-expanded",
          String(isOpen)
        );

      });

    }

  }


  /* =====================================
     ACTIVE NAVIGATION
  ===================================== */

  const sections =
    document.querySelectorAll(
      "main section[id]"
    );

  const navigationLinks =
    document.querySelectorAll(
      ".nav-links a"
    );


  if (
    sections.length &&
    navigationLinks.length
  ) {

    const observer =
      new IntersectionObserver(
        (entries) => {

          entries.forEach((entry) => {

            if (entry.isIntersecting) {

              navigationLinks.forEach((link) => {

                link.classList.remove("active");

                if (
                  link.getAttribute("href") ===
                  `#${entry.target.id}`
                ) {

                  link.classList.add("active");

                }

              });

            }

          });

        },
        {
          rootMargin:
            "-25% 0px -65% 0px"
        }
      );


    sections.forEach((section) => {

      observer.observe(section);

    });

  }


  /* =====================================
     COPYRIGHT YEAR
  ===================================== */

  const yearElements =
    document.querySelectorAll("[data-year]");

  yearElements.forEach((element) => {

    element.textContent =
      new Date().getFullYear();

  });

});
