---
sidebar_position: 9
---

# Asynchronous Programming

## Callbacks
A callback is a function that is passed as an argument to another function and is executed after an asynchronous operation is completed. Callbacks are used to handle asynchrony in JavaScript and ensure that certain code is executed at the appropriate time. Here's an example of a callback in a timer function:

```javascript
function delay(callback, milliseconds) {
  setTimeout(callback, milliseconds);
}

function sayHello() {
  console.log("Hello, world!");
}

delay(sayHello, 2000); // Call sayHello after 2 seconds
```

## Promises
Promises are objects that represent the eventual completion (or failure) of an asynchronous operation and allow for writing more readable and structured code. A promise can be in one of three states: pending, fulfilled, or rejected. The `then` method is used to handle the successful resolution of a promise, and the `catch` method is used to handle an error. Here's an example of a promise simulating an HTTP request:

```javascript
let promise = new Promise(function(resolve, reject) {
  setTimeout(function() {
    if (Math.random() < 0.5) {
      resolve("Success"); // Promise fulfilled
    } else {
      reject("Error"); // Promise rejected
    }
  }, 2000);
});

promise.then(function(result) {
  console.log("Promise fulfilled: " + result);
}).catch(function(error) {
  console.log("Promise rejected: " + error);
});
```

## Async/await
Using async/await is a more modern and readable way to write asynchronous code in JavaScript. It allows writing code that appears synchronous but is actually asynchronous. The `async` keyword is used to declare an asynchronous function, and `await` is used to wait for a promise to fulfill before continuing the code execution. Here's an example of an async function using await:

```javascript
function delay(milliseconds) {
  return new Promise(function(resolve) {
    setTimeout(resolve, milliseconds);
  });
}

async function main() {
  console.log("Start");
  await delay(2000);
  console.log("End");
}

main();
```

