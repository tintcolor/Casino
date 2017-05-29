' use strict '

class Deck {

    constructor(value, suit) {
        this.value = value;
        this.suit = suit;

    }

    cards(oneCard) {
        // var oneCard = Math.floor(Math.random() * 52 + 1);

        //        for (var oneCard = 0; oneCard < 52; oneCard++) {
        if (oneCard < 13) {
            //             console.log(oneCard + " Hearts " + oneCard % 13);
            if (oneCard % 13 > 10 || oneCard % 13 == 0) {
                var suit = "Hearts";
                return cardConverter(oneCard, suit);
            } else if (oneCard % 13 == 1) {
                var suit = "Hearts";
                return aceConverter(oneCard, suit);
            } else {
                return "Value: " + oneCard % 13 + " of Hearts";

            }

        } else if (oneCard >= 13 && oneCard < 26) {
            //             console.log(oneCard + " Diamonds " + oneCard % 13);
            if (oneCard % 13 > 10|| oneCard % 13 == 0) {
                var suit = "Diamonds";
                return cardConverter(oneCard, suit);
            } else if (oneCard % 13 == 1) {
                var suit = "Diamonds";
                return aceConverter(oneCard, suit);
            } else {
                return "Value: " + oneCard % 13 + " of Diamonds";
            }

        } else if (oneCard >= 26 && oneCard < 39) {
            //            console.log(oneCard + " Spade " + oneCard % 13);
            if (oneCard % 13 > 10|| oneCard % 13 == 0) {
                var suit = "Spades";
                return cardConverter(oneCard, suit);
            } else if (oneCard % 13 == 1) {
                var suit = "Spades";
                return aceConverter(oneCard, suit);
            } else
                return "Value: " + oneCard % 13 + " of Spades";

        } else if (oneCard >= 39 && oneCard < 52) {
            //             console.log(oneCard + " Clubs " + oneCard % 13);
            if (oneCard % 13 > 10|| oneCard % 13 == 0) {
                var suit = "Clubs";
                return cardConverter(oneCard, suit);
            } else if (oneCard % 13 == 1) {
                var suit = "Clubs";
                return aceConverter(oneCard, suit);
            } else
                return "Value: " + oneCard % 13 + " of Clubs";
        } else {
             console.log(oneCard);
            throw "Card doesn't exist anthony";
        }

        //        }
    }

}

var cardConverter = function (valueOfCard, suit) {

    let oldValueOfCard = valueOfCard;
    if (valueOfCard % 3 == 1) {
        valueOfCard = 10;

        return "Value: " + valueOfCard + " King of " + suit;
    } else if (valueOfCard % 3 == 0) {
        valueOfCard = 10;
        return "Value: " + valueOfCard + " Queen of " + suit ;

    } else if (valueOfCard % 3 == 2) {
        valueOfCard = 10;
        return "Value: " + valueOfCard + " Jack of " + suit;

    }
}

var aceConverter = function (valueOfCard, suit) {
    let oldValueOfCard = valueOfCard;
    valueOfCard = 11;

    return "Value: " + valueOfCard + " Ace of " + suit + ", Card#: " + oldValueOfCard;

}
