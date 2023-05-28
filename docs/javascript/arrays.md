---
sidebar_position: 6
---

# Arrays

## Creating and Manipulating Arrays
An array is a data structure that can store multiple elements in a single variable. You can create an array using square brackets and separating the elements with commas. To access the elements of an array, you can use their index (position). Here's an example:

```javascript
let fruits = ["apple", "banana", "orange"];
console.log(fruits[0]); // Access the first element of the array
fruits[1] = "pear"; // Modify an element of the array
```

## Array Methods (push, pop, shift, unshift, etc.)
JavaScript provides a variety of built-in methods to manipulate arrays. For example, the "push" method allows you to add elements to the end of the array, while the "pop" method removes the last element. Other methods like "shift" and "unshift" add and remove elements at the beginning of the array. Here's an example:

```javascript
let fruits = ["apple", "banana", "orange"];
fruits.push("pear"); // Add an element to the end
fruits.pop(); // Remove the last element
fruits.shift(); // Remove the first element
fruits.unshift("watermelon"); // Add an element to the beginning
```

## Iterating Over Arrays (Loops, forEach, map, filter, reduce, etc.)
You can iterate over the elements of an array using loops like "for" or "while."

Additionally, JavaScript provides array methods like "forEach," "map," "filter," and "reduce" to facilitate the manipulation and transformation of array elements. Here's an example:

```javascript
let numbers = [1, 2, 3, 4, 5];

// "for" loop to iterate over the array
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// "forEach" method to iterate over the array
numbers.forEach(function(number) {
  console.log(number);
});

// "map" method to transform the array elements
let doubledNumbers = numbers.map(function(number) {
  return number * 2;
});

console.log(doubledNumbers); // [2, 4, 6, 8, 10]
```