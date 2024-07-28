export function addHeader() {
  const header = `<ul><li>Home</li><li>Price</li><li>Contacts</
    li></ul><img class="cart_icon" src="https://w7.pngwing.com/pngs/1022/32/png-transparent-shopping-cart-icon-shopping-cart-logo-icon-shopping-cart-label-coffee-shop-shopping-mall-thumbnail.png"/>`;
  document.querySelector("header").insertAdjacentHTML("beforeend", header);
}
