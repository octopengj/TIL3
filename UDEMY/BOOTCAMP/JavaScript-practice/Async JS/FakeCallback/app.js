// 진짜로 요청하는 코드는 아니고 대신 url를 이용한 예시
// 4초가 넘을 경우 실패 아니면 성공

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

fakeRequestCallback(
  "books.com/page1",
  function (response) {
    console.log("It worked!!!");
    console.log(response);
    fakeRequestCallback(
      "books.com/page2",
      function (response) {
        console.log("It worked again");
        console.log("response");
        fakeRequestCallback(
          "books.com/page3",
          function (response) {
            console.log("It worked again (3rd req)");
            console.log("response");
          },
          function (err) {
            console.log("error(3rd req)", err);
          }
        );
      },
      function (err) {
        console.log("error(2nd req)", err);
      }
    );
  },
  function (err) {
    console.log("error", err);
  }
);

// Promise는 어떤 연산, 비동기 연산이 최종적으로 완료 혹은 성공했는지 실패했는지를
// 알려주는 객체이다.

// 일반적인 사례로는
// 요청을 보내 다른 위치에서 데이터를 받는 것인데
// 대표적인 것이 API이다.
// 시간이 오래 걸리기도 하고 아예 접속이 안 될 때고 있고
// 접근 권한이 없거나 URL을 잘못 썼거나 API나 인터넷이 다운되었거나

// 보통의 요청작성은
// makeRequest() 안에 콜백 두개를 넣고
// 첫번째는 성공 콜백, 두번째는 실패 콜백
// makeRequest(성공콜백, 실패콜백)
// 만약 성공한 다음에 또 무언인가를 하려면 중첩에 중첩을 거듭하게 됨

// 이러한 코드의 복잡함 때문에 promise가 나타남
