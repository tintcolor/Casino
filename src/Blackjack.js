 var card1;
 var card2;
 var playerTotal = 0;
 var dealerTotal = 0;
 var continueGame = true;
 var isBlackjackRunning = false;
 var blackjackDisplay = document.getElementById("status");
 var dealerDisplay = document.getElementById("dealersCards");
 let blackjackScore = document.getElementById("score");
 let blackjackDealerScore = document.getElementById("dealersScore");

 var hand;

 BlackJackGame = function () {};

 BlackJackGame.prototype.BlackJackObject = {

     setCard: function () {
         var deck = new Deck();
         card1 = deck.cards(Math.floor(Math.random() * 52));
         card2 = deck.cards(Math.floor(Math.random() * 52));
     },
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
                 // console.log(card + " sum");
                 playerTotal += this.convertfunctionToNumber(card);
                 //console.log(cardSum + " sum");
             }
             let blackjackScore = document.getElementById("score");
             blackjackScore.innerHTML = "Current Score: " + playerTotal;
             this.winOrLose(playerTotal);
         } else {
             this.dealerHand();
//             dealerTotal = 0;
//             for (var card of hand) {
//                 // console.log(card + " sum");
//                 dealerTotal += this.convertfunctionToNumber(card);
//                 //console.log(cardSum + " sum");
//             }
//             if (dealerTotal <= playerTotal && dealerTotal < 22) {
//                 while (dealerTotal <= playerTotal && dealerTotal < 22) {
//                     this.hit();
//                 }
//
//             } else {
//                 console.log("called");
//                 blackjackDealerScore.innerHTML = "Dealer's Score: " + dealerTotal;
//
//                 console.log(dealerTotal);
//                 this.winOrLose(dealerTotal);
//             }
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


                 this.winningPot();

                 blackjackDisplay.innerHTML = "You Win!";
                 //                 this.resetGame();
                 isBlackjackRunning = false;
                 continueGame = false;
             } else if (result > 21) {
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
                 console.log("you win");
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
             dealerDisplay.innerHTML = "Dealer's Cards: ";

             blackjackDisplay.innerHTML = "";
             console.log(dealerTotal);

             continueGame = true;

             // isBlackjackRunning = false;
         }

     },
     startGame: function () {

         Player.prototype.PlayerObject.cards("BlackJack");
         // isBlackjackRunning = true;

         document.getElementById("start-blackjack").disabled = true;
         isBlackjackRunning = true;


     },
     hit: function () {
         if (isBlackjackRunning == true) {

             if (hand.length != 0) {
                 if (continueGame == true) {
                     newCard = this.getCard();
                     hand.push(newCard);
                     display.innerHTML = "My Cards: " + hand;
                     //console.log(hand);
                     this.score(hand);
                     //isBlackjackRunning = false;
                 } else {
                     newCard = this.getCard();
                     hand.push(newCard);
                     dealerDisplay.innerHTML = "Dealer's Cards: " + hand;
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
     dealerHand:function(){
         dealerTotal = 0;
             for (var card of hand) {
                 // console.log(card + " sum");
                 dealerTotal += this.convertfunctionToNumber(card);
                 //console.log(cardSum + " sum");
             }
             if (dealerTotal <= playerTotal && dealerTotal < 22) {
                 while (dealerTotal <= playerTotal && dealerTotal < 22) {
                     this.hit();
                 }

             } else {
                 console.log("called");
                 blackjackDealerScore.innerHTML = "Dealer's Score: " + dealerTotal;

                 console.log(dealerTotal);
                 this.winOrLose(dealerTotal);
             }
     }

 }

 // BlackJackGame.prototype.BlackJackObject.startingBet();
