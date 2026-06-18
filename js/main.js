
fetch("data/restaurants.json")
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById("deals");

    data.forEach(d => {
      const li = document.createElement("li");
      li.textContent = `${d.name} - ${d.deal} - ${d.price} ISK`;
      list.appendChild(li);
    });
  });
