//Function Scope with var:
function getData() {
  if (true) {
    var data = "some data";
  }
  console.log(data); // 'some data' (due to hoisting)
}

//Function Scope with let:
function getData() {
  if (true) {
    let data = "some data";
  }
  console.log(data); // ReferenceError: data is not defined
}

//Loop Variable Behavior:
//Using var inside a loop:
function doLoop() {
  for (var i = 0; i < 10; i++) {
    console.log(i);
  }
  console.log(i); // 10 (i is accessible outside the loop)
}
//Using let inside a loop:
function doLoop() {
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
  console.log(i); // ReferenceError: i is not defined (i is block-scoped)
}
