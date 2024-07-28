import { addHeader } from "./js/addHeader.js";
import { addToCart, cart } from "./js/cart.js";
import { laptops } from "./js/db.js";
import { filterGoods } from "./js/filter.js";
import { closeCart, openCart } from "./js/open_close_cart.js";
import { renderGoods } from "./js/renderGoods.js";
import { renderSelect } from "./js/renderSelect.js";

addHeader();
openCart();
closeCart();

document.addEventListener("DOMContentLoaded", () => {
  renderGoods(laptops);

  const uniqueProcessor = new Set();
  const uniqueRam = new Set();
  const uniqueStorage = new Set();
  const uniqueDisplay = new Set();
  const uniqueGraphics = new Set();

  laptops.forEach(
    ({ specs: { processor, ram, storage, display, graphics } }) => {
      uniqueProcessor.add(processor);
      uniqueRam.add(ram);
      uniqueStorage.add(storage);
      uniqueDisplay.add(display);
      uniqueGraphics.add(graphics);
    }
  );

  renderSelect(
    Array.from(uniqueProcessor),
    document.getElementById("processorFilter")
  );

  renderSelect(Array.from(uniqueRam), document.getElementById("ramFilter"));

  renderSelect(
    Array.from(uniqueStorage),
    document.getElementById("storageFilter")
  );

  renderSelect(
    Array.from(uniqueDisplay),
    document.getElementById("displayFilter")
  );

  renderSelect(
    Array.from(uniqueGraphics),
    document.getElementById("graphicsFilter")
  );

  document.querySelectorAll("select").forEach((link) => {
    link.addEventListener("change", () => {
      filterGoods(laptops);
    });
  });

  document.getElementById("priceFilter").addEventListener("input", (e) => {
    document.getElementById("priceValue").textContent =
      document.getElementById("priceFilter").value;
    filterGoods(laptops);
  });

  document.querySelector(".goods_container").addEventListener("click", (e) => {
    if (e.target.classList.contains("buyBtn")) {
      const laptopName = e.target
        .closest(".card")
        .querySelector("h3").textContent;
      const laptop = laptops.find((product) => product.name === laptopName);
      addToCart.call(cart, laptop);
    }
  });

  document.getElementById("cartItems").addEventListener("click", (e) => {
    if (e.target.classList.contains("incrementBtn")) {
      const name = e.target.getAttribute("data-name");
      cart.incrementQuantity(name);
    } else if (e.target.classList.contains("decrementBtn")) {
      const name = e.target.getAttribute("data-name");
      cart.decrementQuantity(name);
    } else if (e.target.classList.contains("removeBtn")) {
      const name = e.target.getAttribute("data-name");
      const laptop = laptops.find((product) => product.name === name);
      cart.removeItem(laptop);
    }
  });

  document.getElementById("clearCart").addEventListener("click", () => {
    cart.clearCart();
  });
});
