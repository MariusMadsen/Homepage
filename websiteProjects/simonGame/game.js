
$(document).keydown(nextSequence);
var buttonColours = ["red", "blue", "green", "yellow"];
var pattern = [];
var userClickedPattern = [];
var level = 0;
var currenLevel = 0;

$(".btn").click(function(event) {
  var userChosenColor = event.target.id;
  userClickedPattern.push(userChosenColor);
  sound(userChosenColor);
  animatePress(userChosenColor);
  console.log(userClickedPattern);
  checkAnswer(currenLevel);
});


function nextSequence() {
  userClickedPattern = [];
  updateHeader(++level);
  $(document).off("keydown");
  var nr =  Math.floor(Math.random()*4);
  var randomChosenColour = buttonColours[nr];
  pattern.push(randomChosenColour);
  $("#"+randomChosenColour).fadeOut(100).fadeIn(100);
  sound(randomChosenColour);
}

function sound(randomChosenColour) {
  var audio = new Audio("sounds/"+randomChosenColour+".mp3");
  audio.play();
}

function animatePress(currentColor) {
  var btn = $("."+currentColor);
  btn.addClass("pressed");
  setTimeout(function() {
    btn.removeClass("pressed");
  }, 100);

}

function updateHeader(level){
  $("h1")
    .text("level "+level);
}

function checkAnswer(currentLevel) {
  if(userClickedPattern[currenLevel] === pattern[currenLevel]) {
    console.log("success");
    if(pattern.length === userClickedPattern.length) {
      setTimeout(nextSequence, 1000);
    }
  } else {
    console.log("wrong");
    sound("wrong");
    gameOver();
  }
}

function gameOver() {
  var body = $("body");
  body.addClass("game-over");
  setTimeout(function() {
    body.removeClass("game-over");
  }, 200);

  $("h1").text("Game Over! Press Any Key to Restart");
  startOver();
}

function startOver() {
  level = 0;
  pattern = [];
  currenLevel = 0;
  $(document).keydown(nextSequence);
}
