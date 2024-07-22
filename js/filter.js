import { renderGoods } from "./renderGoods.js";
export function filterGoods(laptops){
    const processorValue = document.getElementById("processorFilter").value;
    const ramValue = document.getElementById("ramFilter").value;
    const storageValue = document.getElementById("storageFilter").value;
    const displayValue = document.getElementById("displayFilter").value;
    const graphicsValue = document.getElementById("graphicsFilter").value;
    const priceValue = document.getElementById("priceFilter").value;

    const filteredGoods = laptops.filter(
        ({ price, specs: { processor, ram, display, storage, graphics } }) => {
            return (
                (processorValue === "all" || processorValue === processor) &&
                (ramValue === "all" || ramValue === ram) &&
                (storageValue === "all" || storageValue === storage) &&
                (displayValue === "all" || displayValue === display) &&
                (graphicsValue === "all" || graphicsValue === graphics) &&
                price<=priceValue
            );
        }
    );

    renderGoods(filteredGoods);
}
