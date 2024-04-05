// Initializing an array
let fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];

// Accessing array elements by index
console.log(fruits[0]); // Output: apple
console.log(fruits[2]); // Output: orange
console.log(fruits.length); // Output: 5

// Adding elements to the end of the array
fruits.push('melon', 'pear');
console.log(fruits); // Output: ['apple', 'banana', 'orange', 'grape', 'kiwi', 'melon', 'pear']

// Removing the last element from the array
fruits.pop();
console.log(fruits); // Output: ['apple', 'banana', 'orange', 'grape', 'kiwi', 'melon']

// Adding elements to the beginning of the array
fruits.unshift('peach', 'plum');
console.log(fruits); // Output: ['peach', 'plum', 'apple', 'banana', 'orange', 'grape', 'kiwi', 'melon']

// Removing the first element from the array
fruits.shift();
console.log(fruits); // Output: ['plum', 'apple', 'banana', 'orange', 'grape', 'kiwi', 'melon']

// Concatenating arrays using concat method
const moreFruits = ['pineapple', 'mango'];
const allFruits = fruits.concat(moreFruits);
console.log(allFruits); // Output: ['plum', 'apple', 'banana', 'orange', 'grape', 'kiwi', 'melon', 'pineapple', 'mango']

// Concatenating arrays using spread operator (...)
const vegetables = ['carrot', 'broccoli', 'spinach'];
const allFood = [...allFruits, ...vegetables];
console.log(allFood); // Output: ['plum', 'apple', 'banana', 'orange', 'grape', 'kiwi', 'melon', 'pineapple', 'mango', 'carrot', 'broccoli', 'spinach']

// Finding an element based on a condition using find method
const ages = [20, 25, 30, 35, 40];
const foundAge = ages.find(age => age > 30);
console.log(foundAge); // Output: 35

// Finding the index of an element based on a condition using findIndex method
const colors = ['red', 'green', 'blue', 'yellow'];
const indexOfBlue = colors.findIndex(color => color === 'blue');
console.log(indexOfBlue); // Output: 2

// Checking if an array includes a specific value using includes method
const planets = ['Mercury', 'Venus', 'Earth', 'Mars'];
console.log(planets.includes('Earth')); // Output: true
console.log(planets.includes('Jupiter')); // Output: false