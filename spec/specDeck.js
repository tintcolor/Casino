describe("Deck", function () {
    var oneCard;

    //This will be called before running each spec
    beforeEach(function () {
        oneCard = new Deck();
    });

    describe("when throwing a random number from 0-52 in the the card's class, in this case, 32, the return should be ", function () {
        //spec for sum operation
        it("the number 32 as the deck order number, spade for the suit, and 6 for the value of the card ", function () {
            expect(oneCard.cards(32)).toEqual("32 Spade 6");
        });
    });

    describe("when throwing a number greater than the amount of cards ", function () {
        //spec for sum operation
        xit("the return should be an exception", function () {

            expect(oneCard.cards(92)).toThrow("Card doesn't exist anthony");
        });
    });

});
