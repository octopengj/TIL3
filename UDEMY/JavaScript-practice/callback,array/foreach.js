// 예1)

// const numbers = [1, 2, 3, 4, 5, 6, 7];

// // 단순 출력의 경우 for가 더 편함
// numbers.forEach(function (el) {
//   console.log(el);
// });

// for (let el of numbers) {
//   console.log(el);
// }

// // 짝수만 출력
// numbers.forEach(function (el) {
//   if (el % 2 === 0) {
//     console.log(el);
//   }
// });

// 예2)

const movies = [
  {
    title: "Amadeus",
    score: 99,
  },
  {
    title: "Stand by me",
    score: 85,
  },
  {
    title: "Parasite",
    score: 95,
  },
];

movies.forEach(function (movie) {
  console.log(`${movie.title} - ${movie.score}/100`);
});

// for of가 나온 이후로는 for of를 더 많이 사용
