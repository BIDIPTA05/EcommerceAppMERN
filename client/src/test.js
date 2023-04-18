console.log("Console 1");
setTimeout(() => {
  console.log("Timeout");
}, 0);

new Promise((resolve) => {
  resolve("Promise");
}).then((res) => console.log(res));

setTimeout(() => {
  console.log("Timeout2");
}, 100);

setTimeout(() => {
  console.log("Timeout3");
}, 10);

console.log("Console 2");

new Promise((resolve) => {
  resolve("Promise2");
}).then((res) => console.log(res));

console.log("Console 3");
