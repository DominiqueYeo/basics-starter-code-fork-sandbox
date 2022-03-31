//////////// local scope example

// var scopeExample = function () {
//   var message = "world";
//   //console.log("Im in function", message);
//   return message;
// };

// var main = function () {
//   var message = "hello";
//   console.log("Im in main");
//   console.log(message);
//   console.log(scopeExample());
//   console.log(message);
//   message = scopeExample();
//   console.log(message);

//   return message;
// };

/////////////// global example
// var message = "global";
// var globVar = "i exist";

// var scopeExample = function () {
//   console.log("Im in function", message);
//   console.log("globVar", globVar);
//   var message = "world";
//   console.log("Im in function 2", message);

//   return message;
// };

// var main = function () {
//   console.log(message);
//   message = "hello";
//   console.log("Im in main");
//   console.log(message);
//   message = scopeExample();
//   console.log(message);
//   return message;
// };

// scopeExample();
// console.log(message);

// game state

const rollDice = () => {
  return Math.floor(Math.random() * 6) + 1;
};

const main = () => {
  let diceTally = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };

  for (let i = 0; i < 1000000; i += 1) {
    let roll = rollDice();
    diceTally[roll] += 1;
  }
  console.log(diceTally);
};
