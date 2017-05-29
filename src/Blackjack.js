 var card1;
 var card2;
 var playerTotal = 0;
 var dealerTotal = 0;
 var continueGame = true;
 var isBlackjackRunning = false;
 var blackjackDisplay = document.getElementById("status");
 //var dealerDisplay = document.getElementById("dealersCards");
 let blackjackScore = document.getElementById("score");
 let blackjackDealerScore = document.getElementById("dealersScore");

 //var dealerDisplay = document.getElementById("dealersCardDisplay");

 var hand;

 BlackJackGame = function () {};

 BlackJackGame.prototype.BlackJackObject = {

     convertfunctionToNumber: function (card) {
         card = card.match(/\d+/)[0]; // "3"
         card = parseInt(card);
         //         console.log(card + " convert")
         return card;
     },

     score: function (hand) {

         this.hand = hand;
         if (continueGame) {

             playerTotal = 0;
             for (var card of hand) {

                 playerTotal += this.convertfunctionToNumber(card);
                 CardDisplay.prototype.CardDisplayObject.cardDisplayer(card, 'display');
             }
             let blackjackScore = document.getElementById("score");
             blackjackScore.innerHTML = "Current Score: " + playerTotal;
             this.winOrLose(playerTotal);
         } else {
             this.dealerHand();

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
                 //                 console.log("you win");
                 this.winningPot();
                 blackjackDisplay.innerHTML = "You Win!";
                 //                 this.resetGame();
                 isBlackjackRunning = false;
                 continueGame = false;
             } else if (result > 21) {


               // var newHand = this.blackjackAceConversion();
                 
                 //this.score(newHand);




                 this.losingPot();
                 console.log("you lose");
                 blackjackDisplay.innerHTML = "You Lose!";
                 //                 this.resetGame();
                 isBlackjackRunning = false;
                 continueGame = false;
             }
         } else {

             if (dealerTotal > playerTotal && dealerTotal <= 21) {
                 blackjackDisplay.innerHTML = "Dealer Wins! You Lose!";
                 this.losingPot();

                 isBlackjackRunning = false;
             } else if (dealerTotal > 21) {
                 //                 console.log("you win");
                 this.winningPot();

                 blackjackDisplay.innerHTML = "You Win!";
                 // continueGame = false;
                 //                 this.resetGame();
                 //                 continueGame = false;
                 isBlackjackRunning = false;
             } else if (dealerTotal == playerTotal) {
                 // console.log("Draw! Play again!");
                 blackjackDisplay.innerHTML = "Draw! Play again!";
                 isBlackjackRunning = false;
                 // continueGame = false;
                 //                 this.resetGame();
                 //                 continueGame = false;
             }

         }


     },
     resetGame: function () {


         if (continueGame == false) {
             document.getElementById("start-blackjack").disabled = false;

             Player.prototype.PlayerObject.resetHand();
             Dealer.prototype.DealerObject.resetHand();

             playerTotal = 0;
             let blackjackScore = document.getElementById("score");
             blackjackScore.innerHTML = "Current Score: ";

             dealerTotal = 0;


             //             let blackjackDealerScore = document.getElementById("dealersScore");
             //dealerDisplay.innerHTML = "Dealer's Cards: ";

             //blackjackDisplay.innerHTML = "";
             console.log(dealerTotal);

             continueGame = true;

             // isBlackjackRunning = false;
         }

     },
     startGame: function () {

         Player.prototype.PlayerObject.cards("BlackJack");
         document.getElementById("start-blackjack").disabled = true;
         isBlackjackRunning = true;

     },
     hit: function () {
         if (isBlackjackRunning == true) {
             if (hand.length != 0) {
                 if (continueGame == true) {
                     newCard = this.getCard();
                     hand.push(newCard);
                     display.innerHTML = "My Cards: ";
                     //console.log(hand);
                     this.score(hand);
                     //isBlackjackRunning = false;
                 } else {
                     newCard = this.getCard();
                     hand.push(newCard);
                     dealerDisplay.innerHTML = "Dealer's Cards: ";
                     this.score(hand);
                     isBlackjackRunning = false;

                 }
             }
         }
         return hand;
     },
     stand: function () {
         if (hand.length != 0) {
             if (continueGame == true) {
                 this.dealersTurn();
                 isBlackjackRunning = false;
             }
         }
     },
     dealersTurn: function () {
         continueGame = false;
         Dealer.prototype.DealerObject.cards("BlackJack");
     },
     startingBet: function () {
         betInput = document.getElementById("bet").value;
         //         betInput.value = 10;
         console.log(betInput);
         return betInput;

     },
     winningPot: function () {
         var winningPot = Money.prototype.MoneyObject.winningPot(this.startingBet());
         Money.prototype.MoneyObject.currentPot(winningPot);
     },
     losingPot: function () {
         var losingPot = Money.prototype.MoneyObject.losingPot(this.startingBet());
         Money.prototype.MoneyObject.currentPot(losingPot);
     },
     dealerHand: function () {
         dealerTotal = 0;
         for (var card of hand) {
             dealerTotal += this.convertfunctionToNumber(card);
             CardDisplay.prototype.CardDisplayObject.cardDisplayer(card, 'dealersCardDisplay');

         }
         //dealerDisplay.innerHTML = "asdfasd ";
         //document.getElementById("dealersCardDisplay").innerHTML += 'uyfj;kjv';

         if (dealerTotal <= playerTotal && dealerTotal < 22) {
             console.log("crap");
             while (dealerTotal <= playerTotal && dealerTotal < 22) {

                 this.hit();

             }

         } else {

             blackjackDealerScore.innerHTML = "Dealer's Score: " + dealerTotal;


             this.winOrLose(dealerTotal);
         }
     },
     blackjackAceConversion: function () {
//
//
//         console.log(hand);
//         if (hand.includes("Value: 11 Ace of Spades, Card#: 27")||hand.includes("Value: 11 Ace of Hearts, Card#: 1")||hand.includes("Value: 11 Ace of Clubs, Card#: 40")||hand.includes("Value: 11 Ace of Diamonds, Card#: 14")) {
//             console.log("has ace");
//             // value of 11 continue, if not, go back
//             for (var i = 0; i < hand.length; i++) {
//                 // look for all aces
//                 if (hand[i].includes("Value: 11 ")) {
//                     console.log(hand[i]);
//                     hand[i]="11";
//                     console.log(hand);
//                     return hand;
//                 }
//             }
//
//         } else {
//            this.winOrLose();
//         }

     }


 }
 // BlackJackGame.prototype.BlackJackObject.startingBet();
