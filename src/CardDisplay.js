CardDisplay = function () {}

CardDisplay.prototype.CardDisplayObject = {

    cardDisplayer: function (card, display) {

        card = card.match(/\d+$/); // "3"
        card = parseInt(card) - 1;

        switch (card) {

            case -1:
                document.getElementById(display).innerHTML += '<img class="cardpics" src="img/cards/queen_of_hearts.png" />';
                break;
            case 0:
                document.getElementById(display).innerHTML += '<img class="cardpics" src="img/cards/ace_of_hearts.png" />';
                break;

            case 1:
                document.getElementById(display).innerHTML += '<img class="cardpics" src="img/cards/2_of_hearts.png" />';
                break;

            case 2:
                document.getElementById(display).innerHTML += '<img class="cardpics" src="img/cards/3_of_hearts.png" />';
                break;

            case 3:
                document.getElementById(display).innerHTML += '<img class="cardpics" src="img/cards/4_of_hearts.png" />';
                break;

            case 4:
                document.getElementById(display).innerHTML += '<img class="cardpics" src="img/cards/5_of_hearts.png" />';
                break;

            case 5:
                document.getElementById(display).innerHTML += '<img class="cardpics" src="img/cards/6_of_hearts.png" />';
                break;

            case 6:
                document.getElementById(display).innerHTML += '<img class="cardpics" src="img/cards/7_of_hearts.png" />';
                break;

            case 7:
                document.getElementById(display).innerHTML += '<img class="cardpics" src="img/cards/8_of_hearts.png" />';
                break;

            case 8:
                document.getElementById(display).innerHTML += '<img class="cardpics" src="img/cards/9_of_hearts.png" />';
                break;
            case 9:
                document.getElementById(display).innerHTML += '<img class="cardpics" src="img/cards/10_of_hearts.png" />';
                break;
            case 10:
                document.getElementById(display).innerHTML += '<img class="cardpics" src="img/cards/jack_of_hearts.png" />';
                break;
            case 11:
                document.getElementById(display).innerHTML += '<img class="cardpics" src="img/cards/queen_of_hearts.png" />';
                break;
            case 12:
                document.getElementById(display).innerHTML += '<img class="cardpics" src="img/cards/king_of_hearts.png" />';
                break;
            case 13:
                document.getElementById(display).innerHTML += '<img class="cardpics" src="img/cards/ace_of_diamonds.png" />';
                break;
            case 14:
                document.getElementById(display).innerHTML += '<img class="cardpics" src="img/cards/2_of_diamonds.png" />';
                break;
            case 15:
                document.getElementById(display).innerHTML += '<img class="cardpics" src="img/cards/3_of_diamonds.png" />';
                break;
            case 16:
                document.getElementById(display).innerHTML += '<img class="cardpics" src="img/cards/4_of_diamonds.png" />';
                break;
            case 17:
                document.getElementById(display).innerHTML += '<img class="cardpics" src="img/cards/5_of_diamonds.png" />';
                break;
            case 18:
                document.getElementById(display).innerHTML += '<img class="cardpics" src="img/cards/6_of_diamonds.png" />';
                break;
            case 19:
                document.getElementById(display).innerHTML += '<img class="cardpics" src="img/cards/7_of_diamonds.png" />';
                break;
            case 20:
                document.getElementById(display).innerHTML += '<img class="cardpics" src="img/cards/8_of_diamonds.png" />';
                break;
            case 21:
                document.getElementById(display).innerHTML += '<img class="cardpics" src="img/cards/9_of_diamonds.png" />';
                break;
            case 22:
                document.getElementById(display).innerHTML += '<img class="cardpics" src="img/cards/10_of_diamonds.png" />';
                break;
            case 23:
                document.getElementById(display).innerHTML += '<img class="cardpics" src="img/cards/jack_of_diamonds.png" />';
                break;
            case 24:
                document.getElementById(display).innerHTML += '<img class="cardpics" src="img/cards/queen_of_diamonds.png" />';
                break;
            case 25:
                document.getElementById(display).innerHTML += '<img class="cardpics" src="img/cards/king_of_diamonds.png" />';
                break;
            case 26:
                document.getElementById(display).innerHTML += '<img class="cardpics" src="img/cards/ace_of_spades.png" />';
                break;
            case 27:
                document.getElementById(display).innerHTML += '<img class="cardpics" src="img/cards/2_of_spades.png" />';
                break;
            case 28:
                document.getElementById(display).innerHTML += '<img class="cardpics" src="img/cards/3_of_spades.png" />';
                break;
            case 29:
                document.getElementById(display).innerHTML += '<img class="cardpics" src="img/cards/4_of_spades.png" />';
                break;
            case 30:
                document.getElementById(display).innerHTML += '<img class="cardpics" src="img/cards/5_of_spades.png" />';
                break;
            case 31:
                document.getElementById(display).innerHTML += '<img class="cardpics" src="img/cards/6_of_spades.png" />';
                break;
            case 32:
                document.getElementById(display).innerHTML += '<img class="cardpics" src="img/cards/7_of_spades.png" />';
                break;

            case 33:
                document.getElementById(display).innerHTML += '<img class="cardpics" src="img/cards/8_of_spades.png" />';
                break;

            case 34:
                document.getElementById(display).innerHTML += '<img class="cardpics" src="img/cards/9_of_spades.png" />';
                break;

            case 35:
                document.getElementById(display).innerHTML += '<img class="cardpics" src="img/cards/10_of_spades.png" />';
                break;

            case 36:
                document.getElementById(display).innerHTML += '<img class="cardpics" src="img/cards/jack_of_spades.png" />';
                break;

            case 37:
                document.getElementById(display).innerHTML += '<img class="cardpics" src="img/cards/queen_of_spades.png" />';
                break;

            case 38:
                document.getElementById(display).innerHTML += '<img class="cardpics" src="img/cards/king_of_spades.png" />';
                break;

            case 39:
                document.getElementById(display).innerHTML += '<img class="cardpics" src="img/cards/ace_of_clubs.png" />';
                break;
            case 40:
                document.getElementById(display).innerHTML += '<img class="cardpics" src="img/cards/2_of_clubs.png" />';
                break;
            case 41:
                document.getElementById(display).innerHTML += '<img class="cardpics" src="img/cards/3_of_clubs.png" />';
                break;
            case 42:
                document.getElementById(display).innerHTML += '<img class="cardpics" src="img/cards/4_of_clubs.png" />';
                break;
            case 43:
                return document.getElementById(display).innerHTML += '<img class="cardpics" src="img/cards/5_of_clubs.png" />';
                break;
            case 44:
                document.getElementById(display).innerHTML += '<img class="cardpics" src="img/cards/6_of_clubs.png" />';
                break;
            case 45:
                document.getElementById(display).innerHTML += '<img class="cardpics" src="img/cards/7_of_clubs.png" />';
                break;
            case 46:
                document.getElementById(display).innerHTML += '<img class="cardpics" src="img/cards/8_of_clubs.png" />';
                break;
            case 47:
                document.getElementById(display).innerHTML += '<img class="cardpics" src="img/cards/9_of_clubs.png" />';
                break;
            case 48:
                document.getElementById(display).innerHTML += '<img class="cardpics" src="img/cards/10_of_clubs.png" />';
                break;
            case 49:
                document.getElementById(display).innerHTML += '<img class="cardpics" src="img/cards/jack_of_clubs.png" />';
                break;
            case 50:
                document.getElementById(display).innerHTML += '<img class="cardpics" src="img/cards/queen_of_clubs.png" />';
                break;
            case 51:
                document.getElementById(display).innerHTML += '<img class="cardpics" src="img/cards/king_of_clubs.png" />';
                break;
            default:
                break;

        }

    }

}
