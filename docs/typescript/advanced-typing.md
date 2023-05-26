---
sidebar_position: 9
---

# Advanced Typing

Advanced typing in TypeScript refers to features that allow working with data types in a more sophisticated and expressive way. Here are some concepts related to advanced typing.

## Union Types and Intersection Types
Union Types allow defining a type that can be one of several possible types. They are represented using the `|` operator. For example, `string | number` represents a type that can be either a `string` or a `number`. On the other hand, Intersection Types allow combining multiple types into a single one. They are represented using the `&` operator. For example, `A & B` represents a type that has the properties of both types `A` and `B`.

## Type Guards and Type Predicates
Type Guards are expressions that allow checking and narrowing down the type of a variable in a conditional code block. They are used for type checks at runtime. Type Predicates are functions that return a boolean value and are used for more specific type checks. For example:
  ```typescript
  function isString(value: unknown): value is string {
    return typeof value === "string";
  }

  function processValue(value: unknown) {
    if (isString(value)) {
    // value is now treated as a string within this block
      console.log(value.toUpperCase());
    }
  }
  ```

## Type Aliases and Literal Types
Type Aliases allow creating alternative names for existing types. They are used to simplify and make the code more readable. For example:
  ```typescript
  type ID = string | number;

  function processID(id: ID) {
    // ...
  }

  const userID: ID = 123;
  ```

  On the other hand, Literal Types allow defining a type that can be a specific value. For example:
  ```typescript
  type Direction = "north" | "south" | "east" | "west";

  function move(direction: Direction) {
    // ...
  }

  move("north");
  ```

## Conditional Types and Distributive Types
Conditional Types allow defining types that depend on logical conditions. The `extends` keyword is used to set the condition. For example:
  ```typescript
  type ExtractNumbers<T> = T extends number ? T : never;

  type NumbersOnly = ExtractNumbers<number | string>; // number

  type Nullable<T> = T extends null | undefined ? T : never;

  type User = {
    name: string;
    age: number;
    address?: string;
  };

  type OptionalUser = Partial<User> & Nullable<User>; // User with all properties optional and nullable
  ```

  Distributive types allow applying type operations to each member of a union or intersection. For example:
  ```typescript
  type Partial<T> = { [K in keyof T]?: T[K] };
  type Readonly<T> = { readonly [K in keyof T]: T[K] };

  type Person = {
    name: string;
    age: number;
  };

  type ReadonlyPerson = Readonly<Person>; // { readonly name: string; readonly age: number; }
  type PartialPerson = Partial<Person>; // { name?: string; age?: number; }
  ```

These are just some of the concepts related to advanced typing in TypeScript. They allow working with data types in a more precise and expressive manner, improving code safety and quality.
