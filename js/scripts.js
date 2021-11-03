function Dice(currentRoll, currentRoll2,  secondRoll, secondRoll2, thirdRoll, thirdRoll2){
  this.currentRoll = currentRoll;
  this.secondRoll = secondRoll;
  this.thirdRoll = thirdRoll;
  this.currentRoll2 = currentRoll2;
  this.secondRoll2 = secondRoll2;
  this.thirdRoll2 = thirdRoll2;
}

Dice.prototype.Roll = function() {
  if(this.currentRoll === 1){
    this.total === false;
  }else if(this.currentRoll >1){
    return this.total === true; 
  }
}

