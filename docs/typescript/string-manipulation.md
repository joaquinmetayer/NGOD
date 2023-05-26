---
sidebar_position: 13
---

# String Manipulation

String manipulation in TypeScript is a fundamental part of software development. It allows performing operations such as concatenation, extraction, search, and replacement of text. The following are key concepts related to string manipulation.

## Methods for manipulating strings
TS provides several built-in methods for manipulating strings. Some of the commonly used methods include:

  - `length`: Returns the length of a string.
  - `charAt(index)`: Returns the character at the specified index position.
  - `concat(str1, str2, ..., strN)`: Combines two or more strings and returns a new resulting string.
  - `slice(start, end)`: Extracts a portion of a string from the start index to the end index (not inclusive).
  - `substring(start, end)`: Similar to `slice`, but it doesn't support negative indices and treats incorrect indices as 0.
  - `indexOf(substring, startFrom)`: Returns the index of the first occurrence of a substring in a string, starting from the specified index.
  - `lastIndexOf(substring, startFrom)`: Returns the index of the last occurrence of a substring in a string, starting from the specified index.
  - `toUpperCase()`: Converts a string to uppercase.
  - `toLowerCase()`: Converts a string to lowercase.
  - `replace(searchValue, replaceValue)`: Replaces a substring or pattern in a string with another specified value.
  - `split(separator, limit)`: Splits a string into an array of substrings using an optional separator.
  - `trim()`: Removes leading and trailing whitespace from a string.

## Template strings
Template strings, also known as template literals, are a convenient way to manipulate strings in TypeScript. They allow interpolation of variables and expressions within a string using the `${variable}` syntax. This makes it easier to create dynamic and readable strings. For example:
  ```typescript
  const name = "John";
  const age = 30;

  const message = `Hello, my name is ${name} and I'm ${age} years old.`;
  console.log(message); // "Hello, my name is John and I'm 30 years old."
  ```

## Regular expressions
Regular expressions, also known as regex, are patterns used for searching and manipulating text in strings. TypeScript supports the use of regular expressions through the `RegExp` object. Some useful methods related to regular expressions are:

  - `test(str)`: Checks if a string matches a regular expression pattern and returns `true` or `false`.
  - `exec(str)`: Searches for a match in a string using a regular expression pattern and returns an array with the results.

  For example:
  ```typescript
  const pattern = /hello/i;
  const str = "Hello, World!";

  const result = pattern.test(str);
  console.log(result); // true
  ```

These are some basic concepts related to string manipulation in TypeScript. The built-in methods and template strings offer flexibility and ease of use, while regular expressions allow for more complex searching and manipulation of strings.
