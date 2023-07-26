const prices = [19, 12, 41, 58, 12, 124.234, 12.99];

// 총합구하기

// let total = 0;
// for (let price of prices) {
//   total += price;
// }
// console.log(total);

// const total = prices.reduce((acc, cur) => acc + cur);
// console.log(total);

// 최소값 찾기
const minPrice = prices.reduce((min, cur) => {
  if (cur < min) {
    return cur;
  }
  return min;
});
console.log(minPrice);

// 두번째 인수를 지정할 수도 있다.

const evens = [2, 4, 6, 8, 10];
const even = evens.reduce((sum, cur) => sum + cur, 100);
