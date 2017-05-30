 var card1;
 var card2;
 var playerTotal = 0;
 var dealerTotal = 0;
 var continueGame = true;
 var isBlackjackRunning = false;
 var blackjackDisplay = document.getElementById("status");

 let blackjackScore = document.getElementById("score");
 let blackjackDealerScore = document.getElementById("dealersScoreDisplay");

 var hand;

 BlackJackGame = function () {};

 BlackJackGame.prototype.BlackJackObject = {

     convertFunctionToNumber: function (card) {
         card = card.match(/\d+/)[0]; // "3"
         card = parseInt(card);
         return card;
     },

     score: function (hand) {

         this.hand = hand;
         if (continueGame) {
             playerTotal = 0;
             for (var card of hand) {
                 playerTotal += this.convertFunctionToNumber(card);
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
         return card;
     },
     getCard: function () {
         var deck = new Deck();
         var card = deck.cards(Math.floor(Math.random() * 52));
         return card;
     },
     winOrLose: function (result) { // if/else

         if (continueGame) {
             if (result < 21) {
                 blackjackDisplay.innerHTML = "Hit again or stand?";
             } else if (result == 21) {
                 this.winningPot();
                 this.disableButtons();
                 blackjackDisplay.innerHTML = "You Win!";
                 isBlackjackRunning = false;
                 continueGame = false;
             } else if (result > 21) {
                 this.losingPot();
                 this.disableButtons();
                 blackjackDisplay.innerHTML = "You Lose!";
                 isBlackjackRunning = false;
                 continueGame = false;
             }
         } else {
             if (dealerTotal > playerTotal && dealerTotal <= 21) {
                 blackjackDisplay.innerHTML = "Dealer Wins! You Lose!";
                 this.losingPot();
                 isBlackjackRunning = false;
             } else if (dealerTotal > 21) {
                 this.winningPot();
                 blackjackDisplay.innerHTML = "You Win!";
                 isBlackjackRunning = false;
             } else if (dealerTotal == playerTotal) {
                 blackjackDisplay.innerHTML = "Draw! Play again!";
                 isBlackjackRunning = false;
             }

         }
     },
     resetGame: function () {
         if (continueGame == false) {
             document.getElementById("start-blackjack").disabled = false;
             document.getElementById("stand-blackjack").disabled = false;
             document.getElementById("hit-blackjack").disabled = false;
                      document.getElementById("dealercardback").style.display="inherit"; document.getElementById("mycardback").style.display="inherit";
             Player.prototype.PlayerObject.resetHand();
             Dealer.prototype.DealerObject.resetHand();
        
             playerTotal = 0;
             let blackjackScore = document.getElementById("score");
             blackjackScore.innerHTML = "Current Score: ";
             dealerTotal = 0;
             continueGame = true;
         }

     },
     startGame: function () {
         document.getElementById("start-blackjack").disabled = true;
         document.getElementById("mycardback").style.display="none";
         
         
         Player.prototype.PlayerObject.cards("BlackJack");
         isBlackjackRunning = true;

     },
     hit: function () {
         if (isBlackjackRunning == true) {
             if (hand.length != 0) {
                 if (continueGame == true) {
                     newCard = this.getCard();
                     hand.push(newCard);
                     display.innerHTML = "";
                     this.score(hand);
                     //isBlackjackRunning = false;
                 } else {
                     newCard = this.getCard();
                     hand.push(newCard);
                     dealerDisplay.innerHTML = "";
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
                 document.getElementById("dealercardback").style.display="none";
                 document.getElementById("stand-blackjack").disabled = true;
                 document.getElementById("hit-blackjack").disabled = true;
             }
         }
     },
     dealersTurn: function () {
         continueGame = false;
         Dealer.prototype.DealerObject.cards("BlackJack");
     },
     startingBet: function () {
         betInput = document.getElementById("bet").value;
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
             dealerTotal += this.convertFunctionToNumber(card);
             CardDisplay.prototype.CardDisplayObject.cardDisplayer(card, 'dealersCardDisplay');

         }
         if (dealerTotal <= playerTotal && dealerTotal < 22) {
             while (dealerTotal <= playerTotal && dealerTotal < 22) {
                 this.hit();
             }
         } else {
             blackjackDealerScore.innerHTML = "Dealer's Score: " + dealerTotal;
             this.winOrLose(dealerTotal);
         }
     },
     disableButtons: function () {
         document.getElementById("hit-blackjack").disabled = true;
         document.getElementById("stand-blackjack").disabled = true;
     }


 }
