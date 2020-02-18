var randomNumber1 = Math.floor(Math.random()*6+1);
var randomNumber2 = Math.floor(Math.random()*6+1);

function setDice(number, tag) {
  if(number === 1) {
    document.querySelector(tag).src = "diceGameImages/dice1.png";

  } else if (number === 2) {
    document.querySelector(tag).src = "diceGameImages/dice2.png";

  } else if (number === 3) {
    document.querySelector(tag).src = "diceGameImages/dice3.png";

  } else if (number === 4) {
    document.querySelector(tag).src = "diceGameImages/dice4.png";

  } else if (number === 5) {
    document.querySelector(tag).src = "diceGameImages/dice5.png";

  } else {
    document.querySelector(tag).src = "diceGameImages/dice6.png";
  }
}

function declareWinner(nr1, nr2) {
  if(nr1>nr2) {
    document.querySelector("h1").innerHTML = "Player 1 wins!";
  } else if (nr2>nr1) {
    document.querySelector("h1").innerHTML = "Player 2 wins!";
  } else {
    document.querySelector("h1").innerHTML = "DRAW!!!";
  }
}

function reroll() {
  var newNr1 = Math.floor(Math.random()*6+1);
  var newNr2 = Math.floor(Math.random()*6+1);
  setDice(newNr1, ".img1");
  setDice(newNr2, ".img2");
  declareWinner(newNr1, newNr2);
}

setDice(randomNumber1, ".img1");
setDice(randomNumber2, ".img2");
declareWinner(randomNumber1, randomNumber2);
