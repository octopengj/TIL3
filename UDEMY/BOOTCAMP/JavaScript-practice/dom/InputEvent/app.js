const input = document.querySelector("input");
const h1 = document.querySelector("h1");

// change와 input의 차이

// change는 현재 작업중에서 벗어나면 실행이 되고
// input은 입력이(업데이트) 될 때마다 실행이 됨

// input.addEventListener("change", function (e) {
//   console.log("dfjsad");
// });

// input.addEventListener("input", function (e) {
//   console.log("input event");
// });

// h1을 조작해서 실시간으로 변경하는 예제
input.addEventListener("input", function (e) {
  h1.innerText = input.value;
});
