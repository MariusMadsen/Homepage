var buttons  =document.querySelectorAll("button");

document.addEventListener("keydown", function(event) {
  drum(event.key);
  buttonAnimation(event.key);
});

for(var button of buttons) {
  button.addEventListener("click", function() {
    drum(this.innerHTML);
    buttonAnimation(this.innerHTML);
  });
}

function playSound(path) {
  var audio = new Audio(path);
  audio.play();
}

function drum(key) {
  switch (key) {
    case "w":
      playSound("sounds/tom-1.mp3");
      break;
    case "a":
      playSound("sounds/tom-2.mp3");
      break;
    case "s":
      playSound("sounds/tom-3.mp3");
      break;
    case "d":
      playSound("sounds/tom-4.mp3");
      break;
    case "j":
      playSound("sounds/snare.mp3");
      break;
    case "k":
      playSound("sounds/kick-bass.mp3");
      break;
    case "l":
      playSound("sounds/crash.mp3");
      break;
  }
}

function buttonAnimation(key) {
  var btn = document.querySelector("."+key)
  btn.classList.add("pressed");
  setTimeout( function() {
    btn.classList.remove("pressed");
  }, 100);
}
