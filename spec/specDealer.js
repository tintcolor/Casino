describe("Dealer", function () {
    var dealer;

    //This will be called before running each spec
    beforeEach(function () {
        dealer = new Dealer();
    });

        describe("when dealer starts a game", function () {
            //spec for sum operation
            it("should have an array length of 2", function () {
                expect(dealer.DealerObject.cards("BlackJack").length).toEqual(2);
            });
        });
});
