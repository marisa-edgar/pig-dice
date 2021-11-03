function Dice(){
  this.diceRolls = [];
}

/*Dice.prototype.diceRolls = function() {
  let roll = (Math.floor(Math.random() *6) + 1);
  return roll;
};*/

function randomDice(min, max) {
  min = Math.ceil(1);
  max = Math.floor(6);
  return Math.floor(Math.random() * (6 -1) + 1);

}

Dice.prototype.addRoll = function(diceRolls) {
  this.diceRolls
}

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



