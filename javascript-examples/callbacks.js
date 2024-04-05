setTimeout(() => {
  // runs after 2 seconds
  console.log("inside the function");
}, 2000);

console.log("before");
setTimeout(() => {
  // runs after 2 seconds
  console.log("inside the function");
}, 2000);
console.log("after");

const doSomething = (callback) => {
  //do things
  //do things
  const result = /* .. */ callback(result);
};
