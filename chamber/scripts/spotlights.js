// scripts/spotlights.js
async function loadSpotlights() {
  // "../" moves up one folder from scripts/ to chamber/
  const response = await fetch("members.json");
  const members = await response.json();

  const eligible = members.filter(m => m.membership === "Gold" || m.membership === "Silver");
  const shuffled = eligible.sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, 3);

  const container = document.getElementById("spotlight-container");
  container.innerHTML = selected.map(m => `
    <div class="spotlight-card">
      <img src="${m.logo}" alt="${m.name} logo">
      <div>
      <h3>${m.name}</h3>
      <p><strong>ADDRESS: </strong>${m.address}</p>
      <p><strong>PHONE: </strong>${m.phone}</p>
      <p><strong>URL: </strong><a href="${m.website}" target="_blank">${m.website}</a></p>
      <p class="membership"><strong>Membership status: </strong>${m.membership} Member</p>
      </div>
    </div>
  `).join("");
};

loadSpotlights();