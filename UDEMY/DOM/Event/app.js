const btn = document.querySelector("#v2");

btn.onclick = function () {
  console.log("you clicked me");
};

// const scream = function () {
//   console.log("ahahahahah");
//   console.log("stop to touch me");
// };

function scream() {
  console.log("hahahahah");
  console.log("wowowowow");
}

btn.onmouseenter = scream;

const btn3 = document.querySelector("#v3");
btn3.addEventListener("click", function () {
  alert("clicked me");
});

btn3.addEventListener("mouseup", scream);

// onEvent보다 addEventListener를 사용하는 이유

function twist() {
  console.log("twist");
}
function shout() {
  console.log("shout");
}

const tasButton = document.querySelector("#tas");

// tasButton.onclick = twist;
// tasButton.onclick = shout;
// shout다음에 twist가 나오게 하려하지만 shout만 나옴,, 컬러가 덮어쓴 경우랑 같음

// tasButton.addEventListener("click", twist);
// tasButton.addEventListener("click", shout);

// addEventListener는 옵션을 추가할 수 있음
// 콜백다음 객체 안에 옵션 작성
tasButton.addEventListener("click", twist, { once: true });
tasButton.addEventListener("click", shout);
