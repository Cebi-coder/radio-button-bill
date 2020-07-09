function radioBillCost() {

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
        return totalSms + totalCall;
        
    }
    function totalColor(){
        if(getTotal >= 30){
            return "danger"
        }
        else if(getTotal >= 20){
            return "warning"
        }
    }
    return {
        //radioBillCost,
        radioBillTotal,
        getTotalCall,
        getTotalSms,
        getTotal,
        totalColor,
    }
}