import { laptops } from "./js/db.js";
import { renderGoods } from "./js/renderGoods.js";

document.addEventListener("DOMContentLoaded",()=>{
    renderGoods(laptops);
});
console.log("Index");