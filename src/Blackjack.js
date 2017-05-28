 var card1;
 var card2;

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
     convertfunction: function (card) {
         card = card.match(/\d+/)[0] // "3"
         return card;
     },

     score: function () {
         //console.log(card1)
         console.log(card2)
         card1 = this.convertfunction(card1);
         card2 = this.convertfunction(card2);
        
         return card1 + card2;
     },
     getValue: function (card) {
         //convertfunction(card);

         return card;
     }

 }

 BlackJackGame.prototype.BlackJackObject.setCard();
 BlackJackGame.prototype.BlackJackObject.score();


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
