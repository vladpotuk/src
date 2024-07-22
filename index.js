import { laptops } from "./js/db.js";
import { filterGoods } from "./js/filter.js";
import { renderGoods } from "./js/renderGoods.js";
import { renderSelect } from "./js/renderSelect.js";

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
      uniqueDisplay.add(storage);
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
    console.log(e);
    document.getElementById("priceValue").textContent =
      document.getElementById("priceFilter").value;
    filterGoods(laptops);
  });
});
