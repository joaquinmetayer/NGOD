---
sidebar_position: 15
---

# Promises and Async/Await

In TypeScript, promises and the async/await syntax are tools for handling asynchronous operations in a more readable and easier-to-understand manner. Here are the explanations of these concepts.

## Using promises to handle asynchronous operations
A promise is an object that represents the completion or failure of an asynchronous operation and can return a resulting value. It allows performing asynchronous tasks in a more organized and controlled manner. A promise can have three possible states: "pending," "fulfilled," or "rejected."

  To use a promise, the `.then()` and `.catch()` syntax is used to handle the results and errors, respectively. For example:
  ```typescript
  const promise = new Promise((resolve, reject) => {
    // Simulating an asynchronous operation
    setTimeout(() => {
      const success = true;

      if (success) {
        resolve("Operation successful");
      } else {
        reject("Error in operation");
      }
    }, 2000);
  });

  promise
    .then((result) => {
      console.log(result); // Operation successful
    })
    .catch((error) => {
      console.error(error); // Error in operation
    });
  ```

## Async/await syntax
The async/await syntax provides a more concise way to handle asynchronous operations using promises. It allows writing asynchronous code in a similar

 way to synchronous code, which improves code readability and maintainability.

  The `async` keyword is placed before a function to indicate that the function returns a promise. Inside the `async` function, the `await` keyword is used to wait for a promise to resolve or reject before continuing with the code execution. For example:
  ```typescript
  function delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function asyncExample() {
    console.log("Start");

    await delay(2000); // Wait for 2 seconds

    console.log("End");
  }

  asyncExample();
  ```

## Error handling in promises
To handle errors in promises, the `.catch()` method or try-catch syntax is used around an `async` function. If a promise is rejected, control is transferred to the catch block or an exception is thrown in the `async` function, which can be caught and handled using the catch block.

  For example, using try-catch syntax with async/await:
  ```typescript
  async function asyncExample() {
    try {
      const result = await promise;
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }
  ```

Promises and the async/await syntax are powerful tools for handling asynchronous operations in a clearer and more readable way in TypeScript. They allow avoiding excessive callback nesting and facilitate error handling in asynchronous operations.
