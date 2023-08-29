// 이전에 작성했던 콜백지옥

// const delayedColorChange = (newColor, delay, doNext) => {
//   setTimeout(() => {
//     document.body.style.backgroundColor = newColor;
//     doNext && doNext();
//   }, delay);
// };

// delayedColorChange("red", 2000, () => {
//   delayedColorChange("orange", 2000, () => {
//     delayedColorChange("yellow", 2000, () => {
//       delayedColorChange("green", 2000, () => {
//         delayedColorChange("blue", 2000, () => {});
//       });
//     });
//   });
// });

// Promise를 사용하면

const delayedColorChange = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, 2000);
  });
};

// delayedColorChange("red", 1000)
//   .then(() => {
//     return delayedColorChange("orange", 1000); // return을 작성해도 되고, 축약도 됨
//   })
//   .then(() => {});

delayedColorChange("red", 1000)
  .then(() => delayedColorChange("orange", 1000))
  .then(() => delayedColorChange("yellow", 1000))
  .then(() => delayedColorChange("green", 1000))
  .then(() => delayedColorChange("blue", 1000))
  .then(() => delayedColorChange("navy", 1000))
  .then(() => delayedColorChange("purple", 1000));
