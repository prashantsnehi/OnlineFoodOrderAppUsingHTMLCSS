let cart = [];

window.onload = () => displayItems(foodItems);

function displayItems(items) {
  const container = document.getElementById("food-list");
  container.innerHTML = "";
  items.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h4>${item.name}</h4>
      <img src="${item.image}" alt="${item.name}" />
      <p>₹${item.price}</p>
      <button onclick='addToCart(${JSON.stringify(item)})'>Add</button>`;
    container.appendChild(card);
  });
}

function filterCategory(category) {
  if (category === "All") displayItems(foodItems);
  else displayItems(foodItems.filter(i => i.category === category));
}

function addToCart(item) {
  cart.push(item);
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById("cart-items");
  const total = document.getElementById("total");
  cartList.innerHTML = "";
  let sum = 0;
  cart.forEach(i => {
    const li = document.createElement("li");
    li.textContent = `${i.name} - ₹${i.price}`;
    cartList.appendChild(li);
    sum += i.price;
  });
  total.textContent = sum;
}

function makePayment() {
  alert("Simulated Payment Success ✅");
  cart = [];
  updateCart();
}
