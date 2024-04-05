function weatherMessage(temperature) {
  if (temperature > 30) {
    return "It's a hot day!";
  } else if (temperature > 20) {
    return "It's a pleasant day.";
  } else if (temperature > 10) {
    return "It's a bit cool today.";
  } else {
    return "It's cold outside!";
  }
}

// Using the function with different temperatures
console.log(weatherMessage(35)); // Output: "It's a hot day!"
console.log(weatherMessage(25)); // Output: "It's a pleasant day."
console.log(weatherMessage(5)); // Output: "It's cold outside!"

// Ternary operator example
function isAdult(age) {
  return age >= 18 ? "You are an adult" : "You are a minor";
}

console.log(isAdult(25)); // Output: "You are an adult"
console.log(isAdult(15)); // Output: "You are a minor"
