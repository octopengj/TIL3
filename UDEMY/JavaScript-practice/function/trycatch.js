// 에러발생이 예상되거나 발생시킬때

// 예1)

// hello.toUpperCase();
// Uncaught 에러

// try {
//   hello.toUpperCase();
// } catch {
//   console.log("ERROR!");
// }

// 예2)

// function yell(msg) {
//   console.log(msg.toUpperCase().repeat(3));
// }
// yell("ayaya");
// yell(333);
// 숫자를 입력하면 에러 발생

function yell(msg) {
  try {
    console.log(msg.toUpperCase().repeat(3));
  } catch (e) {
    console.log(e);
    console.log("please pass a string next time");
  }
}
yell(333);
// 멈추지 않고 에러메세지를 전달함
