// 새 promise 작성법

// new Promise(()=>{ })
// 대문자로 시작하는 Promise에 함수를 전달하고 이 함수에는 매개변수가 두개 있음
// 하나는 resolve 또 하나는 reject

// 예제 기본 개념

// const fakeRequest = (url) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve();
//     }, 1000);
//   });
// };

// fakeRequest("/dogs/1").then(() => {
//   console.log("Done with request");
// });

// 난수를 만들면
const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    const rand = Math.random();
    setTimeout(() => {
      if (rand < 0.7) {
        resolve("Your fake data here");
      }
      reject("Request error!");
    }, 1000);
  });
};

fakeRequest("/dogs/1")
  .then((data) => {
    console.log("Done with request");
    console.log("data is:", data);
  })
  .catch((err) => {
    console.log("Oh No!", err);
  });
