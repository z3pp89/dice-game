var playerOne = [];
var playerTwo = [];
var diceRoll01 = 0;
var diceRoll02 = 0;
var currentScore1 = 0;
var currentScore2 = 0;

var diceResult = function(num) {
  var dice = Math.floor(Math.random() * 6) +1;
  return dice;
}

$(document).ready(function(event) {

  $("#diceRoll1").click(function() {
    diceRoll01 = diceResult();
    $("#diceResult1").html("<img src='img/" + diceRoll01 + ".jpg'>");
    $("#roundScore1").text("Current Score: " + diceRoll01);
      if (diceRoll01 === 1) {
        currentScore1 = 0;
        $()



      }

  });

  $("#diceRoll2").click(function(event){
    diceRoll02 =diceResult();
    $("#diceResult2").html("<img src='img/" + diceRoll02 + ".jpg'>");
    $("#roundScore2").text("Current Score: " + diceRoll02);

  });


  $("form#name").submit(function(event) {
    event.preventDefault();
    var readyPlayerOne =$("input#name1").val();
    var readyPlayerTwo =$("input#name2").val();
    $("#name1").val("");
    $("#name2").val("");
    $(".output1").text("Player 1: " + (readyPlayerOne));
    $(".output2").text("Player 2: " + (readyPlayerTwo));
  });
});
