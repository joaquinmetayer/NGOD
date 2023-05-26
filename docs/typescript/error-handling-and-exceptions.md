---
sidebar_position: 10
---

# Error Handling and Exceptions

Error handling and exceptions in TypeScript allow you to control and manage unexpected situations or errors that may occur during program execution. Here's how to handle errors and exceptions.

## Using try-catch to handle errors
The `try-catch` block is used to catch and handle specific errors. The code that may throw an exception is placed inside the `try` block, and if an exception occurs, it is caught in the corresponding `catch` block. For example:
```typescript
try {
  // Code that may throw an exception
  throw new Error("An error has occurred!");
} catch (error) {
  // Handling the caught error
  console.error("Caught error:", error.message);
}
```

## Defining custom errors
In TS, you can define custom errors by creating classes that extend the `Error` class or any other base exception class. This allows you to create specific errors with additional information. For example:
```typescript
class CustomError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "CustomError";
  }
}

try {
  throw new CustomError("Custom error!");
} catch (error) {
  console.error("Caught error:", error.name, error.message);
}
```

## Using try-catch-finally
In addition to the `try` and `catch` blocks, you can use the optional `finally` block to specify code that will execute regardless of whether an exception occurs or not. The `finally` block is used for cleanup actions or resource releasing. For example:
```typescript
try {
  // Code that may throw an exception
} catch (error) {
  // Handling the caught error
} finally {
  // Code that always executes
}
```

## Throwing and catching exceptions
In TS, you can throw an exception using the `throw` keyword followed by an error object or an instance of an error class. These exceptions can be caught and handled using `try-catch` blocks or propagated up the call stack until they are caught in an appropriate `catch` block. For example:
```typescript
function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Division by zero!");
  }
  return a / b;
}

try {
  const result = divide(10, 0);
  console.log("Result:", result);
} catch (error) {
  console.error("Caught error:", error.message);
}
```

Proper error handling and exception management in TypeScript allow you to control and recover from unexpected situations, improving the robustness and reliability of your code. You can use the `try-catch` syntax to catch and handle specific errors, define custom errors to provide additional information, and use the `finally` block to perform cleanup actions. Additionally, you can throw exceptions using the `throw` keyword and catch them in `try-catch` blocks for more precise handling.
