describe("Blackjack", function () {
    var oneCard;

    //This will be called before running each spec
    beforeEach(function () {
        oneCard = new Deck();
    });

    describe("when throwing a random number from 0-52 in the the card's class, in this case, 32, the return should be ", function () {
        //spec for sum operation
        it("the return should be", function () {
            expect(oneCard.cards(32)).toEqual("32 Spade 6");
        });
    });

});
