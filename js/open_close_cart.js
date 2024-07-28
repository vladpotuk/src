export function openCart() {
  document.querySelector(".cart_icon").addEventListener("click", () => {
    document.querySelector(".cart").classList.toggle("show");
  });
}
export function closeCart() {
  document.querySelector("#close").addEventListener("click", () => {
    document.querySelector(".cart").classList.remove("show");
  });
}
