
const billItemTypeRadio = document.querySelector(".billItemTypeRadio");
const addButton = document.querySelector(".radioBillAddBtn");
const callTotalRadio = document.querySelector(".callTotalTwo");
const smsTotalRadio = document.querySelector(".smsTotalTwo");
const totalTwoElem = document.querySelector(".totalTwo");


const radioBill = radioBillCost();
//const newColor = radioBillCost(styleColor);

function clickedButton() {

  var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");

  var billItemType = billItemTypeRadio.value.trim();

  radioBill.radioBillTotal(billItemType);

  callTotalRadio.innerHTML = radioBill.getTotalCall();

  smsTotalRadio.innerHTML = radioBill.getTotalSms();

  totalTwoElem.classList.add(radioBill.totalColor());

  totalTwoElem.innerHTML = radioBill.getTotal();


}

addButton.addEventListener("click", clickedButton);

