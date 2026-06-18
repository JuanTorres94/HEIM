// TOGGLE FILTER MENU
const toggleBtn = document.getElementById("toggleFilterBtn");
const filterOptions = document.getElementById("filterOptions");

toggleBtn.addEventListener("click", () => {
  filterOptions.classList.toggle("hidden");
});

// SAMPLE DATA (replace later with JSON)
const deals = [
  { name: "Street Food", deal: "2-for-1", price: 2990 },
  { name: "Domino's", deal: "30% off", price: 2500 },
  { name: "Sushi Place", deal: "20% off", price: 4000 },
  { name: "Burger Joint", deal: "Free fries", price: 2800 },
];

// DISPLAY DEALS
const container = document.getElementById("deals");

deals.forEach(d => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <h3>${d.name}</h3>
    <p>${d.deal}</p>
    <strong>${d.price} ISK</strong>
  `;

  container.appendChild(card);
});
