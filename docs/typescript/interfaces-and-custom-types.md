---
sidebar_position: 4
---

# Interfaces and Custom Types

Interfaces and custom types are tools that allow you to define data structures and specify the types of their properties. The following concepts related to interfaces and custom types in TypeScript are explained.

## Creation and usage of interfaces
Interfaces in TypeScript define the structure of an object and specify the types of its properties. Interfaces can be declared using the `interface` keyword, followed by the name of the interface and the properties that the object implementing the interface should have. For example:
  ```typescript
  interface Person {
    name: string;
    age: number;
  }
  ```

  Once an interface is defined, it can be used to specify the type of a variable, function parameter, or the return type of a function. For example:
  ```typescript
  function greet(person: Person): void {
    console.log("Hello, " + person.name + "!");
  }
  ```

## Optional and readonly properties
In interfaces, it is possible to declare optional properties using the `?` operator after the property name. This indicates that the property is optional and may or may not be present in the object implementing the interface. For example:
  ```typescript
  interface Person {
    name: string;
    age?: number; // Optional property
  }
  ```

  It is also possible to declare readonly properties using the `readonly` modifier before the property name. This indicates that the property can only be read and cannot be modified after initialization. For example:
  ```typescript
  interface Point {
    readonly x: number;
    readonly y: number;
  }
  ```

## Extension and implementation of interfaces
Can be extended using the `extends` keyword, which allows creating a new interface that inherits the properties of an existing interface. For example:
  ```typescript
  interface Animal {
    name: string;
  }

  interface Dog extends Animal {
    breed: string;
  }
  ```

  In addition to interface extension, interfaces can also be implemented in classes using the `implements` keyword. This ensures that the class complies with the properties and methods defined in the interface. For example:
  ```typescript
  interface Printable {
    print(): void;
  }

  class Document implements Printable {
    print(): void {
      console.log("Printing document...");
    }
  }
  ```

## Defining custom types with type
In addition to interfaces, TypeScript allows defining custom types using the `type` keyword. Custom types are useful when you need to define combinations of types, unions, or aliases for existing types. For example:
  ```typescript
  type ID = string | number;

  type User = {
    id: ID;
    name: string;
  };
  ```

  In the above example, `ID` is a custom type that represents either a string or a number, and `User` is a custom type that defines the `id` and `name` properties.

These concepts will allow you to work with interfaces and custom types in TypeScript, which is essential for defining data structures, specifying types, and improving code readability and reusability.
