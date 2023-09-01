const cat = {
  name: "Blue Steele",
  color: "grey",
  breed: "scottish fold",
  meow() {
    console.log("this:", this);
    console.log(`${this.name} says meowww`);
  },
};

const meow2 = cat.meow;
// 콘솔에서 meow2를 찍어보면 cat.meow()를 가리킨다.
// 콘솔에서 호출을 meow2() 해보면 says meowww가 출력된다.
// cat.meow()를 호출했을 때와 다른 값이 나온다. Blue Steele says meowww
// console.log(this)를 찍어보면 this가 가리키는 것이 다르다를 것을 알 수 있다.
// cat.meow()에서 this는 cat객체, meow2에서 this는 window객체를 가리킨다.
//
