---
sidebar_position: 2
---

# Data Types and Variables

In TypeScript, data types allow you to specify what type of values a variable can hold. The following concepts related to data types and variables are explained.

## Basic types in TypeScript
TypeScript provides several basic data types, including:
- number: to represent numbers, both integers and floating-point numbers.
- string: to represent text strings.
- boolean: to represent boolean values (true or false).
- null: to represent the intentional absence of any object.
- undefined: to represent the absence of a value or when a variable hasn't been initialized.
  
## Variable declaration and type assignment
In TypeScript, you can declare a variable using the `let` or `const` keyword, followed by the variable name, and optionally assign a type using the colon (:). For example:
  ```typescript
  let age: number;
  let name: string = "John";
  const isActive: boolean = true;
  ```

## Type inference
TypeScript has the ability to automatically infer variable types based on the value assigned to them. This means that it's not always necessary to explicitly specify the type of a variable. For example:
  ```typescript
  let age = 25; // TypeScript infers that age is of type number.
  let name = "John"; // TypeScript infers that name is of type string.
  ```

## Explicit type annotations
In addition to type inference, it's possible to explicitly specify the type of a variable using type annotations. This is done by adding the desired type after the variable name, separated by a colon. For example:
  ```typescript
  let age: number = 25;
  let name: string = "John";
  ```

  Explicit type annotations are useful in situations where type inference is not sufficient or when you want to provide additional information to other developers about the expected type of a variable.

These concepts will allow you to work with variables and data types in TypeScript, which is essential for writing clear, readable, and type-safe code.
