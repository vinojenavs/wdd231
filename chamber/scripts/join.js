document.addEventListener("DOMContentLoaded", () => {
  // Open modal when clicking "More Info"
  document.querySelectorAll(".card a").forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
      const modalId = link.getAttribute("href").substring(1); // remove #
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.style.display = "block";
      }
    });
  });

  // Close modal when clicking any close button
  document.querySelectorAll(".modal .close-btn").forEach(button => {
    button.addEventListener("click", () => {
      const modal = button.closest(".modal");
      if (modal) {
        modal.style.display = "none";
      }
    });
  });

  // Close modal when clicking outside modal-content
  window.addEventListener("click", event => {
    if (event.target.classList.contains("modal")) {
      event.target.style.display = "none";
    }
  });
});