const fakeRequestCallback = (url, success, failure) => {
  const delay = Math.floor(Math.random() * 4500) + 500;
  setTimeout(() => {
    if (delay > 4000) {
      failure("Connection Timeout :(");
    } else {
      success(`Here is your fake data from ${url}`);
    }
  }, delay);
};

const fakeRequestPromise = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if (delay > 4000) {
        reject("Connection Timeout :(");
      } else {
        resolve(`Here is your fake data from ${url}`);
      }
    }, delay);
  });
};

// -------------------------------------

// const request = fakeRequestPromise("yelp.com/api/coffee");

// request
//   .then(() => {
//     console.log("Promise resolved");
//     console.log("It worked!!");
//   })
//   .catch(() => {
//     console.log("Promise rejected");
//     console.log("Error");
//   });

// promise가 resolve되면 .then을 실행하고 reject되면 .catch를 실행하게 됨
// 변수에 저장할 필요는 없음

// fakeRequestPromise("yelp.com/api/coffee")
//   .then(() => {
//     console.log("It worked!! (page1)");
//     fakeRequestPromise("yelp.com/api/coffee/page2")
//       .then(() => {
//         console.log("It worked!! (page2)");
//       })
//       .catch(() => {
//         console.log("Error (page2)");
//       });
//   })
//   .catch(() => {
//     console.log("Error (page1)");
//   });

// .then 콜백 안에서 promise 반환이 가능하게 작성할 수 있다.
// 그러면 코드가 간단해짐 promise를 사용하는 이유

fakeRequestPromise("yelp.com/api/coffee/page1")
  .then(() => {
    console.log("It worked!! (page1)");
    return fakeRequestPromise("yelp.com/api/coffee/page2");
  })
  .then(() => {
    console.log("It worked!! (page2)");
    return fakeRequestPromise("yelp.com/api/coffee/page3");
  })
  .then(() => {
    console.log("It worked!! (page3)");
  })
  .catch(() => {
    console.log("A request failed!!");
  });

// 첫 promise가 resolved면 새로운 promise를 반환하고
// 다음 promise를 실행해서 resolved면 새로운 promise를 반환하고
// rejected되면 .catch를 실행한다.
