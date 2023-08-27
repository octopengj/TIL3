// const button = document.querySelector("button");
// const h1 = document.querySelector("h1");
// button.addEventListener("click", function () {
//   const r = Math.floor(Math.random() * 256);
//   const g = Math.floor(Math.random() * 256);
//   const b = Math.floor(Math.random() * 256);
//   const newColor = `rgb(${r}, ${g}, ${b})`;
//   document.body.style.backgroundColor = newColor;
//   h1.innerText = newColor;
// });

// 함수의 길이가 충분히 길다면 별로도 빼두는 것이 좋음

const button = document.querySelector("button");
const h1 = document.querySelector("h1");
button.addEventListener("click", function () {
  const newColor = makeRandColor();
  document.body.style.backgroundColor = newColor;
  h1.innerText = newColor;
});

const makeRandColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};
