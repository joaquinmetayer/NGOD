---
sidebar_position: 3
---

# Functions

In TypeScript, functions are blocks of code that can be called and executed to perform a specific task. The following concepts related to functions in TypeScript are explained.

## Function declaration and usage
To declare a function in TypeScript, the `function` keyword is used, followed by the function name and parentheses that can contain the function's parameters. The body of the function is then defined using curly braces `{}`. For example:
  ```typescript
  function greet(name: string): void {
    console.log("Hello, " + name + "!");
  }
  ```

  To call a function, its name is used followed by parentheses that can contain the necessary arguments. For example:
  ```typescript
  greet("John"); // Output: Hello, John!
  ```

## Parameter types and return values
You can specify the types of a function's parameters and the type of the return value. For example:
  ```typescript
  function addNumbers(a: number, b: number): number {
    return a + b;
  }
  ```

  In the above example, the `addNumbers` function takes two parameters of type number and returns a value of type number.

## Arrow functions
Also supports arrow functions, which are a more concise way to define functions. Instead of using the `function` keyword, arrow syntax (`=>`) is used. For example:
  ```typescript
  const multiply = (a: number, b: number): number => {
    return a * b;
  };
  ```

  Arrow functions are especially useful when you need to maintain the lexical context of `this`.

## Optional and default parameters
You can declare optional parameters and parameters with default values in a function. Optional parameters are defined using the `?` operator after the parameter name, indicating that they can be omitted when calling the function. For example:
  ```typescript
  function greet(name?: string): void {
    console.log("Hello" + (name ? ", " + name : "") + "!");
  }
  ```

  Parameters with default values are assigned a default value if no value is provided when calling the function. For example:
  ```typescript
  function greet(name: string = "Guest"): void {
    console.log("Hello, " + name + "!");
  }
  ```

  In this case, if no value is provided for `name`, the default value "Guest" will be used.

These concepts will allow you to work with functions in TypeScript, allowing you to define parameters, return values, and use functions in a more flexible and convenient way.
