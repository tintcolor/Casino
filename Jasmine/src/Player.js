var Player = function () {};

var display = document.getElementById("display");
var hand;
Player.prototype.PlayerObject = {
    cards: function (game) { //a booleana for future games.
        switch (game) {
            case "BlackJack":
                card1 = BlackJackGame.prototype.BlackJackObject.getCard();
                card2 = BlackJackGame.prototype.BlackJackObject.getCard();
                hand = [card1, card2];
                this.score(); 
                break;
            default:

                break;
        }
        return hand;
    },
    score: function () { 
        hand = this.cards();
        // display.innerHTML = "My Cards: "+hand;
        blackjackScore = BlackJackGame.prototype.BlackJackObject.score(hand);

    },
    resetHand: function () {
        hand = [];
        display.innerHTML =  hand;
    }
}
