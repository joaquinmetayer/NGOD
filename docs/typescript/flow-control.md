---
sidebar_position: 12
---

# Flow Control

Flow control in TypeScript refers to the ability to control the execution flow of a program using conditional structures, loops, and control statements. The following are key concepts related to flow control.

## Conditional structures:
  - `if-else`: Allows executing a code block if a condition is true and another code block if it's false. For example:
    ```typescript
    if (condition) {
      // Code to execute if the condition is true
    } else {
      // Code to execute if the condition is false
    }
    ```

  - `switch`: Allows evaluating an expression and executing different code blocks based on the value of the expression. Each code block is defined using the `case` keyword, and the `default` keyword can be used to specify a code block that will execute if none of the cases match. For example:
    ```typescript
    switch (expression) {
      case value1:
        // Code to execute if the expression matches value1
        break;
      case value2:
        // Code to execute if the expression matches value2
        break;
      default:
        // Code to execute if the expression doesn't match any case
    }
    ```

## Loops
  - `for`: Allows executing a code block a specific number of times. It can be used to iterate over elements of an array or perform iterations based on a condition. For example:
    ```typescript
    for (let i = 0; i < array.length; i++) {
      // Code to execute in each iteration
    }
    ```

  - `while`: Allows executing a code block while a condition is true. The code block is executed before checking the condition. For example:
    ```typescript
    while (condition) {
      // Code to execute while the condition is true
    }
    ```

  - `do-while`: Similar to the `while` loop, but the code block is executed at least once before checking the condition. For example:
    ```typescript
    do {
      // Code to execute at least once
    } while (condition);
    ```

## Control statements
  - `break`: Used to exit a loop or conditional structure before it's completed. When the `break` keyword is encountered, control passes to the code that comes after the loop or conditional structure. For example:
    ```typescript
    for (let i = 0; i < array.length; i++) {
      if (condition) {
        break; // Exit the loop if the condition is true
      }
      // Code to execute in each iteration if the condition is not true
    }
    ```

  - `continue`: Used to skip to the next iteration of a loop without executing the remaining code inside the loop for that particular iteration. For example:
    ```typescript
    for (let i = 0; i < array.length; i++) {
      if (condition) {
        continue; // Skip to the next iteration if the condition is true
      }
      // Code to execute in each iteration if the condition is not true
    }
    ```

  - `return`: Used to terminate the execution of a function and optionally return a value. When the `return` keyword is encountered, control is passed back to the calling point of the function. For example:
    ```typescript
    function sum(a: number, b: number): number {
      return a + b; // Finish the function and return the sum result
    }
    ```

These are some of the main structures and statements used for controlling the flow of execution in TypeScript. They allow making decisions based on conditions, repeating code blocks, and controlling the behavior of the program in different situations.
