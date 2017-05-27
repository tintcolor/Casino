class BlackJack extends Deck {

    valueOfCsards() {
        var deck = new Deck();
        var card1 = deck.cards(Math.floor(Math.random() * 52 + 1));
        var card2 = deck.cards(Math.floor(Math.random() * 52 + 1));
        console.log(card1);
        console.log("asdfasdfas");
    }


    constructor(value, suit) {
        super(value, suit);

        valueOfCards();
        console.log("Working");
        dealer();
    }



    dealer() {
        console.log("Work please!");
    }

}

var valueOfCards = function () {
    //    var card1 = deck.cards(Math.floor(Math.random() * 52 + 1));
    //    var card2 = deck.cards(Math.floor(Math.random() * 52 + 1));
    //    console.log(card1);
    var a = new BlackJack();
    a.dealer();
}
