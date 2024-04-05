// Define a string literal using single quotes
const singleQuotedString = 'A string';

// Define a string literal using double quotes
const doubleQuotedString = "Another string";

// Assign a string value to a variable
const name = 'Flavio';

// Determine the length of a string using the length property
console.log('Flavio'.length); // Output: 6
console.log(name.length); // Output: 6

// Define an empty string and check its length
const emptyString = '';
console.log(emptyString.length); // Output: 0

// Join two strings using the + operator
const combinedString = "A " + "string";
console.log(combinedString); // Output: "A string"

// Interpolate variables into a string using the + operator
const greeting = "My name is " + name;
console.log(greeting); // Output: "My name is Flavio"

// Use template literals (backticks) for multiline strings and interpolation
const multiLineString = `Hey
this
string
is awesome!`;

console.log(multiLineString);
// Output:
// Hey
// this
// string
// is awesome!

// Interpolate variables and expressions into a string using template literals
const varValue = 'test';
const interpolatedString = `something ${varValue}`;
console.log(interpolatedString); // Output: "something test"

const expressionString = `something ${1 + 2 + 3}`;
console.log(expressionString); // Output: "something 6"

// Use ternary expressions inside template literals
const foo = true;
const conditionalString = `something ${foo ? 'x' : 'y'}`;
console.log(conditionalString); // Output: "something x"