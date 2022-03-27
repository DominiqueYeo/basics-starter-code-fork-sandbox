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
// var main = function (input) {
//   var myOutputValue = "hellogoodbye";
//   retur myOutputValue;
// };

// // //Logical error
// var addTwoNumbers = function (num1, num2) {
//   return Number(num1) - Number(num2);
// };

// var main = function (input) {
//   var firstNumber = input;
//   var secondNumber = 5;
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
//   var handsomeMeter = 'So-So'
//   if (input == 'jiahao') {
//     handsomeMeter = 'HANDSOME'
//   }

//   return handsomeMeter
// }

// // code still runs after if
// // var main = function (input) {
// //   var handsomeMeter = 'So-So'
// //   if (input == 'jiahao') {
// //     handsomeMeter = 'HANDSOME'
// //   }
// //   handsomeMeter = 'Erm okay la '
// //   return handsomeMeter
// // }

// // early return to terminate code execution
// // var main = function (input) {
// //   var handsomeMeter = 'So-So'
// //   if (input == 'jiahao') {
// //     return 'HANDSOME'
// //   }
// //   handsomeMeter = 'Erm okay la '
// //   return handsomeMeter
// // }

///////////////////////  Else If ////////////////////////

// var main = function (input) {
//   var handsomeMeter = 'So-So'
//   if (input == 'jiahao') {
//     handsomeMeter = 'HANDSOME'
//   } else {
//     handsomeMeter = 'Only Jia Hao handsome'
//   }

//   return handsomeMeter
// }

// // var main = function (input) {
// //   var handsomeMeter = 'So-So'
// //   if (input == 'jiahao') {
// //     handsomeMeter = 'HANDSOME'
// //   } else if (input == 'dom') {
// //     handsomeMeter = 'HANDDDDSOOMMMEEEEEEEEE'
// //   }

// //   return handsomeMeter
// // }

// // var main = function (input) {
// //   var handsomeMeter = 'So-So'
// //   if (input == 'jiahao') {
// //     handsomeMeter = 'HANDSOME'
// //   } else if (input == 'dom') {
// //     handsomeMeter = 'HANDDDDSOOMMMEEEEEEEEE'
// //   } else {
// //     handsomeMeter = 'Dom is the most handsome'
// //   }

// //   return handsomeMeter
// // }

////////////////////////////////// Logical OR //////////////////

// var main = function (input) {
//   var handsomeMeter = "So-So";
//   if (input == "jiahao" || input == "dom") {
//     handsomeMeter = "HANDSOME";
//   }

//   return handsomeMeter;
// };

// // var main = function (input) {
// //   var handsomeMeter = "So-So";
// //   if (input == "jiahao" && input == "dom") {
// //     handsomeMeter = "HANDSOME";
// //   }

// //   return handsomeMeter;
// // };

// // var main = function (input) {
// //   var handsome = 10
// //   var height = 178
// //   var wallet = 10
// //   if ( height > 190  || wallet > 1000000 || handsome > 8 ) {
// //     return "Marry him now";
// //   }
// //   if ( height > 190  && wallet > 1000000 && handsome > 8 ) {
// //     return "Marry him now";
// //   }
// // };

// // var main = function (input) {
// //   var handsome = 10
// //   var height = 178
// //   var wallet = 10
// //   if ( height > 190  || wallet > 1000000 || handsome > 8 ) {
// //     return "Marry him now";
// //   }
// //   if ( height > 190  && wallet > 1000000 && handsome > 8 ) {
// //     return "Marry him now";
// //   }else if (input == 'dom') {
// //     return 'Marry him now!'
// //   }
// // };
