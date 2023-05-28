---
sidebar_position: 7
---

# DOM (Document Object Model)

## Introduction to the DOM
The DOM is a structured representation of an HTML/XML document that allows accessing and manipulating the elements of a web page using JavaScript. The DOM organizes the elements in a hierarchy of nodes, where each node represents an element, attribute, or text in the document. JavaScript can interact with the DOM to modify the content, style, and behavior of a web page.

## Manipulating HTML Elements with JavaScript
JavaScript allows accessing HTML elements in the DOM using methods like "getElementById," "getElementsByClassName," and "getElementsByTagName." Once an element is selected, you can change its content, attributes, styles, and more. Here's an example:

```html
<p id="myParagraph">Hello, I'm a paragraph.</p>
```

```javascript
let paragraph = document.getElementById("myParagraph"); // Get the element by its ID
paragraph.innerHTML = "Hello, I'm a new paragraph."; // Change the content of the element
paragraph.style.color = "red"; // Change the text color
```

## Events and Event Handling
Events are actions that occur on a web page, such as clicking a button or moving the mouse. JavaScript allows handling these events using methods like "addEventListener" or by directly assigning a function to an event property. You can perform specific actions when an event occurs, such as calling a function or modifying the page

's content. Here's an example:

```html
<button id="myButton">Click Me</button>
```

```javascript
let button = document.getElementById("myButton"); // Get the button by its ID
button.addEventListener("click", function() {
  console.log("You clicked the button!");
});
```

## Modifying the Content and Style of Web Pages
JavaScript allows you to modify the content and style of a web page through the DOM. You can change the text of an element, add or remove elements, change CSS classes, hide or show elements, and more. Here's an example:

```html
<p id="myParagraph">Hello, I'm a paragraph.</p>
```

```javascript
let paragraph = document.getElementById("myParagraph"); // Get the paragraph by its ID
paragraph.textContent = "Hello, I'm a new paragraph."; // Change the text of the paragraph
paragraph.classList.add("highlight"); // Add a CSS class
paragraph.style.fontSize = "20px"; // Change the font size
```
