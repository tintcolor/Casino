// has to wait until stand is called, then it does the same thing as player.  if it beats player's score, it wins and player loses and vice versa

Dealer = function () {};

var dealerDisplay = document.getElementById("dealersCards");

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
                // alert("Game Started");
                break;
            default:
                console.log("Didn't work");
                break;
        }
        return hand;
    },
    score: function () { //tells score
        hand = this.cards();
        dealerDisplay.innerHTML = "Dealer's Cards: "+hand;
        blackjackScore = BlackJackGame.prototype.BlackJackObject.score(hand);
    },
    resetHand: function () {
        hand = [];
    }




}
