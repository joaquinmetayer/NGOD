---
sidebar_position: 4
---

# Objects

## Introduction to Objects
An object in JavaScript is an entity that has properties and methods. Properties are variables that hold values, and methods are functions that perform actions on the object. You can access the properties and methods of an object using dot notation. Here's an example:

```javascript
let person = {
  name: "John",
  age: 25,
  greet: function() {
    console.log("Hello, my name is " + this.name + ".");
  }
};

console.log(person.name); // Access the "name" property
person.greet(); // Call the "greet" method
```

## Properties and Methods
Properties are the values associated with an object, while methods are functions associated with the object. You can access properties and methods using dot notation. For example:

```javascript
let car = {
  brand: "Toyota",
  color: "blue",
  startEngine: function() {
    console.log("Starting the engine...");
  }
};
console.log(car.brand); // Access the "brand" property
car.startEngine(); // Call the "startEngine" method
```

## Using Predefined Objects (like Date, Math, etc.)
JavaScript provides predefined objects that contain useful properties and methods. For example, the "Date" object allows you to work with dates and times, while the "Math" object provides mathematical functions. Here's an example:

```javascript
let today = new Date();
console.log(today.getFullYear()); // Get the current year

let randomNumber = Math.random();
console.log(randomNumber); // Get a random number between 0 and 1


```

## Creating Custom Objects
In addition to predefined objects, you can create your own custom objects in JavaScript. You can define properties and methods within an object to represent real-world entities or abstract concepts. Here's an example:

```javascript
let person = {
  name: "John",
  age: 25,
  greet: function() {
    console.log("Hello, my name is " + this.name + ".");
  }
};
let dog = {
  name: "Buddy",
  breed: "Labrador",
  bark: function() {
    console.log("Woof woof!");
  }
};

person.greet(); // Call the "greet" method of the "person" object
dog.bark(); // Call the "bark" method of the "dog" object
```