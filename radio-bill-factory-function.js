function radioButtonBill() {

    var totalCall = 0;
    var totalSms = 0;
    var costTotal = 0

    function radioBillTotal(billItemType) {


        var billItem = billItemType.trim();

        if (billItemType === "call") {
            totalCall += 2.75
        }
        else if (billItemType === "sms") {
            
            totalSms += 0.75;
        }
    }
    function getTotalCall() {
        return totalCall;

    }
    function getTotalSms() {
        return totalSms;

    }
    function getTotal() {
        costTotal = totalSms + totalCall;
        return costTotal;
    }
    return {
        radioButtonBill,
        radioBillTotal,
        getTotalCall,
        getTotalSms,
        getTotal,

    }
}