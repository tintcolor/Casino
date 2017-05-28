 var card1;
 var card2;

 var BlackJackGame = function () {
     //     var deck = new Deck();
     //     card1 = deck.cards(Math.floor(Math.random() * 52 + 1));
     //     card2 = deck.cards(Math.floor(Math.random() * 52 + 1));

 }

 var BlackJackObject = {
     bj: function () {
         var deck = new Deck();
         card1 = deck.cards(Math.floor(Math.random() * 52 ));
         card2 = deck.cards(Math.floor(Math.random() * 52 ));
     },
     convertfunction: function (card) {
         if (card > 10) {
             card = 10;
         }
         console.log(card);
         return card;
     },

     score: function () {
         console.log(card1)
         console.log(card2)
         
//         console.log(BlackJackObject.getValue(card1) + " " + BlackJackObject.getValue(card2));
//         return BlackJackObject.getValue(card1) + BlackJackObject.getValue(card2);
     },
     getValue: function (card) {
         //convertfunction(card);

         return card;
     }

 }

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

 BlackJackObject.bj();
 BlackJackObject.score();
 // BlackJackGame();
 // score();
