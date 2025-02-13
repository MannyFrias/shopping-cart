// JavaScript Exercises: `splice()` Method

// Exercise 1: Removing an Element with `splice()`
const fruits = ["Apple", "Banana", "Cherry", "Mango"];
// How would you remove "Cherry" from the array using `splice()`?

fruits.splice(2, 1);

console.log("1.", fruits);

// Exercise 2: Removing Multiple Elements with `splice()`
let numbers = [10, 20, 30, 40, 50, 60];
// How would you remove 30 and 40 from the array using `splice()`?
numbers.splice(2, 2);

console.log("2.", numbers);

// Exercise 3: Adding Elements with `splice()`
let colors = ["Red", "Green", "Blue"];
// How would you add "Yellow" between "Red" and "Green" using `splice()`?
colors.splice(1, 0, "Yellow");
console.log("3.", colors);

// Exercise 4: Replacing Elements with `splice()`
let animals = ["Dog", "Cat", "Rabbit"];
// How would you replace "Cat" with "Elephant" using `splice()`?

animals.splice(1, 1, "Elephant");

console.log("4.", animals);

// Exercise 5: Removing the First Element with `splice()`
let months = ["January", "February", "March", "April"];
// How would you remove the first element from the array using `splice()`?
months.splice(0, 1);
console.log("5.", months);

// Exercise 6: Removing the Last Element with `splice()`
let scores = [90, 80, 70, 60];
// How would you remove the last element from the array using `splice()`?
scores.splice(scores.length - 1, 1);
console.log("6.", scores);

// Exercise 7: Inserting Multiple Elements with `splice()`
let items = ["Pen", "Pencil", "Eraser"];
// How would you insert "Notebook" and "Marker" between "Pen" and "Pencil" using `splice()`?
items.splice(1, 0, "Notebook", "Marker");
console.log("7.", items);

// Exercise 8: Clearing an Array with `splice()`
let letters = ["A", "B", "C", "D"];
// How would you clear all elements from the array using `splice()`?

const clonedLetters = [...letters];

clonedLetters.splice(0, clonedLetters.length);

console.log("8.", letters);
console.log(clonedLetters);
