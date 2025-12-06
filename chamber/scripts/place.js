import {places} from '../data/places.mjs';
const cardsContainer = document.querySelector(".pcards");

// Build cards
places.forEach(places => {
  const pcard = document.createElement("div");
  pcard.classList.add("pcard");
  pcard.innerHTML = `
    <h2>${places.activity}</h2>
    <img src="${places.photo_url}" alt="${places.activity}" loading="lazy">
    <address>${places.address}</address>
    <p>${places.description}</p>
    <button>Learn More</button>
  `;
  cardsContainer.appendChild(pcard);
});

// Visitor message logic
const visitorMessage = document.getElementById("visitor-message");
const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

if (!lastVisit) {
  visitorMessage.textContent = "Welcome! Let us know if you have any questions.";
} else {
  const daysPassed = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
  if (daysPassed < 1) {
    visitorMessage.textContent = "Back so soon! Awesome!";
  } else if (daysPassed === 1) {
    visitorMessage.textContent = `You last visited ${daysPassed} day ago.`;
  } else {
    visitorMessage.textContent = `You last visited ${daysPassed} days ago.`;
  }
}
localStorage.setItem("lastVisit", now);

