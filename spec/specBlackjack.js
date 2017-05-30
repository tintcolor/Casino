describe("Blackjack", function () {
    var blkjack;

    //This will be called before running each spec
    beforeEach(function () {
        blkjack = new BlackJackGame();
    });

    describe("when convertfunctionToNumber() takes in 'Value: 2 of Spades, Card#: 28'", function () {
  
        it("the value returned should be 2", function () {
            expect(blkjack.BlackJackObject.convertfunctionToNumber("Value: 2 of Spades, Card#: 28")).toEqual(2);
        });
    });

    describe("when score() takes in an array", function () {
 
        it("and return only the value 2", function () {
            var hand = ["Value: 4 of Spades, Card#: 30", "Value: 2 of Spades, Card#: 28"];
            expect(blkjack.BlackJackObject.score(hand)).toEqual("Value: 2 of Spades, Card#: 28");
        });
    });

    describe("when getCard() is used", function () {
        //spec for sum operation
        it("the return is a random card from a deck", function () {
            expect(blkjack.BlackJackObject.getCard()).toContain("Value:");
        });
    });

    xdescribe("when hit() is called", function () {
 
        it("there will be an addition to the array", function () {
            expect(blkjack.BlackJackObject.hit().length).toBeGreaterThan(0);
        });
    });

});
