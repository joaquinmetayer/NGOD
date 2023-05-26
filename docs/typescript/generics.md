---
sidebar_position: 7
---

# Generics

Generics in TypeScript are a feature that allows you to create reusable components that can work with different types of data. They provide a way to parameterize types in functions, classes, and interfaces. The following explains what generics are, why they are useful, and their usage in different contexts.

## What are generics and why are they useful?
Generics are a tool that enables writing flexible and reusable code, independent of the data type it works with. They allow creating components that can accept different types of data as arguments, parameters, or results without having to repeat or duplicate code. This facilitates the creation of abstractions and increases code flexibility and safety.

## Using generics in functions
Generics can be used in function definitions to make them more flexible and reusable. Generics are declared between `<>` after the function name. For example:
  ```typescript
  function printArray<T>(array: T[]): void {
    for (let item of array) {
      console.log(item);
    }
  }

  printArray<number>([1, 2, 3, 4, 5]); // Prints the numbers in the array
  printArray<string>(["Hello", "World"]); // Prints the strings in the array
  ```

## Using generics in classes
Generics can also be used in class definitions to parameterize types. This allows creating classes that can work with different types of data. For example:
  ```typescript
  class Queue<T> {
    private items: T[] = [];

    enqueue(item: T): void {
      this.items.push(item);
    }

    dequeue(): T | undefined {
      return this.items.shift();
    }
  }

  const numberQueue = new Queue<number>();
  numberQueue.enqueue(1);
  numberQueue.enqueue(2);
  const firstNumber = numberQueue.dequeue(); // Returns 1

  const stringQueue = new Queue<string>();
  stringQueue.enqueue("Hello");
  stringQueue.enqueue("World");
  const firstString = stringQueue.dequeue(); // Returns "Hello"
  ```

## Constraints on generics
Sometimes, you may need to apply constraints to the types that can be used in generics. This is achieved by using the `extends` keyword followed by a type or an intersection of allowed types. For example:
  ```typescript
  interface Lengthy {
    length: number;
  }

  function getLength<T extends Lengthy>(item: T): number {
    return item.length;
  }

  const arrayLength = getLength([1, 2, 3]); // Returns 3
  const stringLength = getLength("Hello"); // Returns 5
  ```

  In this example, a constraint is defined for the generic `T` using the `Lengthy` interface, which specifies that the type `T` must have a `length` property of type `number`.

Generics in TypeScript provide a powerful way to write flexible and reusable code, allowing you to work with different types of data safely and efficiently.
