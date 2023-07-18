// 필터
// 기존 배열을 건들지 않고 새로운 배열을 만들어준다.

const numbers = [1, 2, 3, 4, 5];

numbers.filter((n) => {
  return n < 3;
});

// 예)

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

const goodMovies = movies.filter((m) => m.score > 90);
const goodTitle = goodMovies.map((m) => m.title);
// 두 문장을 축약
movies.filter((m) => m.score > 80).map((m) => m.title);
