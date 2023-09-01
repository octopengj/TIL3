console.log("Sending request to server!");
setTimeout(() => {
  console.log("Here is your data from the server!");
}, 3000);
console.log("I am at the end of the file");

// 자바스크립트가 싱글 쓰레드이지만 처리하지 못하는 것을 브라우저에게 넘겨
// 시간을 카운팅해줄 것을 요청하고
// 자바스크립트는 다른 작업을 하기 때문에 코드가 계속 실행 될 수 있다
