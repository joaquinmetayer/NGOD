---
sidebar_position: 8
---

# Decorators

Decorators in TypeScript are a feature that allows modifying or adding functionalities to classes, methods, properties, and parameters. Decorators are defined using a special syntax using the `@` symbol followed by an identifier or a function that represents the decorator. The following explains what decorators are and how they are used in different contexts.

## Introduction to decorators
Decorators are a way to modify or add behavior to a class, method, property, or parameter without modifying its original definition. Decorators are executed at runtime and allow extending or customizing the behavior of the decorated elements. This is especially useful in scenarios such as annotation, validation, logging, dependency injection, among others.

## Creating and using decorators
To create a decorator, you define a function or a class that takes the element to be decorated as a parameter. Decorators are applied using the `@DecoratorName` syntax just before the element you want to decorate. For example:
  ```typescript
  function log(target: any) {
    console.log("Decorated class: ", target);
  }

  @log
  class MyClass {
    // ...
  }
  ```

## Class decorators
Class decorators are applied to the class definition and can modify its behavior or perform additional actions at runtime. They can receive the class constructor as a parameter and modify or wrap it. For example:
  ```typescript
  function log(target: any) {
    console.log("Decorated class: ", target);
  }

  @log
  class MyClass {
    // ...
  }
  ```

## Method decorators
Method decorators are applied to the methods of a class and allow modifying their behavior or performing additional actions before or after their execution. They can receive parameters such as the class to which the method belongs, the name of the method, and the method descriptor. For example:
  ```typescript
  function log(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log("Decorated method: ", name);
  }

  class MyClass {
    @log
    myMethod() {
      // ...
    }
  }
  ```

## Property decorators
Property decorators are applied to the properties of a class and allow modifying their behavior or performing additional actions when they are accessed or assigned a value. They can receive parameters such as the class to which the property belongs and the name of the property. For example:
  ```typescript
  function uppercase(target: any, name: string) {
    let value = target[name];

    const getter = () => value;
    const setter = (newValue: string) => {
      value = newValue.toUpperCase();
    };

    Object.defineProperty(target, name, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true,
    });
  }

  class MyClass {
    @uppercase
    myProperty: string;
  }
  ```

## Parameter decorators
Parameter decorators are applied to the parameters of a method or function and allow modifying their behavior or performing additional actions before their use. They can receive parameters such as the class to which the method belongs, the name of the method, and the index of the parameter. For example:
  ```typescript
  function validate(target: any, name: string, index: number) {
    console.log("Validated parameter: ", index);
  }

  class MyClass {
    myMethod(@validate param: string) {
      // ...
    }
  }
  ```

Decorators in TypeScript are a powerful tool to extend and customize the behavior of classes, methods, properties, and parameters. They allow adding additional functionalities and performing special actions at runtime without modifying the original definition of the decorated elements.

