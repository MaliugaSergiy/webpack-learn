// import dd from "./scripts/some";

// dd();

// document.getElementById("h1").textContent = "QQQddsds";
let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
console.log(x); // 1
console.log(y); // 2
console.log(z); // { a: 3, b: 4 }

let n = { x, y, ...z };

console.log(n.x); // { x: 1, y: 2, a: 3, b: 4 }

const ddd = () => {
  console.log("dsdsds");
};

if (35) {
}

ddd();

import "./css/style.css";
