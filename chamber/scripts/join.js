// Wait until DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  // Select all "More Info" links inside cards
  const links = document.querySelectorAll(".card a");

  // Attach click event to each link
  links.forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault(); // prevent jump to #id
      const modalId = link.getAttribute("href").substring(1); // remove #
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.style.display = "block";
      }
    });
  });

  // Close buttons inside modals
  const closeButtons = document.querySelectorAll(".modal button");
  closeButtons.forEach(button => {
    button.addEventListener("click", () => {
      const modal = button.closest(".modal");
      modal.style.display = "none";
    });
  });

  // Close modal when clicking outside modal-content
  window.addEventListener("click", event => {
    if (event.target.classList.contains("modal")) {
      event.target.style.display = "none";
    }
  });
});

// Optional: function for inline onclick="closeModal('id')"
function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.style.display = "none";
  }
}