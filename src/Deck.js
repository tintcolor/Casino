' use strict '

class Deck {

    constructor(value, suit) {
        this.value = value;
        this.suit = suit;
        // new Cat();
    }

    cards(oneCard) {
        // var oneCard = Math.floor(Math.random() * 52 + 1);

//        for (var oneCard = 0; oneCard < 52; oneCard++) {
            if (oneCard < 13) {
               // console.log(oneCard + " Hearts " + oneCard % 13);
                return oneCard + " Hearts " + oneCard % 13;
            } else if (oneCard >= 13 && oneCard < 26) {
               // console.log(oneCard + " Diamonds " + oneCard % 13);
                return oneCard + " Diamonds " + oneCard % 13;
            } else if (oneCard >= 26 && oneCard < 39) {
                //console.log(oneCard + " Spade " + oneCard % 13);
                return oneCard + " Spade " + oneCard % 13;
            } else if (oneCard >= 39 && oneCard < 52) {
               // console.log(oneCard + " Clubs " + oneCard % 13);
                return oneCard + " Clubs " + oneCard % 13;
            } else {
               // console.log(oneCard);
                throw "Card doesn't exist anthony";
            }

//        }
    }

}



//class BlackJack extends Deck {
//
//    constructor(value, suit) {
//        super(value, suit);
//        var deck = new Deck();
//    }
//
//    dealer() {
//
//
//    }
//
//
//    //var card1 = deck.cards(Math.floor(Math.random() * 52 + 1));
//    //var card2 = deck.cards(Math.floor(Math.random() * 52 + 1));
//
//
//
//}
