//Player = function () {};
//
//Player.prototype.cards = function () {
//
//}

Player = function () {};

var display = document.getElementById("display");
var hand;
Player.prototype.PlayerObject = {
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

        // console.log(hand);

        return hand;
    },
    score: function () { //tells score
        hand = this.cards();
        display.innerHTML = hand;
        blackjackScore = BlackJackGame.prototype.BlackJackObject.score(hand);


        // console.log(blackjackScore);
    },
    resetHand: function () {
        hand = [];
    }




}



//Player.prototype.PlayerObject.cards();
//Player.prototype.PlayerObject.score();
//Player.hit();
//Player.score();
