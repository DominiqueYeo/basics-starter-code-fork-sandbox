// // Multi parameter function
// var addTwoNumbers = function (num1, num2) {
//   return Number(num1) + Number(num2);
// };

// var main = function (input) {
//   var firstNumber = input;
//   var secondNumber = 5;
//   return addTwoNumbers(firstNumber, secondNumber);
// };

////////////    Errors //////////////////////////////
// //Syntax error
// var main = function () {
//   var myOutputValue = "hellogoodbye";
//   return myOutputValue;
// };

// // //Logical error
// var addTwoNumbers = function (num1, num2) {
//   console.log("first number is : ", num1, "and the second is : ", num2);
//   return Number(num1) - Number(num2);
// };

// var main = function (input) {
//   var firstNumber = input;
//   var secondNumber = 5;
//   console.log(
//     "first number is : ",
//     firstNumber,
//     "and the second is : ",
//     secondNumber
//   );
//   return addTwoNumbers(firstNumber, secondNumber);
// };

//////////// Comparison operators and Boolean true/false //////////////////

// var main = function (input) {
//   var firstNumber = input;
//   var secondNumber = 5;
//   var comparisonResult = firstNumber > secondNumber
//   return comparisonResult;
// };

/////////////////////////  IF /////////////////////

// var main = function (input) {
//   var handsomeMeter = "So-So";
//   if (input == "jiahao") {
//     handsomeMeter = "HANDSOME";
//   }

//   return handsomeMeter;
// };

//code still runs after if
// var main = function (input) {
//   var handsomeMeter = "So-So";
//   if (input == "jiahao") {
//     handsomeMeter = "HANDSOME";
//   }
//   handsomeMeter = "Erm okay la ";
//   return handsomeMeter;
// };

// // early return to terminate code execution
// var main = function (input) {
//   var handsomeMeter = "So-So";
//   if (input == "jiahao") {
//     return "HANDSOME";
//   }
//   handsomeMeter = "Erm okay la ";
//   return handsomeMeter;
// };

///////////////////////  Else If ////////////////////////

// simple else example
// var main = function (input) {
//   var handsomeMeter;
//   if (input == "jiahao") {
//     handsomeMeter = "HANDSOME";
//   } else {
//     handsomeMeter = "Only Jia Hao handsome";
//   }

//   return handsomeMeter;
// };

// simple else if example
// var main = function (input) {
//   var handsomeMeter = "So-So";
//   if (input == "jiahao") {
//     handsomeMeter = "HANDSOME";
//   } else if (input == "dom") {
//     handsomeMeter = "HANDDDDSOOMMMEEEEEEEEE";
//   }

//   return handsomeMeter;
// };

// chaining  if - else if - else
// var main = function (input) {
//   var handsomeMeter = "So-So";
//   if (input == "jiahao") {
//     handsomeMeter = "HANDSOME";
//   } else if (input == "dom") {
//     handsomeMeter = "HANDDDDSOOMMMEEEEEEEEE";
//   } else {
//     handsomeMeter = "Dom is the most handsome";
//   }

//   return handsomeMeter;
// };

// example with two ifs, showing that both will run if conditions are met
// var main = function (input) {
//   var handsomeMeter = "So-So";
//   if (input == "jiahao") {
//     handsomeMeter = "HANDSOME";
//     console.log("check jh", handsomeMeter);
//   }
//   if (handsomeMeter) {
//     handsomeMeter = "HANDDDDSOOMMMEEEEEEEEE";
//     console.log("check input", handsomeMeter);
//   }

//   return handsomeMeter;
// };

// example showing that only the first block of code that meets the condition will run in an if-else block
// var main = function (input) {
//   var handsomeMeter = "So-So";
//   if (input == "jiahao") {
//     handsomeMeter = "HANDSOME";
//     console.log("check jh", handsomeMeter);
//   } else if (handsomeMeter) {
//     handsomeMeter = "HANDDDDSOOMMMEEEEEEEEE";
//     console.log("check input", handsomeMeter);
//   }

//   return handsomeMeter;
// };

////////////////////////////////// Logical OR //////////////////

// simple OR example
// var main = function (input) {
//   var handsomeMeter = "So-So";
//   if (input == "jiahao" || input == "dom") {
//     handsomeMeter = "HANDSOME";
//   }

//   return handsomeMeter;
// };

// simple AND example
// var main = function (input) {
//   var handsomeMeter = "So-So";
//   console.log("input", input, "condition", input == "jiahao" && input == "dom");
//   if (input == "jiahao" && input == "dom") {
//     handsomeMeter = "HANDSOME";
//   }

//   return handsomeMeter;
// };

// var main = function (input) {
//   var handsome = 10;
//   var height = 178;
//   var wallet = 10;
//   // if (height > 190 || wallet > 1000000 || handsome > 8) {
//   //   return "Marry him now";
//   // }
//   if (height > 190 && wallet > 1000000 && handsome > 8) {
//     return "Marry him now";
//   }
//   return "NO";
// };

// using logical operators in an if-else block
var main = function (input) {
  var handsome = 10;
  var height = 178;
  var wallet = 10;
  if (height > 190 && wallet > 1000000 && handsome > 8) {
    return "Marry him now";
  } else if (input == "dom") {
    return "Marry him now!";
  }
  return "NO";
};
