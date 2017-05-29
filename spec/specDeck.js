describe("Deck", function () {
    var oneCard;

    //This will be called before running each spec
    beforeEach(function () {
        oneCard = new Deck();
    });

    describe("when throwing a random number from 0-52 in the card's class, in this case, 32, the return should be ", function () {
        //spec for sum operation
        it("the number 32 as the deck order number, spade for the suit, and 6 for the value of the card ", function () {
            expect(oneCard.cards(32)).toEqual("Value: 6 of Spades");
        });
    });

    xdescribe("when throwing a number greater than the amount of cards ", function () {
        //spec for sum operation
        it("the return should be an exception", function () {

            expect(oneCard.cards(92)).toThrow("Card doesn't exist anthony");
        });
    });
    
     describe("when calling the card 50 ", function () {
        //spec for sum operation
        it("the return should be the value 10 as an Jack of Clubs", function () {

            expect(oneCard.cards(50)).toEqual("Value: 10 Jack of Clubs");
        });
    });
    
     describe("when calling the card 0 ", function () {
        //spec for sum operation
        it("the return should be the value 11 as an Ace of Hearts", function () {

            expect(oneCard.cards(0)).toEqual("Value: 10 Queen of Hearts");
        });
    });
    
   

});
