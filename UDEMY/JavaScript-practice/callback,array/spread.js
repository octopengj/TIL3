// 문자열을 펼쳐셔 배열을 만들 수 있음
// 배열을 하나하나 나눠서 작동함
// 화살표함수에서 사용 불가

// ["hello"]
// [..."hello"] -> (5) ["h", "e", "l", "l", "o"]

const nums = [11, 124, 155, 67, 4, 46, 7, 78];

Math.max(...nums); // 155
Math.max(nums); // NaN

// 원본은 건드리지 않고 복사본 생성
// 복사본에 추가도 가능
const cats = ["naby", "kong", "yaong"];
const dogs = ["baduk", "mung", "walwal"];

// const allPets = [...cats, ...dogs];
// console.log(allPets);

const allPets = [...cats, ...dogs, "nong"];
console.log(allPets);

// 객체 스프레드

const feline = { legs: 4, family: "felidae" };
const canine = { isFurry: true, family: "Caninae" };

// 추가 가능
const fe = { ...feline, color: "Black" };

// 덮어쓰기 주의
// 순서가 중요
const catDog = { ...feline, ...canine };
//{legs: 4, family: 'Caninae', isFurry: true}
// canine의 family가 feline의 family를 덮어씀
