
const billItemTypeRadio = document.querySelector(".billItemTypeRadio");
const addButton = document.querySelector(".radioBillAddBtn");
const callTotalRadio = document.querySelector(".callTotalTwo");
const smsTotalRadio = document.querySelector(".smsTotalTwo");
const totalTwoElem = document.querySelector(".totalTwo");


const radioBill = radioBillCost();

function clickedButton() {


  var billItemType = billItemTypeRadio.value.trim();

  radioBill.radioBillTotal(billItemType);

  callTotalRadio.innerHTML = radioBill.getTotalCall();

  smsTotalRadio.innerHTML = radioBill.getTotalSms();

  totalTwoElem.classList.add(radioBill.totalColor());

  totalTwoElem.innerHTML = radioBill.getTotal();


}

addButton.addEventListener("click", clickedButton);

