describe("Blackjack", function () {
    var blkjack;

    //This will be called before running each spec
    beforeEach(function () {
        blkjack = new BlackJackGame();
    });

    describe("convertfunction should pull 'Value: 2 of Spades, Card#: 28'", function () {
        //spec for sum operation
        it("and return only the value 2", function () {
            expect(blkjack.BlackJackObject.convertfunctionToNumber("Value: 2 of Spades, Card#: 28")).toEqual(2);
        });
    });

});
