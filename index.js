var userinput = [];
var pattern = [];
var level = 0;
var begin = false;

$(".st").click(function() {
  if (!begin) {
    generate();
    begin = true;
    $(".st").hide();
  }
});


$(".btn").click( function(event){
  if(begin){
    key = event.target.id;
    pressed(key);
    sound(key);
    userinput.push(key);
    check(userinput.length-1);
  }
});

function sound(colour) {
  switch (colour) {
    case "blue":
      var music = new Audio("sounds/blue.mp3");
      music.play();
      break;
    case "green":
      var music = new Audio("sounds/green.mp3");
      music.play();
      break;
    case "red":
      var music = new Audio("sounds/red.mp3");
      music.play();
      break;
    case "yellow":
      var music = new Audio("sounds/yellow.mp3");
      music.play();
      break;
    default:
      console.log(colour);
  }
}


function pressed(colour) {
  var clrbtn = "#" + colour;
  $(clrbtn).addClass("pressed");
  setTimeout(function() {
    $(clrbtn).removeClass("pressed")
  }, 120);
}

function random() {
  var rand = Math.random();
  rand = Math.ceil(rand * 4);
  if (rand === 1)
    return "blue";
  else if (rand === 2)
    return "green";
  else if (rand === 3)
    return "red";
  else
    return "yellow";
}

function generate() {
  userinput = [];
  pattern.push(random());
  sound(pattern[level]);
  pressed(pattern[level]);
  level += 1;
  $("#level-title").text("Level " + level);

}

function check(l){
  if(pattern[l] === userinput[l]){
    if(pattern.length === userinput.length){
      setTimeout(function () {
        generate();
      }, 1000);
    }
  } else{
    gameover();
  }
}



function gameover() {

  var music = new Audio("sounds/wrong.mp3");
  music.play();
  $("body").addClass("game-over")
  setTimeout(function() {
    $("body").removeClass("game-over")
  }, 200);
  begin = false;
  level = 0
  userinput = [];
  pattern = [];
  $(".st").show();
  $("#level-title").text("Press start to restart");
  }
