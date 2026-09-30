document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     MOBILE NAVIGATION
  ========================= */

  const menuBtn = document.getElementById("menuBtn");
  const navLinks = document.getElementById("navLinks");

  if (menuBtn && navLinks) {

    menuBtn.setAttribute("aria-expanded", "false");

    menuBtn.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      const icon = menuBtn.querySelector("i");

      if (icon) {
        icon.className = isOpen
          ? "fa-solid fa-xmark"
          : "fa-solid fa-bars";
      }

      menuBtn.setAttribute("aria-expanded", String(isOpen));
    });

    // Close mobile menu after clicking a navigation link
    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");

        const icon = menuBtn.querySelector("i");
        if (icon) {
          icon.className = "fa-solid fa-bars";
        }

        menuBtn.setAttribute("aria-expanded", "false");
      });
    });

    // Close menu when clicking outside
    document.addEventListener("click", event => {
      if (
        !navLinks.contains(event.target) &&
        !menuBtn.contains(event.target)
      ) {
        navLinks.classList.remove("open");

        const icon = menuBtn.querySelector("i");
        if (icon) {
          icon.className = "fa-solid fa-bars";
        }

        menuBtn.setAttribute("aria-expanded", "false");
      }
    });

    // Close menu with Escape
    document.addEventListener("keydown", event => {
      if (event.key === "Escape") {
        navLinks.classList.remove("open");

        const icon = menuBtn.querySelector("i");
        if (icon) {
          icon.className = "fa-solid fa-bars";
        }

        menuBtn.setAttribute("aria-expanded", "false");
      }
    });
  }


  /* =========================
     SKILLS ACCORDION
  ========================= */

  const skillCategories = document.querySelectorAll(".skill-category");

  skillCategories.forEach(category => {

    const header = category.querySelector(".skill-header");

    if (!header) return;

    header.setAttribute("aria-expanded", "false");

    header.addEventListener("click", () => {

      const isCurrentlyOpen =
        category.classList.contains("open");

      // Close all categories first
      skillCategories.forEach(otherCategory => {

        otherCategory.classList.remove("open");

        const otherHeader =
          otherCategory.querySelector(".skill-header");

        if (otherHeader) {
          otherHeader.setAttribute("aria-expanded", "false");
        }
      });

      // Open selected category
      if (!isCurrentlyOpen) {

        category.classList.add("open");

        header.setAttribute("aria-expanded", "true");
      }
    });
  });


  /* =========================
     PROJECT DETAILS
  ========================= */

  const projectCards =
    document.querySelectorAll(".project-card");

  projectCards.forEach(card => {

    const button =
      card.querySelector(".project-toggle");

    if (!button) return;

    const label =
      button.querySelector("span");

    button.setAttribute("aria-expanded", "false");

    button.addEventListener("click", () => {

      const isOpen =
        card.classList.toggle("show-details");

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
    });
  });


  /* =========================
     ACTIVE NAVIGATION LINK
  ========================= */

  const sections =
    document.querySelectorAll("main section[id]");

  const navItems =
    document.querySelectorAll(".nav-links a");

  if ("IntersectionObserver" in window) {

    const observer =
      new IntersectionObserver(
        entries => {

          const visibleSection =
            entries
              .filter(entry => entry.isIntersecting)
              .sort(
                (a, b) =>
                  b.intersectionRatio -
                  a.intersectionRatio
              )[0];

          if (!visibleSection) return;

          navItems.forEach(link => {

            const isActive =
              link.getAttribute("href") ===
              `#${visibleSection.target.id}`;

            link.classList.toggle(
              "active",
              isActive
            );
          });
        },
        {
          rootMargin: "-35% 0px -55% 0px",
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


  /* =========================
     SMOOTH SCROLLING
  ========================= */

  document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", event => {

      const targetId =
        link.getAttribute("href");

      if (!targetId || targetId === "#") {
        return;
      }

      const target =
        document.querySelector(targetId);

      if (!target) return;

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  });


  /* =========================
     CURRENT YEAR
  ========================= */

  const yearElement =
    document.querySelector("[data-year]");

  if (yearElement) {
    yearElement.textContent =
      new Date().getFullYear();
  }

});
