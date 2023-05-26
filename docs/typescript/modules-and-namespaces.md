---
sidebar_position: 6
---

# Modules and Namespaces

In TypeScript, modules and namespaces are mechanisms used to organize and modularize code in larger applications. The following concepts related to modules and namespaces in TypeScript are explained.

## Organizing code with module
Modules are independent code units that group related functionalities. They allow organizing code in separate files and establish clear dependencies between them. Each TypeScript file can be a module, and exports and imports are used to access functionalities from other modules.

## Importing and exporting modules
To use functionalities from other modules in TS, the `import` and `export` keywords are used. The `export` keyword is used to mark a function, class, variable, or any other element as public and available for use in other modules. The `import` keyword is used to import functionalities from other modules into the current module. For example:
  ```typescript
  // In moduleA.ts file
  export function greet(name: string): void {
    console.log("Hello, " + name + "!");
  }

  // In moduleB.ts file
  import { greet } from "./moduleA";
  greet("John"); // Output: Hello, John!
  ```

## Declaring namespaces
Namespaces in TS are a way to logically group related functionalities and avoid naming collisions in larger applications. They can be declared using the `namespace` keyword, and functionalities are defined within the namespace using dot syntax. For example:
  ```typescript
  // In namespaceA.ts file
  namespace MyNamespace {
    export function greet(name: string): void {
      console.log("Hello, " + name + "!");
    }
  }

  // In namespaceB.ts file
  MyNamespace.greet("John"); // Output: Hello, John!
  ```

## Using external modules 
In addition to internal modules and namespaces, TS also supports importing and exporting external modules. These are modules written in other languages (such as JavaScript) or third-party libraries. Special import and export statements are used to work with external modules. For example:
  ```typescript
  // In app.ts file
  import * as lodash from "lodash";
  const result = lodash.sum([1, 2, 3, 4, 5]);
  console.log(result); // Output: 15
  ```

These concepts will allow you to organize and modularize code in your TypeScript application, making it easier to maintain, reuse, and collaborate with other developers.
