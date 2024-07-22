export function renderSelect(dataArray,elementLInk){
    console.log(dataArray,elementLInk);
    const sortedDataArray = dataArray.sort()
    sortedDataArray.forEach((data)=>{
        const optionElement = `<option value = "${data}">${data}</option>`;
        elementLInk.insertAdjacentHTML("beforeend", optionElement);
    });
}