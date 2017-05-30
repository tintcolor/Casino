describe("Money", function () {
    var money;
    beforeEach(function () {
        money = new Money();
        
    });

    describe("when a number is added to the pot", function () {
        it("should be able to calculate the sum of 100 and 10", function () {
            expect(money.MoneyObject.winningPot(10)).toEqual(110);
        });

    });
    
    
    describe("when a number is subtracted from the pot", function () {
        it("should be able to calculate the difference of 100 and 10", function () {
            expect(money.MoneyObject.losingPot(10)).toEqual(100);
        });

    });
});
