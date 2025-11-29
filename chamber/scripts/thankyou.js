document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const container = document.getElementById("formData");

  // List of required fields you want to show
  const requiredFields = [
    "firstName",
    "lastname",
    "orgTitle",
    "email",
    "mobile",
    "organization",
    "membership"
  ];

  requiredFields.forEach(key => {
    const value = params.get(key);
    if (value) {
      const p = document.createElement("p");
      // Format key nicely (capitalize, add spaces)
      const label = key.replace(/([A-Z])/g, " $1")
                       .replace(/^./, str => str.toUpperCase());
      p.innerHTML = `<strong>${label}:</strong> ${value}`;
      container.appendChild(p);
    }
  });
});