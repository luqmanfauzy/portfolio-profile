// Typing Animation
// const typingElement = document.getElementById("typing-text");
// const texts = [
//   "Full-Stack Developer",
//   "Frontend Developer",
//   "Backend Developer",
//   "UI/UX Enthusiast",
// ];
// let textIndex = 0;
// let charIndex = 0;
// let isDeleting = false;

// function typeText() {
//   const currentText = texts[textIndex];

//   if (isDeleting) {
//     typingElement.textContent = currentText.substring(0, charIndex - 1);
//     charIndex--;
//   } else {
//     typingElement.textContent = currentText.substring(0, charIndex + 1);
//     charIndex++;
//   }

//   if (!isDeleting && charIndex === currentText.length) {
//     setTimeout(() => (isDeleting = true), 2000);
//   } else if (isDeleting && charIndex === 0) {
//     isDeleting = false;
//     textIndex = (textIndex + 1) % texts.length;
//   }

//   const speed = isDeleting ? 50 : 100;
//   setTimeout(typeText, speed);
// }

// Start typing animation
// typeText();

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    // Close mobile menu if open
    document.getElementById("mobile-menu").classList.add("hidden");
  });
});

// Mobile menu toggle
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Close mobile menu when clicking outside
mobileMenu.addEventListener("click", (e) => {
  if (e.target === mobileMenu) {
    mobileMenu.classList.add("hidden");
  }
});

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

// Observe all fade-in elements
document.querySelectorAll(".fade-in").forEach((el) => {
  observer.observe(el);
});

// Active navigation highlighting
window.addEventListener("scroll", () => {
  const sections = [
    "home",
    "about",
    "skills",
    "projects",
    "experience",
    "contact",
  ];
  const scrollPos = window.scrollY + 100;

  sections.forEach((section) => {
    const element = document.getElementById(section);
    const navLink = document.querySelector(`a[href="#${section}"]`);

    if (element && navLink) {
      const offsetTop = element.offsetTop;
      const height = element.offsetHeight;

      if (scrollPos >= offsetTop && scrollPos < offsetTop + height) {
        document.querySelectorAll(".nav-link").forEach((link) => {
          link.classList.remove("text-accent");
          link.classList.add("text-dark-secondary");
        });
        navLink.classList.add("text-accent");
        navLink.classList.remove("text-dark-secondary");
      }
    }
  });
});

// Contact form handling
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // Simple form validation
    const inputs = this.querySelectorAll("input, textarea");
    let isValid = true;

    inputs.forEach((input) => {
      if (!input.value.trim()) {
        isValid = false;
        input.classList.add("ring-2", "ring-red-500");
      } else {
        input.classList.remove("ring-2", "ring-red-500");
      }
    });

    if (isValid) {
      // Simulate form submission
      const submitBtn = this.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = "Sending...";
      submitBtn.disabled = true;

      setTimeout(() => {
        submitBtn.textContent = "Message Sent!";
        submitBtn.classList.add("bg-green-500");
        this.reset();

        setTimeout(() => {
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
          submitBtn.classList.remove("bg-green-500");
        }, 3000);
      }, 2000);
    }
  });

// Add some interactive effects
document.querySelectorAll(".skill-badge").forEach((badge) => {
  badge.addEventListener("mouseenter", function () {
    this.style.transform = "scale(1.05)";
  });

  badge.addEventListener("mouseleave", function () {
    this.style.transform = "scale(1)";
  });
});

// Navbar background on scroll
// window.addEventListener("scroll", () => {
//   const nav = document.querySelector("nav");
//   if (window.scrollY > 50) {
//     nav.classList.add("bg-light/95");
//     nav.classList.remove("bg-light/90");
//   } else {
//     nav.classList.add("bg-light/90");
//     nav.classList.remove("bg-light/95");
//   }
// });
