class Person {
  // Constructor to initialize a Person object with name and age properties
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method of the Person class to greet
  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }

  // Another method of the Person class to check if the person is an adult
  isAdult() {
    return this.age >= 18;
  }
}

// Create a new object instance from the Person class using the new keyword and passing arguments to the constructor
const person1 = new Person("John", 25);
const person2 = new Person("Jane", 17);

// Call methods on the person1 and person2 objects
console.log(person1.greet()); // Output: Hello, my name is John and I am 25 years old.
console.log(person1.isAdult()); // Output: true (person1 is an adult)
console.log(person2.greet()); // Output: Hello, my name is Jane and I am 17 years old.
console.log(person2.isAdult()); // Output: false (person2 is not an adult)

// Change properties of the person1 object
person1.age = 30;
console.log(person1.greet()); // Output: Hello, my name is John and I am 30 years old.
console.log(person1.isAdult()); // Output: true (person1 is still an adult after age change)
