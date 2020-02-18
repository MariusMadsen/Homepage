var randomNumber1 = Math.floor(Math.random()*6+1);
var randomNumber2 = Math.floor(Math.random()*6+1);

function setDice(nr, tag){
  var path = "diceGameImages/dice"+nr+".png"
  document.querySelector(tag).src = path;
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
