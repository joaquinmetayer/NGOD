---
sidebar_position: 5
---

# Classes

## Introduction to Classes in JavaScript
Classes are a way to create objects with properties and methods. They provide a clearer and structured syntax for defining and creating objects. A class is a template that defines the common characteristics that objects created from it will have.

## Creating Classes and Objects
To create a class, we use the `class` keyword followed by the class name. Inside the class, we define properties and methods using function syntax.

To create objects from a class, we use the `new` keyword followed by the class name, followed by parentheses. This invokes the class constructor and returns an instance of the object.

Example:

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, I'm ${this.name}`);
  }
}

const person1 = new Person("John", 25);
console.log(person1.name); // John
person1.greet(); // Hello, I'm John
```

## Class Methods and Static Methods
Class methods are functions defined in the class and are available on instances of the class. They can access the properties and other methods of the instance using the `this` keyword.

Static methods are functions defined in the class but are not associated with instances of the class. They are called on the class itself and cannot access the properties of instances. They are used for functionality related to the class itself, rather than individual objects.

Example:

```javascript
class Calculator {
  static add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }
}

console.log(Calculator.add(2, 3)); // 5

const calc = new Calculator();
console.log(calc.subtract(5, 3)); // 2
```

## Inheritance and Polymorphism
Inheritance allows a class to inherit properties and methods from another class. A child class can extend a parent class using the `extends` keyword.

Polymorphism is achieved by overriding inherited methods from the parent class in the child class. This allows objects of different classes to behave similarly but with specific implementations for each class. 

Example:

```javascript
class Animal {
  speak() {
    console.log("Makes some sound.");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Woof, woof!");
  }
}

class Cat extends Animal {
  speak() {
    console.log("Meow, meow!");
  }
}

const dog = new Dog();
dog.speak(); // Woof, woof!

const cat = new Cat();
cat.speak(); // Meow, meow!
```

In summary, classes and constructors allow you to define and create objects with properties and methods. You can use class methods and static methods to provide functionality related to the class. Additionally, you can achieve inheritance and polymorphism by extending existing classes. The provided examples illustrate how to use these features in practice.