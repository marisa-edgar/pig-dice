Describe: RandomDieGenerator();
Test: 
Code:
Math.floor(Math.random() *6) + 1;
Expected Output: "It will return a random number"

#### Describe: DiceCounter();
>Test: 
>Code:
if(this.currentRoll === 1){
    this.total === false;
  }else if(this.currentRoll >1){
    return this.total === true; 
  }
Expected output: "Determines whether the dice roll is greater than 1 and if it is the value as true "


$(".start-menu").show();
  });

  $("button#player1-roll").click(function(event){
    player1.roll = throwdice();
    $("#die-roll-1").text(player1.roll);
    player1.rollone();
    $("#round-total-1").text(player1.tempscore);
  });

  $("button#player2-roll").click(function(event){
    player2.roll = throwdice();
    $("#die-roll-2").text(player2.roll);
    player2.rollone();
    $("#round-total-2").text(player2.tempscore);
  });

  $("button#player1-hold").click(function(event){
    player1.hold();
    $("#total-score-1").text(player1.totalscore);
    $("#round-total-1").empty();
    $("#die-roll-1").empty();
    player1.winnerCheck();
  });

  $("button#player2-hold").click(function(event){
    player2.hold();
    $("#total-score-2").text(player2.totalscore);
    $("#round-total-2").empty();
    $("#die-roll-2").empty();
    player2.winnerCheck();
  });

});