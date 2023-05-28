---
sidebar_position: 10
---

# AJAX and Fetch API

## Introduction to AJAX
AJAX (Asynchronous JavaScript and XML) is a technique that allows making asynchronous HTTP requests from JavaScript without reloading the entire page. With AJAX, you can send and receive data in the background, enabling faster and more dynamic web applications. XMLHttpRequest is the primary object used to make AJAX requests in JavaScript.

## Using Fetch API to Make HTTP Requests
The Fetch API is a modern JavaScript interface for making HTTP requests. It provides a simpler and more flexible syntax compared to XMLHttpRequest. You can use the `fetch` function to make GET, POST, and other HTTP requests and get the response as a promise. Here's an example of using the Fetch API to fetch JSON data:

```javascript
fetch('https://api.example.com/data')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
  })
  .catch(function(error) {
    console.log(error);
  });
```

## Handling Responses and Error Handling
When using the Fetch API, you can manipulate and process the response of the HTTP request. You can retrieve the data from the response using the `json()`, `text()`, or `blob()` methods depending on the expected data type. Additionally, you can handle errors using the `catch` method in the promise chain. It's important to handle errors properly to provide a robust user experience.