---
sidebar_position: 14
---

# Date and Time Manipulation

Date and time manipulation in TypeScript is performed using the `Date` object. This object provides methods and properties for working with dates and times. Here are some key concepts related to date and time manipulation.

## Date object
The `Date` object is used to represent and manipulate dates and times in TypeScript. A new instance of the `Date` object can be created using the `new Date()` syntax. For example:
  ```typescript
  const now = new Date();
  console.log(now); // Displays the current date and time
  ```

## Formatting and parsing dates
The `Date` object provides methods for formatting and parsing dates. Some useful methods include:

  - `toLocaleString()`: Returns a string representing the date and time in the local format.
  - `toISOString()`: Returns a string representing the date and time in the ISO 8601 format.
  - `toDateString()`: Returns a string representing the date in a readable date format.
  - `toTimeString()`: Returns a string representing the time in a readable time format.
  - `getDate()`, `getMonth()`, `getFullYear()`: Returns the date, month, and year of a `Date` instance.
  - `getHours()`, `getMinutes()`, `getSeconds()`: Returns the hour, minutes, and seconds of a `Date` instance.

## Common operations with dates and times
The `Date` object allows performing common operations with dates and times. Some commonly used operations include:

  - Adding or subtracting days, months, years, hours, minutes, or seconds to a date.
  - Comparing two dates to determine if one is before, after, or equal to the other.
  - Getting the difference in milliseconds, seconds, minutes, hours, or days between two dates.
  - Getting the day of the week, week number, or number of days in a specific month.

While the `Date` object provides basic functionality for date and time manipulation, in more complex projects, it is recommended to use specialized libraries like Moment.js or Luxon, which offer a wider range of functions and easier handling of dates and times.

These are some key concepts related to date and time manipulation in TypeScript. The `Date` object and its methods allow working with dates, formatting and parsing dates, and performing common time-related operations.
