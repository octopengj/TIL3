const btn = document.querySelector("#v2");

btn.onclick = function () {
  console.log("You Clicked Me");
};

function scream() {
  console.log("AAAAAHHHH");
}

btn.onmouseenter = scream;

document.querySelector("h1").onclick = () => {
  alert("You clicked the h1");
};

const btn3 = document.querySelector("#v3");
btn3.addEventListener("click", function () {
  alert("Clicked");
});

// onclick를 사용하지 않고 addEventListener를 사용하는 이유

function twist() {
  console.log("TWIST");
}

function shout() {
  console.log("SHOUT");
}

const tasButton = document.querySelector("#tas");

// twist가 먼저나오게 설정하는 것이 안됨 shout가 덮어 씀
// tasButton.onclick = twist;
// tasButton.onclick = shout;

// addEventListener를 사용하면 twist와 shout가 차례대로 출력됨
tasButton.addEventListener("click", twist);
tasButton.addEventListener("click", shout);

// 옵션도 추가해서 사용할 수 있음
