---
sidebar_position: 3
---

# Fundamentals

## Variables and Data Types
JavaScript uses variables to store values. You can declare a variable using the keywords "var," "let," or "const," followed by the variable name. Data types in JavaScript include numbers, strings, booleans, objects, arrays, and more. Here's an example:

```javascript
let age = 25; // numeric variable
let name = "John"; // string variable
let isStudent = true; // boolean variable
```

## Operators and Expressions
JavaScript has a variety of operators for performing arithmetic, assignment, comparison, and logical operations. Expressions combine variables, values, and operators to produce a new value. For example:

```javascript
let x = 10;
let y = 5;
let sum = x + y; // addition operator
let isGreater = x > y; // comparison operator
```

## Control Structures (Conditionals and Loops)
Control structures allow you to control the flow of execution in a program. JavaScript has conditionals like "if," "else if," and "else" to make decisions based on conditions. It also has loops like "for," "while," and "do-while" to repeat blocks of code. Here's an example:

```javascript
let age = 18;
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

## Functions and Their Usage
Functions allow you to group a set of statements into a reusable block. You can declare functions using the "function" keyword, followed by the function name and parameters (if any). Functions can take input values, perform calculations, and return a result. Here's an example:

```javascript
function greet(name) {
  console.log("Hello, " + name + "!");
}
greet("John"); // Function call: prints "Hello, John!"
```