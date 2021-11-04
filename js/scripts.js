function Dice(){
  this.roll = 0;
  this.tempScore = 0;
  this.totalScore =0;
  this.turn = turn;
  /*this.playerName;*/

}
/*this.diceRolls = [];*/
/*Dice.prototype.diceRolls = function() {
  let roll = (Math.floor(Math.random() *6) + 1);
  return roll;
};*/
/*let newNumber = Math.floor(Math.random() * (6 -1) + 1); 
    if (newNumber === 1) {
      return false;
      alert("Sorry your lost your turn") 
    } else {
      this.totalScore = newNumber;
      return totalScore;
    }*/

function randomDice() {
  return Math.floor(Math.random() * 6 + 1); 

}

Dice.prototype.rollOne = function(){
  if (this.roll === 1) {
    this.tempScore = 0;
      prompt("Sorry you lost your turn");
  } else {
    this.tempScore += this.roll;
  }
}
Dice.prototype.hold = function(){
  this.totalScore += this.tempScore;
  this.tempScore = 0;
    prompt("Your turn is over");

}
Dice.prototype.checkWinner = function () {
  if (this.totalScore >= 100) {
    prompt("YOU WON!");
  }
}






$(document).ready(function() {
    $("button#start").submit(function(event) {
    player1 = new Player(true);
    player2 = new Player(false);
    $(".player-console").show();
    $(".start-menu").hide();

    let player1Name = $("#player-one-name").val();
    let player2Name = $("#player-two-name").val();

    player1.player1Name=player1Name;
    player2.player1Name=player2Name;
  });

  $("button#start-game").click(function(event) {
    $(".console").hide();
    clearValues();

    player1.newGame();
    player2.newGame();
    $("#round-total-1").empty();
    $("#total-score-1").empty();
    $("#dice-roll-1").empty();
    $("#round-total-2").empty();
    $("#total-score-2").empty();
    $("#die-roll-2").empty();

    $(".start-menu").show().Dice
  });
  
  });
  




/*Dice.prototype.addRolls = function () {
  let currentTotal = 0;
  let Rolls =  Math.floor(Math.random() * (6 -1) + 1);
  this.Rolls.forEach(function(number) {
    currentTotal += number;
  })
  return currentTotal;
};*/


/*assign id to the different rolls of dice,

*create pseudo data base to store the outcomes,

*Displays total value of roll to user,

*keep the inputted number from the previous roll if they decide to hold it,

*takes the total of the outcomes and adds the new outcome to it,

*tally's the outcomes and displays to user,

*replicate functions for player 2

*dont allow either player to roll until its their turn
*continues until total outcome is >= 100,



