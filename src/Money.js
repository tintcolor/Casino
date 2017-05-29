//Have a set amount of money, and everytime you win, it goes up 10 dollars, if you lose, it goes down
var winnings = 0;
var pot = 100;
Money = function () {};


Money.prototype.MoneyObject = {

    winningPot: function (winnings) {
        if (isNaN(winnings)) {
            winnings = 0;
        } else {
            this.winnings = winnings;
        }
        potHolder = pot + parseInt(winnings)
        pot = potHolder;
        return potHolder;
    },
    currentPot: function (newPot) {
        let currentPotDisplay = document.getElementById("moneypot");
        if (newPot == null) {
            console.log("asdfsdf");
            currentPotDisplay.innerHTML = "Amount of Money: 100";
        } else {
            currentPotDisplay.innerHTML = "Amount of Money: " + newPot;
        }
    },
    losingPot: function (winnings) {
        if (isNaN(winnings)) {
            winnings = 0;
        } else {
            this.winnings = winnings;
        }
        potHolder = pot - parseInt(winnings)
        pot = potHolder;
        return potHolder;
    }
}

Money.prototype.MoneyObject.currentPot();
