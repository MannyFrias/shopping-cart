// Exercise 1: Basic `push()`
let cars = [];
// Add three car brands to the `cars` array using `push()`
// cars.push("Toyota");
// cars.push("Honda");
// cars.push("Ford");

// cars.push("Toyota", "Honda", "Ford");
const carsToPush = ["Toyta", "Honda", "Ford"];
// for (let i = 0; i < carsToPush.length; i++) cars.push(carsToPush[i]);
cars.push(...carsToPush);
console.log("1.", cars); // Expected output: ["Toyota", "Honda", "Ford"]

// Exercise 2: Using `push()` to Add Multiple Elements
const cities = ["New York", "Los Angeles"];
// Add three more cities to the `cities` array using `push()`
cities.push("Chicago", "Houston", "Phoenix");
console.log("2.", cities); // Expected output: ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"]

// Exercise 3: Pushing Elements in a Loop
let numbers = [];

// Use a loop to push numbers 1 to 5 into the `numbers` array
for (let i = 1; i < 6; i++) {
  numbers.push(i);
}
console.log("3.", numbers); // Expected output: [1, 2, 3, 4, 5]

// Exercise 4: Using `push()` with Objects
let students = [];

const alice = {
  name: "Alice",
  age: 22,
};

const bob = {
  name: "Bob",
  age: 25,
};
students.push(alice, bob);
// Add two student objects to the `students` array using `push()`

console.log("4.", students); // Expected output: [{ name: "Alice", age: 22 }, { name: "Bob", age: 24 }]

// Exercise 5: Using `push()` with Arrays
let nestedArray = [];

// Add three arrays to the `nestedArray` using `push()`
const arr1 = [1, 2, 3];
const arr2 = ["a", "b", "c"];
const arr3 = [true, false, true];
nestedArray.push(arr1, arr2, arr3);

console.log("5.", nestedArray); // Expected output: [[1, 2, 3], ["a", "b", "c"], [true, false, true]]

// Exercise 6: Using `push()` with Conditional Statements
let evenNumbers = [];

// Use a loop and conditional statement to push even numbers from 1 to 10 into the `evenNumbers` array

function isEven(n) {
  return !(n % 2);
}

for (let i = 0; i < 10; i++) {
  const num = i + 1;
  if (isEven(num)) {
    evenNumbers.push(num);
  }
}

console.log("6.", evenNumbers); // Expected output: [2, 4, 6, 8, 10]

// Exercise 7: Using `push()` to Merge Arrays
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

// Use a loop to push elements from `array2` into `array1`

array1.push(...array2);

console.log("7.", array1); // Expected output: [1, 2, 3, 4, 5, 6]

// Exercise 8: Using `push()` with User Input (Prompt)
let userInputs = [];

// Use a loop to prompt the user for input three times and push the input into the `userInputs` array

for (let i = 0; i < 3; i++) {
  const input = document.createElement("input");
  document.body.appendChild(input);
}

const b = document.createElement("button");
b.addEventListener("click", function () {
  const qAll = document.querySelectorAll("input");
  for (let i = 0; i < qAll.length; i++) {
    userInputs.push(qAll[0].value);
  }

  console.log("userInputs =", userInputs);
});

document.body.appendChild(b);
