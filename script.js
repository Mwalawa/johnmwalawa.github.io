document.addEventListener("DOMContentLoaded", () => {

  /* =====================================
     MOBILE NAVIGATION
  ===================================== */

  const menuBtn = document.getElementById("menuBtn");
  const navLinks = document.getElementById("navLinks");

  if (menuBtn && navLinks) {

    menuBtn.setAttribute("aria-expanded", "false");

    menuBtn.addEventListener("click", () => {

      const isOpen =
        navLinks.classList.toggle("open");

      const icon =
        menuBtn.querySelector("i");

      if (icon) {
        icon.className = isOpen
          ? "fa-solid fa-xmark"
          : "fa-solid fa-bars";
      }

      menuBtn.setAttribute(
        "aria-expanded",
        String(isOpen)
      );
    });


    /* Close after clicking link */

    navLinks.querySelectorAll("a")
      .forEach(link => {

        link.addEventListener("click", () => {

          navLinks.classList.remove("open");

          const icon =
            menuBtn.querySelector("i");

          if (icon) {
            icon.className =
              "fa-solid fa-bars";
          }

          menuBtn.setAttribute(
            "aria-expanded",
            "false"
          );
        });

      });


    /* Close when clicking outside */

    document.addEventListener("click", event => {

      if (
        !navLinks.contains(event.target) &&
        !menuBtn.contains(event.target)
      ) {

        navLinks.classList.remove("open");

        const icon =
          menuBtn.querySelector("i");

        if (icon) {
          icon.className =
            "fa-solid fa-bars";
        }

        menuBtn.setAttribute(
          "aria-expanded",
          "false"
        );
      }

    });


    /* Escape key */

    document.addEventListener("keydown", event => {

      if (event.key === "Escape") {

        navLinks.classList.remove("open");

        const icon =
          menuBtn.querySelector("i");

        if (icon) {
          icon.className =
            "fa-solid fa-bars";
        }

        menuBtn.setAttribute(
          "aria-expanded",
          "false"
        );
      }

    });

  }


  /* =====================================
     SKILLS ACCORDION
  ===================================== */

  const skillCategories =
    document.querySelectorAll(
      ".skill-category"
    );

  skillCategories.forEach(category => {

    const header =
      category.querySelector(
        ".skill-header"
      );

    if (!header) return;

    header.setAttribute(
      "aria-expanded",
      "false"
    );


    header.addEventListener(
      "click",
      () => {

        const wasOpen =
          category.classList.contains(
            "open"
          );


        /* Close everything */

        skillCategories.forEach(
          otherCategory => {

            otherCategory.classList.remove(
              "open"
            );

            const otherHeader =
              otherCategory.querySelector(
                ".skill-header"
              );

            if (otherHeader) {

              otherHeader.setAttribute(
                "aria-expanded",
                "false"
              );

            }

          }
        );


        /* Open selected category */

        if (!wasOpen) {

          category.classList.add(
            "open"
          );

          header.setAttribute(
            "aria-expanded",
            "true"
          );

        }

      }
    );

  });


  /* =====================================
     PROJECT DETAILS
  ===================================== */

  const projectCards =
    document.querySelectorAll(
      ".project-card"
    );

  projectCards.forEach(card => {

    const button =
      card.querySelector(
        ".project-toggle"
      );

    if (!button) return;

    const label =
      button.querySelector("span");


    button.setAttribute(
      "aria-expanded",
      "false"
    );


    button.addEventListener(
      "click",
      () => {

        const isOpen =
          card.classList.toggle(
            "show-details"
          );


        button.setAttribute(
          "aria-expanded",
          String(isOpen)
        );


        if (label) {

          label.textContent =
            isOpen
              ? "Hide Details"
              : "View Details";

        }

      }
    );

  });


  /* =====================================
     ACTIVE NAVIGATION
  ===================================== */

  const sections =
    document.querySelectorAll(
      "main section[id]"
    );

  const navItems =
    document.querySelectorAll(
      ".nav-links a"
    );


  if (
    "IntersectionObserver" in window
  ) {

    const observer =
      new IntersectionObserver(
        entries => {

          const visibleSection =
            entries
              .filter(
                entry =>
                  entry.isIntersecting
              )
              .sort(
                (a, b) =>
                  b.intersectionRatio -
                  a.intersectionRatio
              )[0];


          if (!visibleSection) return;


          navItems.forEach(link => {

            const active =
              link.getAttribute("href") ===
              `#${visibleSection.target.id}`;

            link.classList.toggle(
              "active",
              active
            );

          });

        },
        {
          rootMargin:
            "-35% 0px -55% 0px",

          threshold: [
            0,
            0.25,
            0.5,
            0.75
          ]
        }
      );


    sections.forEach(section => {

      observer.observe(section);

    });

  }


  /* =====================================
     COPYRIGHT YEAR
  ===================================== */

  const year =
    document.querySelector(
      "[data-year]"
    );

  if (year) {

    year.textContent =
      new Date().getFullYear();

  }

});
