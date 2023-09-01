const numbers = [1, 2, 3, 4, 5];

const doubles = numbers.map(function (num) {
  return num * 2;
});
// 기존의 배열을 하나하나 돌면서 작동하고
// 기존배열은 건들지 않고 새로운 배열을 생성한다.

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

const titles = movies.map(function (movie) {
  return movie.title.toUpperCase();
});
