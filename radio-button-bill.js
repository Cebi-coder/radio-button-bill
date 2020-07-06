
const billItemTypeRadio = document.querySelector(".billItemTypeRadio");
const addButton = document.querySelector(".radioBillAddBtn");
const callTotalRadio = document.querySelector(".callTotalTwo");
const smsTotalRadio = document.querySelector(".smsTotalTwo");
const totalTwoElem = document.querySelector(".totalTwo");



var totalCall = 0;
var totalSms = 0;
var costTotal = 0

//function radioBillTotal() {

   // var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
   // if (checkedRadioBtn){
       // var billItemType = checkedRadioBtn.value
        
    //if ( billItemType === "call") {
      //  totalCall += 2.75
    //}
    //else if ( billItemType === "sms") {
      //  totalSms += 0.75;
    //}

    
    //callTotalRadio.innerHTML = totalCall.toFixed(2);
    //smsTotalRadio.innerHTML = totalSms.toFixed(2);

    //costTotal = totalCall + totalSms;
    //totalTwoElem.innerHTML = costTotal.toFixed(2);

    //totalColor();
//}
//}

function totalColor() {

    totalTwoElem.classList.remove("danger");
    totalTwoElem.classList.remove("warning")
    if (costTotal >= 50) {

        totalTwoElem.classList.add("danger");
    }
    else if (costTotal >= 30) {
        totalTwoElem.classList.add("warning");
    }

}

addButton.addEventListener("click", radioBillTotal);

