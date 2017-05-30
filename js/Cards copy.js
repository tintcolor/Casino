' use strict '


//Foo.bar();

class Cards {


    constructor(value, suit) {
        this.value = value;
        this.suit = suit;
    }

    decks() {
        var mapOfCards = new Map();
        mapOfCards.set('Hearts', ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K']);
        // console.log(mapOfCards.get('Hearts'));

        for (var i = 0; i < mapOfCards.get('Hearts').length; i++) {
            console.log(mapOfCards.get('Hearts')[i]);
        }
    }

    card() {

        var oneCard = Math.floor(Math.random() * 52 + 1);
        
            if (oneCard < 13) {
                console.log(oneCard + " Hearts " + oneCard % 13);
            } else if (oneCard >= 13 && oneCard < 26) {
                console.log(oneCard + " Diamonds " + oneCard % 13);
            } else if (oneCard >= 26 && oneCard < 39) {
                console.log(oneCard + " Spade " + oneCard % 13);
            } else if (oneCard >= 39 && oneCard < 52) {
                console.log(oneCard + " Clubs " + oneCard % 13);
            }
        
        
        
    }

    deck() {
        var value = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
        var suit = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
    }
}

var deck = new Cards();
var card1 = deck.card();
var card2 = deck.card();

//card.decks();
//deck.card();

