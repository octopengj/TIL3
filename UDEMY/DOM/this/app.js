const makeRandColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};

const buttons = document.querySelectorAll("button");

// for (let button of buttons) {
//   button.addEventListener("click", function () {
//     button.style.backgroundColor = makeRandColor();
//     button.style.color = makeRandColor();
//   });
// }

// const divs = document.querySelectorAll("div");
// for (let div of divs) {
//   div.addEventListener("click", function () {
//     div.style.backgroundColor = makeRandColor();
//     div.style.color = makeRandColor();
//   });
// }

// 반복을 줄이기 위해 this 사용

for (let button of buttons) {
  button.addEventListener("click", colorize);
}

const divs = document.querySelectorAll("div");
for (let div of divs) {
  div.addEventListener("click", colorize);
}

function colorize() {
  this.style.backgroundColor = makeRandColor();
  this.style.color = makeRandColor();
}
