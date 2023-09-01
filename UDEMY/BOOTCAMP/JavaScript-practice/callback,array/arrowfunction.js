// 딱 한번만 쓰는 함수
// 함수 표현식으로 사용

// const add = (x, y) => {
//   return x + y;
// }

// 매개변수가 하나일때는 괄호 없어도 됨
// const square = (x) => {
//   return x * x;
// }

// const square = x => {
//   return x * x;
// }

// const rollDie = () => {
//   return Math.floor(Math.random() * 6) + 1
// }

// 코드를 더 줄일 수도 있다, 암시적 반환 (return 삭제)
// 단순 작업일 때, 하나의 표현식만 사용해야 함

// const rollDie = () => Math.floor(Math.random() * 6) + 1;

// 괄호도 줄일 수 있다
// const add = (a, b) => a + b

// 또 다른 예시
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

// 코드를 줄일 수가 있다.

// const movieScore = movies.map(function(movie) {
//   return `${movie.title} - ${movie.score / 10}`
// })

// const movieScore = movies.map(movie => (
//   `${movie.title} - ${movie.score / 10}`
// ))
