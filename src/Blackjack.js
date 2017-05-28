 var card1;
 var card2;
 var cardSum = 0;
 var continueGame = true;

 // var BlackJackGame = function () {
 //          var deck = new Deck();
 //          card1 = deck.cards(Math.floor(Math.random() * 52 + 1));
 //          card2 = deck.cards(Math.floor(Math.random() * 52 + 1));
 //
 // }

 BlackJackGame = function () {};

 BlackJackGame.prototype.BlackJackObject = {

     setCard: function () {
         var deck = new Deck();
         card1 = deck.cards(Math.floor(Math.random() * 52));
         card2 = deck.cards(Math.floor(Math.random() * 52));
     },
     convertfunctionToNumber: function (card) {
         card = card.match(/\d+/)[0] // "3"
         card = parseInt(card);
         //         console.log(card + " convert")
         return card;
     },

     score: function (hand) {
         //console.log(card1)
         //console.log(hand);
         cardSum = 0;
         for (var card of hand) {
             console.log(card + " sum");
             cardSum += this.convertfunctionToNumber(card);
             //console.log(cardSum + " sum");
         }
         this.winOrLose(cardSum);

         console.log(cardSum + " sum of cards")
         // card1 = this.convertfunction(card1);
         // card2 = this.convertfunction(card2);

         return card;
     },
     getValue: function (card) {
         //convertfunction(card);
         return card;
     },
     getCard: function () {
         var deck = new Deck();
         var card = deck.cards(Math.floor(Math.random() * 52));
         /// console.log(card);
         return card;
     },
     winOrLose: function (result) { // if/else
         if (result < 21) {
             console.log("hit again or stand");
         } else if (result == 21) {
             console.log("you win");
             continueGame = false;
         } else if (result > 21) {
             console.log("you lose");
             continueGame = false;
         }

     },


 }

 BlackJackGame.prototype.BlackJackObject.setCard();
 //BlackJackGame.prototype.BlackJackObject.getCard();
 //BlackJackGame.prototype.BlackJackObject.score();


 // var convertfunction = function (card) {
 //     if (card > 10) {
 //         card = 10;
 //     }
 //     console.log(card);
 //     return card;
 // }


 // var getValue = function (card) {
 //     //convertfunction(card);
 //
 //     return card;
 // };

 // var score = function () {
 //     console.log(getValue(card1) + " " + getValue(card2));
 //     return getValue(card1) + getValue(card2);
 // };

 //         console.log(BlackJackObject.getValue(card1) + " " + BlackJackObject.getValue(card2));
 //         return BlackJackObject.getValue(card1) + BlackJackObject.getValue(card2);


 // BlackJackGame();
 // score();
