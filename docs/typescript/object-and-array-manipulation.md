---
sidebar_position: 11
---

# Object and Array Manipulation

Object and array manipulation in TS is essential for working with data and performing operations on them. Here are some concepts related to object and array manipulation.

## Object methods and properties
Objects in TS have properties and methods that allow you to access and manipulate their values. Some common methods and properties include:

  - `Object.keys(obj)`: Returns an array with the keys of the enumerable properties of an object.
  - `Object.values(obj)`: Returns an array with the values of the enumerable properties of an object.
  - `Object.entries(obj)`: Returns an array of arrays with the keys and values of the enumerable properties of an object.
  - `Object.assign(target, source)`: Copies the properties of one or more source objects into a target object.
 

 - `Object.hasOwnProperty(prop)`: Returns a boolean value indicating whether an object has a own property with the specified key.
  - `obj.property`: Accesses the property of the object with the specified key.

## Common operations on arrays
Arrays have various methods that allow you to perform common manipulation and transformation operations. Some of them include:

  - `array.push(element)`: Adds an element to the end of the array.
  - `array.pop()`: Removes and returns the last element of the array.
  - `array.shift()`: Removes and returns the first element of the array.
  - `array.unshift(element)`: Adds one or more elements to the beginning of the array.
  - `array.splice(start, deleteCount, ...items)`: Changes the contents of an array by removing, replacing, or adding elements.
  - `array.slice(start, end)`: Returns a shallow copy of a portion of the array from the `start` index to the `end` index.
  - `array.concat(...items)`: Combines two or more arrays and returns a new array.
  - `array.filter(callback)`: Creates a new array with all elements that pass the condition specified by the callback function.
  - `array.map(callback)`: Creates a new array with the results of applying a callback function to each element of the array.

## Iterators and generators
Iterators and generators are features that allow you to sequentially iterate over and manipulate elements. An iterator is an object that defines a `next()` method that returns an object with the `value` and `done` properties, indicating the current value and whether the iteration has finished. A generator, on the other hand, is a special function that returns an iterator and can pause and resume its execution. For example:
```typescript
const numbers = [1, 2, 3, 4, 5];

// Iterator
const iterator = numbers[Symbol.iterator]();
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: 4, done: false }
console.log(iterator.next()); // { value: 5, done: false }
console.log(iterator.next()); // { value: undefined, done: true }

// Generator
function* generateNumbers() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}

const generator = generateNumbers();
console.log(generator.next()); // { value: 1, done: false }
console.log(generator.next()); // { value: 2, done: false }
console.log(generator.next()); // { value: 3, done: false }
console.log(generator.next()); // { value: 4, done: false }
console.log(generator.next()); // { value: 5, done: false }
console.log(generator.next()); // { value: undefined, done: true }
```

These are just some concepts related to object and array manipulation in TypeScript. Object methods and properties allow you to access and manipulate their values, while array methods facilitate manipulation and transformation operations. Iterators and generators allow you to sequentially iterate over and manipulate elements, providing flexibility in data processing.
