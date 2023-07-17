// // function scope

// const bird = "Scarlet Macaw";
// function birdWatch() {
//   // const bird = "Great Blue Heron";
//   console.log(bird);
// }
// birdWatch();
// // console.log(bird);

// // block scope

// let radius = 8;

// if (radius > 0) {
//   const PI = 3.14;
//   let circ = 2 * PI * radius;
// }

// console.log(radius); //8
// console.log(PI); //NOT DEFINED
// console.log(circ); //NOT DEFINED

// lexical scope
// 자식함수의 scope는 상위레벨인 부모함수

function bankRobbery() {
  const heroes = ["Spiderman", "Wolverine", "Black Panther"];
  function cryForHelp() {
    for (let hero of heroes) {
      console.log(`Please help us, ${hero.toUpperCase()}`);
    }
  }
  cryForHelp();
}

bankRobbery();
