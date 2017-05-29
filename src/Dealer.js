Dealer = function () {};

var dealerDisplay = document.getElementById("dealersCardDisplay");
var hand;
Dealer.prototype.DealerObject = {
    cards: function (game) { //make a boolean if/else for future games.// shows cards you have

        //        console.log(game);

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

        blackjackScore = BlackJackGame.prototype.BlackJackObject.score(hand);
    },
    resetHand: function () {
        
        hand = [];
        dealerDisplay.innerHTML = "My Cards: " + hand;
    }




}
