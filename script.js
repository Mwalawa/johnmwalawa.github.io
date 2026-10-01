document.addEventListener("DOMContentLoaded", () => {


  /* =====================================
     MOBILE NAVIGATION
  ===================================== */

  const menuToggle =
    document.querySelector("#menuToggle");

  const navLinks =
    document.querySelector("#navLinks");


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


      if (!isCurrentlyOpen) {

        category.classList.add("open");

        button.setAttribute(
          "aria-expanded",
          "true"
        );

      }

    });

  });


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

  const certSection =
    document.querySelector("#certifications");

  const certButton =
    document.querySelector(".cert-toggle");


  if (certSection && certButton) {

    certButton.setAttribute(
      "aria-expanded",
      "false"
    );


    certButton.addEventListener("click", () => {

      const isOpen =
        certSection.classList.toggle("open");


      certButton.setAttribute(
        "aria-expanded",
        String(isOpen)
      );

    });

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


  /* =====================================
     PORTFOLIO CHATBOT
  ===================================== */

  const chatButton =
    document.querySelector("#chatButton");

  const chatWindow =
    document.querySelector("#chatWindow");

  const chatClose =
    document.querySelector("#chatClose");

  const visitorForm =
    document.querySelector("#visitorForm");

  const visitorName =
    document.querySelector("#visitorName");

  const visitorEmail =
    document.querySelector("#visitorEmail");

  const chatMessages =
    document.querySelector("#chatMessages");

  const chatOptions =
    document.querySelector("#chatOptions");

  const messageForm =
    document.querySelector("#messageForm");

  const messageText =
    document.querySelector("#messageText");


  /*
     Replace this with your deployed
     Google Apps Script Web App URL.
  */

  const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwzs3343qCFRZIUY5KdnDA7bS8ZIkwmRkCc1p2XCr8MaePvOIqmUzchLFBLWO_jYvwt/exec";


  let visitor = {
    name: "",
    email: ""
  };


  /*
     Open chatbot
  */

  if (chatButton && chatWindow) {

    chatButton.addEventListener("click", () => {

      chatWindow.classList.add("open");

      chatButton.classList.add("hidden");

      if (visitor.name) {

        showChatOptions();

      } else {

        visitorName.focus();

      }

    });

  }


  /*
     Close chatbot
  */

  if (chatClose) {

    chatClose.addEventListener("click", closeChat);

  }


  function closeChat() {

    if (chatWindow) {

      chatWindow.classList.remove("open");

    }

    if (chatButton) {

      chatButton.classList.remove("hidden");

    }

  }


  /*
     Close with Escape
  */

  document.addEventListener("keydown", (event) => {

    if (
      event.key === "Escape" &&
      chatWindow &&
      chatWindow.classList.contains("open")
    ) {

      closeChat();

    }

  });


  /*
     Visitor details
  */

  if (visitorForm) {

    visitorForm.addEventListener("submit", (event) => {

      event.preventDefault();


      const name =
        visitorName.value.trim();

      const email =
        visitorEmail.value.trim();


      if (!name || !email) {

        return;

      }


      if (!isValidEmail(email)) {

        alert("Please enter a valid email address.");

        visitorEmail.focus();

        return;

      }


      visitor.name = name;

      visitor.email = email;


      visitorForm.classList.add("hidden");


      addBotMessage(
        `Thanks, ${escapeHtml(name)}! 👋`
      );


      setTimeout(() => {

        addBotMessage(
          "How can I help you today?"
        );

        showChatOptions();

      }, 400);

    });

  }


  /*
     Show chatbot options
  */

  function showChatOptions() {

    if (!chatOptions) return;

    chatOptions.classList.remove("hidden");

  }


  /*
     Quick option buttons
  */

  document.addEventListener("click", (event) => {

    const option =
      event.target.closest(".chat-option");

    if (!option) return;


    const action =
      option.dataset.action;


    handleChatAction(action);

  });


  /*
     Handle chatbot actions
  */

  function handleChatAction(action) {

    if (!chatMessages) return;


    if (action === "about") {

      addUserMessage("Tell me about John.");

      addBotMessage(
        "John Anderson Mwalawa is an ICT professional with experience in IT support, systems administration, business applications, and technology-driven project support."
      );

    }


    else if (action === "skills") {

      addUserMessage("What are John's skills?");

      addBotMessage(
        "John's skills include IT support, systems administration, Active Directory, Microsoft 365, ERP support, networking, troubleshooting, system deployment, testing, ICT operations, cybersecurity, and IT project support."
      );

    }


    else if (action === "experience") {

      addUserMessage("What experience does John have?");

      addBotMessage(
        "John has experience across IT support, ICT operations, systems administration, project support, freelance IT support, and AI data annotation, review and quality assurance."
      );

    }


    else if (action === "projects") {

      addUserMessage("What projects has John worked on?");

      addBotMessage(
        "His portfolio includes Zetech University ICT Support, ERP & Business Systems Support, IT Support & Infrastructure, and AI Data Annotation & QA."
      );

    }


    else if (action === "certifications") {

      addUserMessage("What certifications does John have?");

      addBotMessage(
        "John has training and certifications including Cisco DevNet Associate, CyberOps Associate, Network Defense, Endpoint Security, Agile Project Management, Business Analysis & Process Management, DevOps, Chatbot Development, and other professional programs."
      );

    }


    else if (action === "cv") {

      addUserMessage("I'd like to view John's CV.");

      addBotMessage(
        "Sure! You can view or download John's CV below."
      );


      addChatLink(
        "📄 Download CV",
        "John%20Mwalawa%20CV_.pdf"
      );

    }


    else if (action === "contact") {

      addUserMessage("I want to contact John.");

      addBotMessage(
        "You can contact John directly by email, phone, LinkedIn, or send him a message through this chatbot."
      );


      addChatLink(
        "✉️ Email John",
        "mailto:johnmwalawa@gmail.com"
      );

    }


    else if (action === "message") {

      addUserMessage("I want to send John a message.");

      if (chatOptions) {

        chatOptions.classList.add("hidden");

      }

      const messageBox =
        document.querySelector("#messageBox");

      if (messageBox) {

        messageBox.classList.remove("hidden");

        messageText.focus();

      }

    }

  }


  /*
     Send message to Google Apps Script
  */

  if (messageForm) {

    messageForm.addEventListener("submit", async (event) => {

      event.preventDefault();


      const message =
        messageText.value.trim();


      if (!message) return;


      if (!visitor.name || !visitor.email) {

        addBotMessage(
          "Please provide your name and email first."
        );

        return;

      }


      const submitButton =
        messageForm.querySelector(
          "button[type='submit']"
        );


      if (submitButton) {

        submitButton.disabled = true;

        submitButton.textContent =
          "Sending...";

      }


      try {

        const response =
          await fetch(
            GOOGLE_SCRIPT_URL,
            {
              method: "POST",

              headers: {
                "Content-Type":
                  "text/plain;charset=utf-8"
              },

              body: JSON.stringify({
                name: visitor.name,
                email: visitor.email,
                message: message,
                page: window.location.href
              })
            }
          );


        const result =
          await response.json();


        if (result.success) {

          messageText.value = "";

          const messageBox =
            document.querySelector("#messageBox");

          if (messageBox) {

            messageBox.classList.add("hidden");

          }


          addBotMessage(
            "✅ Your message has been sent successfully. John will be able to reach you using the email address you provided. Thank you!"
          );


          setTimeout(() => {

            showChatOptions();

          }, 500);

        }

        else {

          throw new Error(
            result.message ||
            "Message could not be sent."
          );

        }

      }

      catch (error) {

        console.error(error);

        addBotMessage(
          "Sorry, there was a problem sending your message. Please try again or contact John directly by email."
        );

      }

      finally {

        if (submitButton) {

          submitButton.disabled = false;

          submitButton.textContent =
            "Send Message";

        }

      }

    });

  }


  /*
     Add bot message
  */

  function addBotMessage(message) {

    if (!chatMessages) return;


    const bubble =
      document.createElement("div");

    bubble.className =
      "chat-message bot-message";


    bubble.innerHTML =
      message;


    chatMessages.appendChild(bubble);


    scrollChat();

  }


  /*
     Add visitor message
  */

  function addUserMessage(message) {

    if (!chatMessages) return;


    const bubble =
      document.createElement("div");

    bubble.className =
      "chat-message user-message";


    bubble.textContent =
      message;


    chatMessages.appendChild(bubble);


    scrollChat();

  }


  /*
     Add link inside chatbot
  */

  function addChatLink(text, href) {

    if (!chatMessages) return;


    const link =
      document.createElement("a");

    link.className =
      "chat-action-link";

    link.href =
      href;

    link.textContent =
      text;


    if (
      href.startsWith("http")
    ) {

      link.target = "_blank";

      link.rel = "noopener";

    }


    chatMessages.appendChild(link);


    scrollChat();

  }


  /*
     Scroll chatbot to latest message
  */

  function scrollChat() {

    if (chatMessages) {

      chatMessages.scrollTop =
        chatMessages.scrollHeight;

    }

  }


  /*
     Validate email
  */

  function isValidEmail(email) {

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  }


  /*
     Prevent unsafe HTML in visitor name
  */

  function escapeHtml(text) {

    const div =
      document.createElement("div");

    div.textContent =
      text;

    return div.innerHTML;

  }


});
