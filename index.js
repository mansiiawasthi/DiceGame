var player1 = "Player 1";
var player2 = "Player 2";

// Function to change the player name
function editNames() {
    player1 = prompt("Change Player1 name");
    player2 = prompt("Change player2 name");

    document.querySelector("p.Player1").innerHTML = player1;
    document.querySelector("p.Player2").innerHTML = player2;
}

// Function to roll the dice
function rollTheDice() {
    setTimeout(function() {
        var randomNumber1 = Math.floor(Math.random() * 6) + 1;
        var randomNumber2 = Math.floor(Math.random() * 6) + 1;

        var randomImageSource1 = "images/dice" + randomNumber1 + ".png"; // images/dice1.png - images/dice6.png

        document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);

        var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

        document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

        if (randomNumber1 === randomNumber2) {
            document.querySelector("h1").innerHTML = "Draw!";
        } else if (randomNumber1 < randomNumber2) {
            document.querySelector("h1").innerHTML = (player2 + " WINS!");
        } else {
            document.querySelector("h1").innerHTML = (player1 + " WINS!");
        }
    }, 2500);
}