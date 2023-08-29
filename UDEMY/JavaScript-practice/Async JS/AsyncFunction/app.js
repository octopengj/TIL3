// 비동기함수는 비동기 코드를 깔끔하게 작성하도록 돕는 함수
// 두가지 키워드는
// async await
// 함수 앞에 async를 입력해서 함수를 비동기 함수로 선언하면
// 함수는 자동으로 Promise를 반환한다
// 예시
// async function hello(){

// }

// const sing = async () => {

// }

// 반환값이 있으면 resolved가 나타나고 오류가 있으면 오류값과 함께 rejected가 뜸

//가상의 로그인상황을 예시로 만들면

const login = async (username, password) => {
  if (!username || !password) throw "Missing Credentials";
  if (password === "1234") return "welcome";
  throw "Invalid Password";
};

login("abcd", "1234")
  .then((msg) => {
    console.log("Logged in");
    console.log(msg);
  })
  .catch((err) => {
    console.log("error");
    console.log(err);
  });

// ---------------------------------------------------------------------

// AWAIT

// async와 짝으로 사용되는 것이 await이 있는데
// 역할은 기다리게 하는 것이다. 비동기 함수의 실행을 일시 정지시킴

// 색이 변하는 함수를 예시로 사용

const delayedColorChange = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, 2000);
  });
};

// delayedColorChange("red", 1000)
//   .then(() => delayedColorChange("orange", 1000))
//   .then(() => delayedColorChange("yellow", 1000))
//   .then(() => delayedColorChange("green", 1000))
//   .then(() => delayedColorChange("blue", 1000))
//   .then(() => delayedColorChange("navy", 1000))
//   .then(() => delayedColorChange("purple", 1000));

// awiat을 사용하면 promise가 끝날때까지 기다린다.

async function rainbow() {
  await delayedColorChange("red", 1000);
  await delayedColorChange("orange", 1000);
  await delayedColorChange("yellow", 1000);
  delayedColorChange("green", 1000);
  delayedColorChange("blue", 1000);
}
// await을 작성하지 않으면 yellow 다음에 바로 blue가 뜨게 된다.

rainbow();

// rainbow()가 다 실행되고 종료 console을 작성하려면

rainbow().then(() => console.log("End of rainbow"));

// 위 처럼 작성할 수 있지만, await 키워드로도 가능

async function printRainbow() {
  await rainbow();
  console.log("end of rainbow");
}
printRainbow();

// 비동기 함수의 오류 처리

// 이전에 작성했던 fakeRequest 예문
// 오류가 발생하는 상황과 아닌 상황만 구분했었는데
// 오류는 try catch문으로 오류를 해결한다.
// try에 오류가 될 코드를 적고 catch에서 어떻게 처리할지 정의

const fakeRequest = (url) => {
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

async function makeTwoRequests() {
  try {
    let data1 = await fakeRequest("/page1");
    console.log(data1);
    let data2 = await fakeRequest("/page2");
    console.log(data2);
  } catch (e) {
    console.log("caught an error");
    console.log("error is: ", e);
  }
}

makeTwoRequests();
