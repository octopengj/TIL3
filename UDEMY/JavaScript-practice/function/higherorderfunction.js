// 고차함수

//아규먼트로 함수를 받거나, 함수를 리턴

// function callTwice(func) {
//   func();
//   func();
// }

// function rollDie() {
//   const roll = Math.floor(Math.random() * 6) + 1;
//   console.log(roll);
// }

// callTwice(rollDie);
// callTwice(rollDie());
// 이런식으로 호출을하게되면 rollDie()를 먼저 호출하여 값을 구하고 그 값이 들어감

//반환함수

// function makeMysteryFunc() {
//   const rand = Math.random();
//   if (rand > 0.5) {
//     return function () {
//       console.log("Congrat, I am a good function");
//       console.log("You win a million dollars");
//     };
//   } else {
//     return function () {
//       alert("You have been infected by a computer virus");
//       alert("Stop trying to close this window");
//       alert("Stop trying to close this window");
//       alert("Stop trying to close this window");
//       alert("Stop trying to close this window");
//       alert("Stop trying to close this window");
//     };
//   }
// }

// const mystery = makeMysteryFunc();
// mystery();

function makeBetweenFunc(min, max) {
  return function (num) {
    return num >= min && num <= max;
  };
}
makeBetweenFunc(100, 200);

// makeBetweenFunc(5,10) =>

// function isBetween(num) {
//   return num >= 50 && num <= 100
// }
// function isBetween2(num) {
//   return num >= 1 && num <= 10
// }
