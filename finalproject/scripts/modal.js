// modal.js
async function initModal() {
  // Fetch produce data
  const response = await fetch("data/produce.json");
  const produce = await response.json();

  // Get modal elements
  const modal = document.getElementById("myModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalDescription = document.getElementById("modalDescription");
  const closeBtn = document.querySelector("#close");

  // Delegate click events for all "More Details" buttons
  document.addEventListener("click", function (e) {
    if (e.target && e.target.classList.contains("openModalBtn")) {
      const id = e.target.getAttribute("data-id");
      const item = produce.find(p => p.id == id);

      if (item) {
        // Fill modal content
        modalTitle.textContent = item.name;
        modalDescription.innerHTML = `
          <strong>Season:</strong> ${item.season}<br>
          <strong>Price per Kg:</strong> ₦${item.pricePerKg}<br>
          <strong>Farm:</strong> ${item.farm}<br>
          <strong>Availability:</strong> ${item.availability}<br>
          <img src="${item.image}" alt="${item.name}" style="width:100%;margin-top:10px;">
        `;
        // Show modal
        modal.style.display = "block";
      }
    }
  });

  // Close modal when "x" is clicked
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Close modal when clicking outside content
  window.addEventListener("click", (e) => {
    if (e.target == modal) {
      modal.style.display = "none";
    }
  });
}

// Initialize modal functionality
initModal();