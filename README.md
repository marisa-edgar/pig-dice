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