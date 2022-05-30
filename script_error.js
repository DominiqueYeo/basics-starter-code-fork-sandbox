//user inputs scissors, paper or stone.
//program randomly chooses scissors, paper or stone.
//output if user wins, loses or draws

var randomSPS = function () {
  var randomInteger = Math.floor(Math.random() * 3); // rounds value down to an integer, either 0, 1 or 2
  if (randomInteger == 0) {
    // 0 will give scissors
    var computerSPS = "scissors";
  } else if (randomInteger == 1) {
    // 1 will give paper
    var computerSPS = "paper";
  } else {
    // 2 will give stone
    var computerSPS = "stone";
  }
  return computerSPS;
};

//combined SPS
var main = function (input) {
  // saves input in lowercase to inputLower and remove leading and trailing spaces
  var inputLower = input.toLowerCase().trim();
  //checks for validity of input
  if (
    inputLower != "scissors" &&
    inputLower != "paper" &&
    inputLower != "stone" &&
    inputLower != "reversed scissors" &&
    inputLower != "reversed paper" &&
    inputLower != "reversed stone"
  ) {
    //informs user to enter a valid input
    return 'Your input is invalid. Please enter either "scissors", "paper", "stone", "reversed scissors", "reversed paper", or "reversed stone".';
  }
  // saves random scissors paper stone to variable
  var computerSPS = randomSPS();
  var winFlag = false;
  var reversedFlag = false;
  if (inputLower.startsWith("reversed")) {
    inputLower = inputLower.replace("reversed ", "");
    reversedFlag = true;
  } //check for draw
  if (inputLower == computerSPS) {
    return `Draw, you chose ${input} and computer chose ${computerSPS}`;
  } //check for win
  else if (
    (inputLower == "paper" && computerSPS == "stone") ||
    (inputLower == "stone" && computerSPS == "scissors") ||
    (inputLower == "scissors" && computerSPS == "paper")
  ) {
    //win condition
    winFlag = true;
  }

  if (reversedFlag == true) {
    winFlag = !winFlag;
  }

  if (winFlag == true) {
    return `You win. <br>The computer chose ${computerSPS} and you chose ${input}. <br> Please enter 'scissors', 'paper' or 'stone' to play another round!`;
  } else {
    return `You lose. <br>The computer chose ${computerSPS} and you chose ${input}. <br> Please enter 'scissors', 'paper' or 'stone' to play another round!`;
  }
};
