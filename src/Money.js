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

        if (newPot == null)
            currentPotDisplay.innerHTML = "Current Winnings: $100";
        else
            currentPotDisplay.innerHTML = "Current Winnings: $" + newPot;

       
        if (newPot <= 0) {
            window.setTimeout(this.getOut, 1000);
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
    },
    getOut:function(){
         alert("You have no more money, please leave the casino!");
        window.location.replace("https://en.wikipedia.org/wiki/Problem_gambling");
    }
}
Money.prototype.MoneyObject.currentPot();
