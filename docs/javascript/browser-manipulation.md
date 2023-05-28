---
sidebar_position: 10
---

# Browser Manipulation

## Manipulating Browser History
JavaScript provides methods for manipulating the browser history, such as `history.back()` to go back to the previous page, `history.forward()` to go forward to the next page, and `history.pushState()` to add an entry to the history without reloading the page. These methods allow creating single-page applications (SPAs) and navigating between different states without fully reloading the page.

## Local Storage (localStorage, sessionStorage)
Local storage allows storing data in the web browser persistently. JavaScript provides two objects for accessing local storage: `localStorage` and `sessionStorage`. `localStorage` stores data permanently, while `sessionStorage` stores data only for the current browser session. You can use the `setItem`, `getItem`, and `removeItem` methods to store, retrieve, and delete data. Here's an example of using `localStorage`:

```javascript
localStorage.setItem("username", "John");
let username = localStorage.getItem("username");
console.log(username); // John

localStorage.removeItem("username");
```

## Manipulating Cookies
Cookies are small text files that are stored in the browser and used to store information about the user. JavaScript allows creating, reading, and deleting cookies using the `document.cookie` object. Here's an example of creating a cookie:

```javascript
document.cookie = "username=John; expires=Fri, 31 Dec 2023 23:59:59 GMT; path=/";
```