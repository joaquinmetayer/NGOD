---
sidebar_position: 5
---

# Classes and Inheritance

Classes are object constructors that allow you to define the structure and behavior of a set of related objects. The following concepts related to classes and inheritance in TypeScript are explained.

## Creating classes in TypeScript
The `class` keyword is used, followed by the class name and the curly braces `{}` that contain the class definition. For example:
  ```typescript
  class Person {
    // Properties
    name: string;
    age: number;

    // Constructor
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }

    // Methods
    sayHello() {
      console.log("Hello, my name is " + this.name + "!");
    }
  }
  ```

## Properties and methods
Classes can have properties that represent data and methods that define the behavior of objects created from the class. Properties are declared within the class and accessed using dot notation (`this.propertyName`). Methods are defined inside the class and can access the properties and other methods of the class using `this`.

## Class inheritance
It is possible to create classes that inherit properties and methods from other classes using the `extends` keyword. The child class inherits all the properties and methods of the parent class and can add new properties and methods or override existing ones. For example:
  ```typescript
  class Student extends Person {
    studentId: number;

    constructor(name: string, age: number, studentId: number) {
      super(name, age); // Call to parent class constructor
      this.studentId = studentId;
    }

    study() {
      console.log("Studying...");
    }
  }
  ```

## Access modifiers
Provides three access modifiers for class properties and methods:
  - public (default): Properties and methods are accessible from anywhere.
  - private: Properties and methods are only accessible from within the class they are defined in.
  - protected: Properties and methods are accessible from the class they are defined in and from inheriting child classes.

## Static methods and properties
Static methods and properties belong to the class itself, rather than to individual instances of the class. They can be accessed directly from the class without needing to create an instance of the class. To define a static method or static property, the `static` keyword is used. For example:
  ```typescript
  class MathUtils {
    static PI: number = 3.14;

    static calculateArea(radius: number): number {
      return MathUtils.PI * radius * radius;
    }
  }

  console.log(MathUtils.calculateArea(5)); // Output: 78.5
  ```

These concepts will allow you to work with classes and inheritance in TypeScript, which is essential for creating objects with more complex structures and behaviors, as well as code reusability.
