export const cart = {
  items: [],
  addItem(laptop) {
    const existingItem = this.items.find((item) => item.name === laptop.name);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.items.push({ ...laptop, quantity: 1 });
    }
    this.renderCart();
  },
  removeItem(laptop) {
    this.items = this.items.filter((item) => item.name !== laptop.name);
    this.renderCart();
  },
  clearCart() {
    this.items = [];
    this.renderCart();
  },
  incrementQuantity(name) {
    const item = this.items.find((item) => item.name === name);
    if (item) {
      item.quantity += 1;
    }
    this.renderCart();
  },
  decrementQuantity(name) {
    const item = this.items.find((item) => item.name === name);
    if (item && item.quantity > 1) {
      item.quantity -= 1;
    } else {
      this.removeItem(item);
    }
    this.renderCart();
  },
  renderCart() {
    const cartItemsContainer = document.getElementById("cartItems");
    cartItemsContainer.innerHTML = this.items
      .map(
        (item) => `
      <li>
        <img src="${item.image}" alt="${item.name}"/>
        <span>${item.name}</span>
        <span>${item.price}$</span>
        <span>Quantity: ${item.quantity}</span>
        <button class="incrementBtn" data-name="${item.name}">+</button>
        <button class="decrementBtn" data-name="${item.name}">-</button>
        <button class="removeBtn" data-name="${item.name}">Remove</button>
      </li>
    `
      )
      .join("");

    const total = this.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    document.getElementById("cartTotal").textContent = total;
  },
};

export function addToCart(laptop) {
  cart.addItem(laptop);
}
