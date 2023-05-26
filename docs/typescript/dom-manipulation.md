---
sidebar_position: 16
---

# DOM Manipulation

DOM (Document Object Model) manipulation in TypeScript involves interacting with HTML elements of a web page. This includes selecting elements, manipulating their content, styles, and attributes, as well as handling events. Here are the explanations of these concepts.

## Selecting DOM elements
To select DOM elements, methods like `getElementById`, `getElementsByClassName`, `getElementsByTagName`, or `querySelector` can be used, which return a reference to one or multiple elements. For example:
  ```typescript
  const element = document.getElementById("myElement");
  const elements = document.getElementsByClassName("myClass");
  const elementList = document.querySelectorAll("div");
  ```

## Manipulating elements, styles, and attributes
Once elements are selected, they can be manipulated using various properties and methods. Some common operations include:

  - Modifying element content: The content of an element can be accessed using the `textContent` or `innerHTML` property and modified as needed.
  - Changing styles and classes: The style properties of an element can be accessed using the `style` property, and their values can be changed to alter the appearance. Classes can also be added or removed using the `classList` property and the `add`, `remove`, and `toggle` methods.
  - Modifying attributes: The attributes of an element can be accessed and modified using the element's properties. For example, `element.getAttribute("name")` to get the value of an attribute and `element.setAttribute("name", "value")` to set a new value.

## Events and event handling
Events allow responding to user interactions with DOM elements. To handle events, the `addEventListener` and `removeEventListener` methods can be used to attach event handler functions to an element and detach them when necessary. For example:
  ```typescript
  const button = document.getElementById("myButton");

  button.addEventListener("click", (event) => {
    // Handle click event
    console.log("Button clicked!");
  });

  button.removeEventListener("click", handlerFunction);
  ```

  Additionally, TypeScript allows specifying event types and properties in event handlers, providing autocomplete and type checking during development.

DOM manipulation in TypeScript is essential for interacting with HTML elements and responding to user interactions. By selecting elements, modifying their content, styles, and

 attributes, and handling events, an interactive and dynamic experience can be created on a web page.
