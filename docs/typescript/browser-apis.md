---
sidebar_position: 17
---

# Browser APIs

Browser APIs in TypeScript provide additional functionalities to interact with the browser environment, such as accessing the user's geolocation, storing data locally, and making HTTP requests. Here's a more detailed explanation of each of these APIs along with examples:

## Accessing geolocation APIs
The browser offers a Geolocation API that allows accessing the geographical location of the user's device. To use this API, the `navigator.geolocation` object is used. Through its methods like `getCurrentPosition` and `watchPosition`, the current user's position can be obtained, and changes in location can be tracked.

```typescript
// Get current position
navigator.geolocation.getCurrentPosition((position) => {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
});

// Watch position changes
const watchId = navigator.geolocation.watchPosition((position) => {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
});

// Stop watching position
navigator.geolocation.clearWatch(watchId);
```

In the above example, the `getCurrentPosition` method is used to obtain the user's current position, and the `watchPosition` method is used to continuously monitor changes in the user's position. The obtained latitude and longitude values can be used for various purposes in the application.

## Using localStorage and sessionStorage
These APIs allow storing data locally in the browser. `localStorage` provides a form of persistent storage, while `sessionStorage` allows storing data only during the browser session. Both APIs are used similarly, using the `setItem`, `getItem`, and `removeItem` methods to store, retrieve, and remove data. Data is stored as key-value pairs in the form of strings.

```typescript
// Storing data in localStorage
localStorage.setItem('username', 'John');
localStorage.setItem('isLoggedIn', 'true');

// Retrieving data from localStorage
const username = localStorage.getItem('username');
const isLoggedIn = localStorage.getItem('isLoggedIn');

console.log(username); // John
console.log(isLoggedIn); // true

// Removing data from localStorage
localStorage.removeItem('isLoggedIn');
```

In the above example, data like the username and the user's login status is stored in the `localStorage` using the `setItem` method. Later, the `getItem` method is used to retrieve the stored data, and the `removeItem` method is used to remove the data from `localStorage` if needed.

## Fetch API for making HTTP requests
The Fetch API is a modern interface for making HTTP requests and getting responses. It provides a more flexible and powerful way to interact with web services. The `fetch` method is used to make a request to a URL, and a promise is returned, which resolves with the response. Through response methods like `json`, `text`, or `blob`, the content of the response can be accessed in different formats.

```typescript
fetch('https://api.example.com/data')
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
```

In the above example, the `fetch` method is used to make an HTTP GET request to the specified URL. The response is received as a promise, and the `json` method is used to extract the response data in JSON format. The extracted data is then logged to the console.

As more sophisticated web applications are developed, using these Browser APIs in TypeScript allows leveraging advanced browser features such as user geolocation, local data storage, and making HTTP requests to web services. This expands the possibilities for interaction and customization of web applications, enabling developers to create more powerful and interactive user experiences.