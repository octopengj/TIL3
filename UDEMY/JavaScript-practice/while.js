// let count = 0;
// while (count < 10) {
//   console.log(count);
//   count++;
// }

//--------------------------------------------------

// // 예1)
// const SECRET = "BabyHippo";

// let guess = prompt("enter the secret code.");
// while (guess !== SECRET) {
//   guess = prompt("enter the secret code.");
// }
// console.log("Congrats you got the secret");

//---------------------------------------------------

// // 예2)
// let input = prompt("Hello, say something");
// while (true) {
//   input = prompt(input);
//   if (input.toLowerCase() === "stop copying me") break;
// }
// console.log("You Win");

//---------------------------------------------------

// 예3) 최대값입력(지정), 랜덤숫자생성, 랜덤숫자 맞추기
// let maximum = parseInt(prompt("Enter the maximum number!"));
// while (!maximum) {
//   maximum = parseInt(prompt("Enter a valid number"));
// }

// const targetNum = Math.floor(Math.random() * maximum) + 1;

// let guess = parseInt(prompt("Enter your first guess"));

// let attempts = 1;

// while (parseInt(guess) !== targetNum) {
//   if (guess === "q") break;
//   attempts++;
//   if (guess > targetNum) {
//     guess = prompt(
//       "High! Enter a new guess. If you want to stop this, please enter the 'q'"
//     );
//   } else {
//     guess = prompt(
//       "Low! Enter a new guess. If you want to stop this, please enter the 'q'"
//     );
//   }
// }

// if (guess === "q") {
//   console.log("Ok, You Quit");
// } else {
//   console.log("Congrats You Win");
//   console.log(`You got it! It took you ${attempts} guesses`);
// }

// 예3 버그 수정 ====================================================

// // 최대값입력후 q를 입력했을 경우 Low문장이 출력되는 버그 수정
// // 숫자가 아님 값을 입력했을 경우에도 attempts가 증가되는 버그 수정
// let maximum = parseInt(prompt("Enter the maximum number!"));
// while (!maximum) {
//   maximum = parseInt(prompt("Enter a valid number"));
// }

// const targetNum = Math.floor(Math.random() * maximum) + 1;

// // parseInt제거,
// let guess = prompt("Enter your first guess. (Type 'q' to quit)");

// let attempts = 1;

// while (parseInt(guess) !== targetNum) {
//   if (guess === "q") break;
//   // parseInt처리를 여기서
//   guess = parseInt(guess);
//   // attempts 위치 이동
//   // attempts++;
//   if (guess > targetNum) {
//     guess = prompt("High! Enter a new guess.");
//     attempts++;
//     // else if 로 명확성 추가
//   } else if (guess < targetNum) {
//     guess = prompt("Low! Enter a new guess.");
//     attempts++;
//   } else {
//     guess = prompt("Enter a valid number.");
//   }
// }

// if (guess === "q") {
//   console.log("Ok, You Quit");
// } else {
//   console.log("Congrats You Win");
//   console.log(`You got it! It took you ${attempts} guesses`);
// }

// -------------------------------------------------------------
