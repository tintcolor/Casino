 var card1;
 var card2;
 var playerTotal = 0;
 var dealerTotal = 0;
 var continueGame = true;
 var isBlackjackRunning = false;
 var blackjackDisplay = document.getElementById("status");
 var dealerDisplay = document.getElementById("dealersCards");

 var hand;

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
         this.hand = hand;



         if (continueGame) {
             playerTotal = 0;
             for (var card of hand) {
                 // console.log(card + " sum");
                 playerTotal += this.convertfunctionToNumber(card);
                 //console.log(cardSum + " sum");
             }

             let blackjackScore = document.getElementById("score");
             blackjackScore.innerHTML = "Current Score: " + playerTotal;
             this.winOrLose(playerTotal);
         } else {
             dealerTotal = 0;
             console.log(playerTotal);
             console.log(dealerTotal);


             for (var card of hand) {
                 // console.log(card + " sum");
                 dealerTotal += this.convertfunctionToNumber(card);
                 //console.log(cardSum + " sum");
             }

             console.log(playerTotal);
             console.log(dealerTotal);
             while (dealerTotal <= playerTotal && dealerTotal <= 21) {
                 this.hit();

             }

             let blackjackDealerScore = document.getElementById("dealersScore");
             blackjackDealerScore.innerHTML = "Dealer's Score: " + dealerTotal;

             this.winOrLose(dealerTotal);
         }



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

         if (continueGame) {
             if (result < 21) {
                 console.log("hit again or stand");
                 blackjackDisplay.innerHTML = "Hit again or stand?";
             } else if (result == 21) {
                 console.log("you win");
                 blackjackDisplay.innerHTML = "You Win!";
                 this.resetGame();
                 continueGame = false;
             } else if (result > 21) {
                 console.log("you lose");
                 blackjackDisplay.innerHTML = "You Lose!";
                 this.resetGame();
                 continueGame = false;
             }
         } else {

             if (dealerTotal > playerTotal && dealerTotal <= 21) {
                 blackjackDisplay.innerHTML = "Dealer Wins! You Lose!";
                 // console.log("Dealer Wins! You Lose!");
                 this.resetGame();
             } else if (dealerTotal > 21) {
                 //console.log("you win");
                 blackjackDisplay.innerHTML = "You Win!";
                 this.resetGame();
                 //                 continueGame = false;
             } else if (dealerTotal == playerTotal) {
                 // console.log("Draw! Play again!");
                 blackjackDisplay.innerHTML = "Draw! Play again!";
                 this.resetGame();
                 //                 continueGame = false;
             }

         }





     },
     resetGame: function () {
         Player.prototype.PlayerObject.resetHand();
         Dealer.prototype.DealerObject.resetHand();
     },
     startGame: function () {

         if (isBlackjackRunning == false) {
             Player.prototype.PlayerObject.cards("BlackJack");

         } else {
             this.resetGame();
         }

     },
     hit: function () { //event has to do this 


         if (hand.length != 0) {
             if (continueGame) {
                 newCard = this.getCard();
                 hand.push(newCard);
                 display.innerHTML = hand;
                 //console.log(hand);
                 this.score(hand);
                 // blackjackScore.innerHTML += hand;

             } else {
                 newCard = this.getCard();
                 hand.push(newCard);
                 //console.log(hand);
                 dealerDisplay.innerHTML = hand;
                 this.score(hand);
                 // blackjackScore.innerHTML += hand;
               
             }

         }

         return hand;
     },
     stand: function () {


         if (hand.length != 0) {

             this.dealersTurn();
         } else {

         }
     },
     dealersTurn: function () {
         continueGame = false;
         Dealer.prototype.DealerObject.cards("BlackJack");
     }


 }
