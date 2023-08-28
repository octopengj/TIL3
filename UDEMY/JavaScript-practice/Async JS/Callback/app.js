// setTimeout(() => {
//   document.body.style.backgroundColor = "red";
// }, 1000);

// setTimeout(() => {
//   document.body.style.backgroundColor = "orange";
// }, 3000);

// setTimeout(() => {
//   document.body.style.backgroundColor = "yellow";
// }, 5000);

// 중첩으로 작성
// setTimeout(() => {
//   document.body.style.backgroundColor = "red";
//   setTimeout(() => {
//     document.body.style.backgroundColor = "orange";
//     setTimeout(() => {
//       document.body.style.backgroundColor = "yellow";
//       setTimeout(() => {
//         document.body.style.backgroundColor = "green";
//         setTimeout(() => {
//           document.body.style.backgroundColor = "blue";
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

//추출해서 함수로
const delayedColorChange = (newColor, delay, doNext) => {
  setTimeout(() => {
    document.body.style.backgroundColor = newColor;
    doNext && doNext();
  }, delay);
};

delayedColorChange("red", 2000, () => {
  delayedColorChange("orange", 2000, () => {
    delayedColorChange("yellow", 2000, () => {
      delayedColorChange("green", 2000, () => {
        delayedColorChange("blue", 2000, () => {});
      });
    });
  });
});

// 시간을 모를 때
// 가짜 코드이거나 실제 함수가 없는 경우 등의 경우
// 영화 데이터베이스가 있다 하면
searchMovieAPI(
  "amadeus",
  () => {
    saveToMyDB(
      movies,
      () => {
        // if it works, run this
      },
      () => {
        // if it doesn't work, run this
      }
    );
  },
  () => {
    // if API is down, or request failed
  }
);
