const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}

const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

const projectsToggle = document.querySelector("[data-projects-toggle]");
const projectsGrid = document.querySelector("[data-projects]");

if (projectsToggle && projectsGrid) {
  projectsToggle.addEventListener("click", () => {
    const hiddenCards = projectsGrid.querySelectorAll(".project-card.is-hidden");
    const isExpanded = projectsToggle.getAttribute("aria-expanded") === "true";

    hiddenCards.forEach((card) => {
      card.classList.toggle("is-hidden", isExpanded);
    });

    projectsToggle.setAttribute("aria-expanded", (!isExpanded).toString());
  projectsToggle.textContent = isExpanded ? "Ver mas" : "Ver menos";
  });
}

const modalTriggers = document.querySelectorAll("[data-modal-open]");
const modalCloses = document.querySelectorAll("[data-modal-close]");

const toggleModal = (id, isOpen) => {
  const modal = document.getElementById(`${id}-modal`);
  if (!modal) return;
  modal.classList.toggle("is-open", isOpen);
  modal.setAttribute("aria-hidden", (!isOpen).toString());
  document.body.style.overflow = isOpen ? "hidden" : "";
};

modalTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    toggleModal(trigger.getAttribute("data-modal-open"), true);
  });
});

modalCloses.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    toggleModal(trigger.getAttribute("data-modal-close"), false);
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  document.querySelectorAll(".modal.is-open").forEach((modal) => {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
  });
  document.body.style.overflow = "";
});
