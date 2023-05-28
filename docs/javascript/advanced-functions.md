---
sidebar_position: 7
---

# Advanced Functions

## Closures and Scope
A closure is a function that has access to variables from its outer (enclosing) function, even after the outer function has finished executing. This allows creating functions that "remember" the scope in which they were created. Scope refers to the accessibility and visibility of variables in a particular context. Closures are useful for encapsulating data and creating reusable functions. Here's an example:

```javascript
function outerFunction() {
  let outerVariable = "Hello, ";

  function innerFunction(name) {
    console.log(outerVariable + name);
  }

  return innerFunction;
}

let greeting = outerFunction();
greeting("John"); // Prints "Hello, John"
```

## Anonymous Functions and Arrow Functions
Anonymous functions do not have a name and can be used in situations where only a temporary function is needed. Arrow functions are a more concise way to write functions in JavaScript and have a special behavior regarding the scope (this). Here are examples of both:

```javascript
// Anonymous function
let anonymousFunction = function() {
  console.log("I'm an anonymous function");
};

anonymousFunction();

// Arrow function
let arrowFunction = () => {
  console.log("I'm an arrow function");
};

arrowFunction();
```

## Recursion
Recursion is a technique where a function calls itself. It is used to solve problems that can be broken down into smaller, similar cases. A base case is necessary to prevent infinite recursion. Here's an example of a recursive function that calculates the factorial of a number:

```javascript
function factorial(n) {
  if (n === 0) {
    return 1; // Base case: factorial of 0 is 1
  } else {
    return n * factorial(n - 1); // Recursive call
  }
}

console.log(factorial(5)); // Calculates the factorial of 5 (5! = 120)
```

## Higher-Order Functions
Higher-order functions are functions that can accept other functions as arguments or return functions as results. This allows creating abstractions and writing more modular and flexible code. Some examples of higher-order functions in JavaScript are "map," "filter," and "reduce." Here's an example of using "map":

```javascript
let numbers = [1, 2, 3, 4, 5];

let doubledNumbers = numbers.map(function(number) {
  return number * 2;
});

console.log(doubledNumbers); // [2, 4, 6, 8, 10]
```