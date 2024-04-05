function Car(brand, model) {
  this.brand = brand;
  this.model = model;
}

// Creating a new Car instance
const myCar = new Car("Ford", "Fiesta");
console.log(myCar.brand); // Output: 'Ford'
console.log(myCar.model); // Output: 'Fiesta'

// Demonstrating reference vs. value with objects and arrays
let age = 36;
let myAge = age; // Passed by value (primitive type)
myAge = 37;
console.log(age); // Output: 36 (age remains unchanged)

const car = {
  color: "blue",
};
const anotherCar = car; // Passed by reference (object)
anotherCar.color = "yellow";
console.log(car.color); // Output: 'yellow' (car's color is changed)

const numbers = [1, 2, 3];
const otherNumbers = numbers; // Passed by reference (array)
otherNumbers.push(4);
console.log(numbers); // Output: [1, 2, 3, 4] (numbers array is modified)

//You can modify existing properties or add new properties to an object:
const bus = {
  color: "blue",
};

car.color = "yellow";
car["color"] = "red";
car.model = "Fiesta";

console.log(car.color); // Output: 'red' (last assigned value)
console.log(car.model); // Output: 'Fiesta'

//You can delete properties from an object using the delete keyword:
const bike = {
  color: "blue",
  brand: "Ford",
};

delete car.brand;
console.log(car.brand); // Output: undefined (brand property is deleted)

//Define an object with a method
const car = {
  brand: "Ford",
  model: "Fiesta",

  // Method to start the car
  start: function () {
    console.log("Started");
  },

  // Method to display car details
  displayDetails: function () {
    console.log(`Brand: ${this.brand}, Model: ${this.model}`);
  },

  // Method to go to a destination
  goTo: function (destination) {
    console.log(`Going to ${destination}`);
  },
};

// Calling object methods using dot notation
car.start(); // Output: 'Started'
car.displayDetails(); // Output: 'Brand: Ford, Model: Fiesta'
car.goTo("Rome"); // Output: 'Going to Rome'
