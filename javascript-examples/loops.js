//Example: while Loop
const list = ['a', 'b', 'c'];
let i = 0;

while (i < list.length) {
    console.log(list[i]); // Output: value
    console.log(i); // Output: index
    i = i + 1;
}

//Example: for Loop
const secondlist = ['a', 'b', 'c'];

for (let i = 0; i < list.length; i++) {
    console.log(list[i]); // Output: value
    console.log(i); // Output: index
}

//Example: for...of Loop
const thirdlist = ['a', 'b', 'c'];

for (const value of list) {
    console.log(value); // Output: value
}