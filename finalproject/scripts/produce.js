async function laodProduceList() {
    //fetch data from JSON file
    const response = await fetch("data/produce.json");
    const produce = await response.json();

    //create innerHTML
    const produceList = document.getElementById("produce-list");
    produceList.innerHTML = produce.map(m => `
        <div class="produce-card">
          <img src="${m.image}" alt="${m.name} from ${m.farm}" loading="lazy">
          <div class="card-content">
            <h3>${m.name}</h3>
            <p><span class="badge">${m.season} season</span></p>
            <p>₦${m.pricePerKg}/kg • ${m.availability} • ${m.farm}</p>
            <button class="button openModalBtn" data-id="${m.id}">More Details</button>
          </div>
        </div>
        `).join("");
};

laodProduceList();