//Function Declaration and Invocation
function greet() {
  console.log("Hello!");
}

// Function invocation
greet(); // Output: 'Hello!'

//Function with Parameters
function greet(name, age) {
  console.log(`Hello, ${name}! You are ${age} years old.`);
}

// Function invocation with arguments
greet("John", 30); // Output: 'Hello, John! You are 30 years old.'

//Function with Default Parameters and Argument Checks
function greet(name = "Anonymous", age = 25) {
  console.log(`Hello, ${name}! You are ${age} years old.`);
}

greet(); // Output: 'Hello, Anonymous! You are 25 years old.'

// Checking if an argument is provided
function greet(name, age) {
  if (typeof age !== "undefined") {
    console.log(`Hello, ${name}! You are ${age} years old.`);
  } else {
    console.log(`Hello, ${name}!`);
  }
}

greet("John", 30); // Output: 'Hello, John! You are 30 years old.'
greet("Mary"); // Output: 'Hello, Mary!'

//Function with Return Value
function add(a, b) {
  return a + b;
}

let sum = add(5, 3);
console.log(sum); // Output: 8

//Nested Functions
function outerFunction() {
  function innerFunction() {
    console.log("Inside inner function");
  }
  innerFunction(); // Invoke inner function
  return "Returned from outer function";
}

console.log(outerFunction()); // Output: 'Inside inner function' followed by 'Returned from outer function'
// innerFunction(); // Error: innerFunction is not defined (outside scope)
