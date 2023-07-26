// 배열 분해

const raceResults = ["A", "B", "C"];

const [gold, silver, bronze] = raceResults;
console.log(gold); //'A'
console.log(silver); // 'B'

const [fastest, ...everyonElse] = raceResults;
console.log(fastest); // "A"
console.log(everyonElse); // "B ", "C"

// --------------------------------------------------

// 객체 분해

// const user = {
//   email: "abc@cba.com",
//   password: "abcabc",
//   firstName: "MJ",
//   lastName: "Kim",
//   born: 1950,
//   died: 2010,
// };

//const firstName = user.firstName;

// const { firstName } = user;
// 여러개를 한번에 사용해도 됨, 배열처럼 순서맞추지 않아도 됨
// 객체를 바꾸는건 아니고 새로운 변수로 만듬
// const { firstName, lastName, password } = user;

// 새로운 이름으로 교체도 가능
// const { born: birthYear, died: deathYear } = user;
// born이 birthYear로 바뀜

// 디폴트 값 추가
// const { state = "KOR" } = user;

// ---------------------------------------------------

// 매개 변수 분해

const user = {
  email: "abc@cba.com",
  password: "abcabc",
  firstName: "MJ",
  lastName: "Kim",
  born: 1950,
  died: 2010,
};
// 일반 사용법
function fullName(user) {
  return `${user.firstName} ${user.lastName}`;
}
// 분해
function fullName(user) {
  const { firstName, lastName } = user;
  return `${user.firstName} ${user.lastName}`;
}
// 두가지만 사용한다면 더 축약
function fullName({ firstName, lastName }) {
  return `${firstName} ${lastName}`;
}
