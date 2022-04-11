// var counter = 0
// while (condition) {
//   code here
//   counter +=1
// }

// var main = function () {
//   var counter = 0;
//   while (counter < 5) {
//     console.log(counter);
//     counter += 1;
//   }
// };

// for (var counter=0 ; condition ; counter -= 3) {
//   code here
// }

////////////////////////
var spsComputer = function () {
  var numberChoice = Math.floor(Math.random() * 3) + 1;
  if (numberChoice == 1) {
    return "scissors";
  }
  if (numberChoice == 2) {
    return "paper";
  }
  return "stone";
};

////////////// while ///////////////////////////
// var main = function () {
//   var paperCounter = 0;

//   while (paperCounter < 5) {
//     var roll = spsComputer();
//     console.log(roll);
//     if (roll == "paper") {
//       paperCounter += 1;
//     }
//   }
// };

//////////////////////// for //////////////////////////
// var main = function () {
//   for (var i = 0; i < 10; i += 1) {
//     //code here
//     if (roll == "paper") {
//       continue;
//     }
//     var roll = spsComputer();
//     console.log(roll);
//   }
// };

//////////////////////// double for loops //////////////////
var main = function () {
  for (var i = 0; i < 10; i += 1) {
    //code here
    console.log("outer", i);
    for (var j = 0; j < 5; j += 1) {
      console.log("inner", j);
    }
  }
};

//////////////////////// infinite loop ////////////////
//var main = function () {
// var paperCounter = 1

// while (paperCounter) {
//   var roll = scpComputer()
//   console.log(roll)
// }
//}
