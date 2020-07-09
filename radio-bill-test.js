describe("The radio bil button factory function", function () {
    it('should add call cost when call radio button is pressed', function () {
        let radioBill = radioBillCost();

        radioBill.radioBillTotal("call");
        assert.equal(2.75, radioBill.getTotalCall());
    });
    it('should add sms cost when sms radio button is pressed', function () {
        let radioBill = radioBillCost();

        radioBill.radioBillTotal("sms");
        assert.equal(0.75, radioBill.getTotalSms());

    });
    it('should add call and sms cost to total when the add button is pressed', function () {
        let radioBill = radioBillCost();

        radioBill.radioBillTotal("call");
        radioBill.radioBillTotal("sms");
        assert.equal(3.50, radioBill.getTotal());

    });
});