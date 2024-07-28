export function renderGoods(goods) {
  const laptopCard = goods
    .map(
      ({
        name,
        display,
        price,
        availability,
        image,
        specs: { processor, ram, storage, graphics },
      }) => {
        return `<div class="card">
            <img src="${image}"/>
            <h3>${name}</h3>
            <ul>
                 <li>${processor}</li>
                 <li>${ram}</li>
                <li>${storage}</li>
                <li>${display}</li>
                <li>${graphics}</li>
            </ul>
        <button class="buyBtn" ${!availability ? "disabled" : ""}>
        ${!availability ? "Купити" : "Замовити"}  <span>${price}$</span>
        </button>
        </div>`;
      }
    )
    .join("");
  document.querySelector(".goods_container").innerHTML = laptopCard;
}
