// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// for (let i = 0; i <= 20; i += 1) {
//   console.log(i);
// }

// // 짝수
// for (let i = 0; i <= 20; i += 2) {
//   console.log(i);
// }

// // 홀수
// for (let i = 1; i <= 20; i += 2) {
//   console.log(i);
// }

// // 감소
// for (let i = 100; i >= 0; i -= 10) {
//   console.log(i);
// }

// // 무한루프
// for (let i = 0; i >= 0; i += 1) {
//   console.log(i);
// }

// ---------------------------------------------------

// // 배열 루프
// const animals = ["lion", "tiger", "snake", "dog"];
// for (let i = 0; i < animals.length; i++) {
//   console.log(i, animals[i]);
// }

// ----------------------------------------------------

// // 중첩 루프
// let str = "LOL";
// for (let i = 0; i <= 4; i++) {
//   console.log("Outer:", i);
//   for (let j = 0; j < str.length; j++) {
//     console.log("  Inner:", str[j]);
//   }
// }

// const alphaName = [
//   ["A", "B", "C", "D"],
//   ["E", "F", "G", "H"],
//   ["I", "J", "K", "L"],
// ];
// for (let i = 0; i < alphaName.length; i++) {
//   const row = alphaName[i];
//   console.log(`ROW: ${i + 1}`);
//   for (let j = 0; j < row.length; j++) {
//     console.log(row[j]);
//   }
// }

//--------------------------------------------------------

// for of 구문
// const subreddits = ["cringe", "books", "chickens", "funny", "pics", "soccer"];

// for (let i = 0; i < subreddits.length; i++) {
//   console.log(`Visit reddit.com/r/${subreddits[i]}`);
// }

// for (let sub of subreddits) {
//   console.log(`Visit reddit.com/r/${sub}`);
// }

// for 중첩문 적용

const alphaName = [
  ["A", "B", "C", "D"],
  ["E", "F", "G", "H"],
  ["I", "J", "K", "L"],
];
for (let i = 0; i < alphaName.length; i++) {
  const row = alphaName[i];
  console.log(`ROW: ${i + 1}`);
  for (let j = 0; j < row.length; j++) {
    console.log(row[j]);
  }
}

// 중첩문에서 배열의 인덱스가 필요한 경우가 아니라면
for (let row of alphaName) {
  for (let alpha of row) {
    console.log(alpha);
  }
}
