 var card1;
 var card2;

 var BlackJackGame = function () {
     var deck = new Deck();
     card1 =deck.cards(Math.floor(Math.random() * 52 + 1));
     card2 = deck.cards(Math.floor(Math.random() * 52 + 1));

 }

 // var BlackJackObject = {
 //     card1: deck.cards(Math.floor(Math.random() * 52 + 1));
 // }

 var convertfunction = function (card) {

     if (card > 10) {
         card = 10;
     }
  
     console.log(card);
    
     return card;
   


 }


 var getValue = function (card) {
     convertfunction(card);

     return card;
 };

 var score = function () {
     console.log(getValue(card1)+ " "+ getValue(card2));
     return getValue(card1) + getValue(card2);
 };


 BlackJackGame();
score();
