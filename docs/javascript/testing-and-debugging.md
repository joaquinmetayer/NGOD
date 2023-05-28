---
sidebar_position: 12
---

# Testing and Debugging

## Debugging Tools
Debugging tools are essential for identifying and resolving issues in code. Some common tools include using `console.log` to print values and messages to the browser console, breakpoints to pause code execution at a specific point and inspect variable values, and using the browser's built-in debugging tool, which provides more advanced features such as variable inspection, function call tracking, and more.

## Unit Testing
Unit testing is an automated testing approach that focuses on verifying that individual units of code (such as functions, methods, or components) work correctly. Jest and Mocha are popular unit testing frameworks in JavaScript. These tools allow writing test cases to verify that the units of code behave as expected. Here's an example of a unit test with Jest:

```javascript
function sum(a, b) {
  return a + b;
}

test('Correctly adds two numbers', () => {
  expect(sum(2, 3)).toBe(5);
});
```

## Debugging Common Errors
When developing in JavaScript, it's common to encounter errors in the code. Some common errors include syntax errors, references to non-existent or misspelled variables, scope-related issues, among others. Debugging errors involves identifying, understanding, and fixing these errors. The debugging tools mentioned earlier, such as console.log and breakpoints, are helpful for debugging and finding the cause of errors.