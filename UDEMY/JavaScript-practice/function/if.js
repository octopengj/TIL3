// console.log("Hello JavaScript!!");

// --- if ---

// 0-5 free
// 5-10 child $10
// 10-65 adult $20
// 65- free

// const age = 70;

// if (age < 5) {
//   console.log("You are a baby. You get in for free");
// } else if (age < 10) {
//   console.log("You are a child. You pay $10");
// } else if (age < 65) {
//   console.log("You are an adult. You pay $20");
// } else {
//   console.log("You are a senior. You get in for free");
// }

// --- nesting ---

const password = prompt("please enter a new password");

// // password must be 6+ characters
// if (password.length >= 6) {
//   console.log("Long enough password");
// } else {
//   console.log("Password too short! Must be 6+ characters");
// }

// // password cannot include space
// if (password.indexOf(" ") === -1) {
//   console.log("Good job! No space");
// } else {
//   console.log("Password cannot contain spaces!");
// }

// nesting
if (password.length >= 6) {
  if (password.indexOf(" ") === -1) {
    console.log("Valid Password");
  } else {
    console.log("Password cannot contain spaces!");
  }
} else {
  console.log("Password too short! Must be 6+ characters");
}
