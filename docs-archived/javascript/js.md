

















---
sidebar_position: 1
---

# Introducción a JavaScript

## Qué es JavaScript?
JavaScript es un lenguaje de programación interpretado y orientado a objetos utilizado principalmente para crear interactividad en páginas web. Es uno de los componentes clave de las tecnologías web, junto con HTML y CSS. JavaScript permite agregar funcionalidad dinámica a los sitios web, como validación de formularios, animaciones, manipulación del contenido de la página, comunicación con servidores y mucho más.

## Por qué aprender JavaScript?
Aprender JavaScript es esencial para cualquier desarrollador web, ya que es el lenguaje de programación principal utilizado en el lado del cliente (navegador). Te permite crear aplicaciones web interactivas y dinámicas. Además, JavaScript también se ha vuelto popular en el desarrollo de aplicaciones móviles y de servidor (Node.js). Al dominar JavaScript, puedes construir una amplia variedad de aplicaciones y tener muchas oportunidades laborales en el campo de la programación.

## Historia y evolución de JavaScript?
JavaScript fue creado originalmente por Brendan Eich en 1995 mientras trabajaba para Netscape Communications. Inicialmente, se llamaba "LiveScript", pero se renombró a "JavaScript" para capitalizar el éxito de Java en ese momento. JavaScript evolucionó rápidamente y se estandarizó como ECMAScript, con varias versiones como ECMAScript 3, 5, 6 (también conocido como ECMAScript 2015), y así sucesivamente. Estas actualizaciones introdujeron nuevas características y mejoras en el lenguaje, lo que lo hizo más poderoso y versátil.

---
sidebar_position: 2
---

# Entorno de desarrollo

## Instalación de un navegador web moderno
Para programar en JavaScript, necesitarás un navegador web moderno instalado en tu computadora. Algunas opciones populares incluyen Google Chrome, Mozilla Firefox o Microsoft Edge. Estos navegadores vienen con herramientas de desarrollo integradas que facilitan la escritura y depuración de código JavaScript.

## Uso de la consola del navegador para ejecutar código JavaScript
La mayoría de los navegadores web tienen una consola integrada, que es una herramienta donde puedes escribir y ejecutar código JavaScript. La consola proporciona un entorno interactivo para probar rápidamente fragmentos de código, realizar pruebas y depurar problemas. Puedes abrir la consola del navegador presionando la tecla F12 o haciendo clic derecho en la página y seleccionando "Inspeccionar elemento".

## Herramientas de desarrollo de JavaScript
Las herramientas de desarrollo, como el Inspector de Chrome, proporcionan un conjunto de funciones para ayudarte a desarrollar y depurar aplicaciones JavaScript. Estas herramientas te permiten examinar y modificar el HTML y el CSS de una página, analizar el rendimiento, rastrear errores, establecer puntos de interrupción y mucho más. El Inspector de Chrome es una herramienta popular que está disponible en el navegador Google Chrome y ofrece una amplia gama de características para el desarrollo de JavaScript.

---
sidebar_position: 3
---

# Fundamentos de JavaScript

## Variables y tipos de datos
JavaScript utiliza variables para almacenar valores. Puedes declarar una variable utilizando la palabra clave "var", "let" o "const", seguida del nombre de la variable. Los tipos de datos en JavaScript incluyen números, cadenas de texto, booleanos, objetos, arreglos, entre otros. Aquí tienes un ejemplo:

```javascript
let age = 25; // variable numérica
let name = "John"; // variable de cadena de texto
let isStudent = true; // variable booleana
```

## Operadores y expresiones
JavaScript tiene una variedad de operadores para realizar operaciones aritméticas, de asignación, de comparación y lógicas. Las expresiones combinan variables, valores y operadores para producir un nuevo valor. Por ejemplo:

```javascript
let x = 10;
let y = 5;
let sum = x + y; // operador de suma
let isGreater = x > y; // operador de comparación
```

## Estructuras de control (condicionales y bucles)
Las estructuras de control permiten controlar el flujo de ejecución en un programa. JavaScript tiene condicionales como "if", "else if" y "else" para tomar decisiones basadas en condiciones. También cuenta con bucles como "for", "while" y "do-while" para repetir bloques de código. Aquí tienes un ejemplo:

```javascript
let age = 18;
if (age >= 18) {
  console.log("Eres mayor de edad.");
} else {
  console.log("Eres menor de edad.");
}
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

## Funciones y su uso
Las funciones permiten agrupar un conjunto de instrucciones en un bloque reutilizable. Puedes declarar funciones utilizando la palabra clave "function", seguida del nombre de la función y los parámetros (si los hay). Las funciones pueden recibir valores de entrada, realizar cálculos y devolver un resultado. Aquí tienes un ejemplo:

```javascript
function greet(name) {
  console.log("Hola, " + name + "!");
}
greet("Juan"); // Llamada a la función: imprime "Hola, Juan!"
```

---
sidebar_position: 4
---

# Objetos en JavaScript
## Introducción a los objetos
Un objeto en JavaScript es una entidad que tiene propiedades y métodos. Las propiedades son variables que contienen valores, y los métodos son funciones que realizan acciones en el objeto. Puedes acceder a las propiedades y métodos de un objeto utilizando la sintaxis de punto. Aquí tienes un ejemplo:

```javascript
let person = {
  name: "John",
  age: 25,
  greet: function() {
    console.log("Hola, mi nombre es " + this.name + ".");
  }
};

console.log(person.name); // Acceder a la propiedad "name"
person.greet(); // Llamar al método "greet"
```

## Propiedades y métodos
Las propiedades son los valores asociados a un objeto, mientras que los métodos son funciones asociadas al objeto. Puedes acceder a las propiedades y métodos utilizando la sintaxis de punto. Por ejemplo:

```javascript
let car = {
  brand: "Toyota",
  color: "blue",
  startEngine: function() {
    console.log("Encendiendo el motor...");
  }
};
console.log(car.brand); // Acceder a la propiedad "brand"
car.startEngine(); // Llamar al método "startEngine"
```

## Uso de objetos predefinidos (como Date, Math, etc.)
JavaScript proporciona objetos predefinidos que contienen propiedades y métodos útiles. Por ejemplo, el objeto "Date" permite trabajar con fechas y horas, mientras que el objeto "Math" proporciona funciones matemáticas. Aquí tienes un ejemplo:

```javascript
let today = new Date();
console.log(today.getFullYear()); // Obtener el año actual

let randomNumber = Math.random();
console.log(randomNumber); // Obtener un número aleatorio entre 0 y 1
```

## Creación de objetos personalizados
Además de los objetos predefinidos, puedes crear tus propios objetos personalizados en JavaScript. Puedes definir propiedades y métodos dentro de un objeto para representar entidades del mundo real o conceptos abstractos. Aquí tienes un ejemplo:

```javascript
let person = {
  name: "John",
  age: 25,
  greet: function() {
    console.log("Hola, mi nombre es " + this.name + ".");
  }
};
let dog = {
  name: "Buddy",
  breed: "Labrador",
  bark: function() {
    console.log("Woof woof!");
  }
};

person.greet(); // Llamar al método "greet" del objeto "person"
dog.bark(); // Llamar al método "bark" del objeto "dog"
```

---
sidebar_position: 5
---

# Arrays
## Creación y manipulación de arrays
Un array es una estructura de datos que puede almacenar varios elementos en una sola variable. Puedes crear un array utilizando corchetes y separando los elementos con comas. Para acceder a los elementos de un array, puedes utilizar su índice (posición). Aquí tienes un ejemplo:

```javascript
let fruits = ["manzana", "plátano", "naranja"];
console.log(fruits[0]); // Acceder al primer elemento del array
fruits[1] = "pera"; // Modificar un elemento del array
```

## Métodos de arrays (push, pop, shift, unshift, etc.)
JavaScript proporciona una variedad de métodos integrados para manipular arrays. Por ejemplo, el método "push" permite agregar elementos al final del array, mientras que el método "pop" elimina el último elemento. Otros métodos como "shift" y "unshift" agregan y eliminan elementos al principio del array. Aquí tienes un ejemplo:

```javascript
let fruits = ["manzana", "plátano", "naranja"];
fruits.push("pera"); // Agregar un elemento al final
fruits.pop(); // Eliminar el último elemento
fruits.shift(); // Eliminar el primer elemento
fruits.unshift("sandía"); // Agregar un elemento al principio
```

## Iteración sobre arrays (bucles, forEach, map, filter, reduce, etc.)
Puedes recorrer los elementos de un array utilizando bucles como "for" o "while".

Además, JavaScript proporciona métodos de array como "forEach", "map", "filter" y "reduce" para facilitar la manipulación y transformación de los elementos de un array. Aquí tienes un ejemplo:

```javascript
let numbers = [1, 2, 3, 4, 5];

// Bucle "for" para iterar sobre el array
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// Método "forEach" para iterar sobre el array
numbers.forEach(function(number) {
  console.log(number);
});

// Método "map" para transformar los elementos del array
let doubledNumbers = numbers.map(function(number) {
  return number * 2;
});

console.log(doubledNumbers); // [2, 4, 6, 8, 10]
```

---
sidebar_position: 6
---

# DOM (Document Object Model)
## Introducción al DOM
El DOM es una representación estructurada de un documento HTML/XML que permite acceder y manipular los elementos de una página web mediante JavaScript. El DOM organiza los elementos en una jerarquía de nodos, donde cada nodo representa un elemento, atributo o texto en el documento. JavaScript puede interactuar con el DOM para modificar el contenido, el estilo y el comportamiento de una página web.

## Manipulación de elementos HTML con JavaScript
JavaScript permite acceder a los elementos HTML del DOM utilizando métodos como "getElementById", "getElementsByClassName" y "getElementsByTagName". Una vez que se ha seleccionado un elemento, puedes cambiar su contenido, atributos, estilos y más. Aquí tienes un ejemplo:

```html
<p id="myParagraph">Hola, soy un párrafo.</p>
```

```javascript
let paragraph = document.getElementById("myParagraph"); // Obtener el elemento por su ID
paragraph.innerHTML = "Hola, soy un nuevo párrafo."; // Cambiar el contenido del elemento
paragraph.style.color = "red"; // Cambiar el color del texto
```

## Eventos y manejo de eventos
Los eventos son acciones que ocurren en una página web, como hacer clic en un botón o mover el ratón. JavaScript permite manejar estos eventos utilizando los métodos "addEventListener" o asignando directamente una función a una propiedad de evento. Puedes realizar acciones específicas cuando un evento ocurre, como llamar a una función o modificar el contenido de la página. Aquí tienes un ejemplo:

```html
<button id="myButton">Haz clic aquí</button>
```

```javascript
let button = document.getElementById("myButton"); // Obtener el botón por su ID
button.addEventListener("click", function() {
  console.log("¡Hiciste clic en el botón!");
});
```

## Modificación del contenido y estilo de las páginas web
JavaScript te permite modificar el contenido y estilo de una página web a través del DOM. Puedes cambiar el texto de un elemento, agregar o eliminar elementos, cambiar clases CSS, ocultar o mostrar elementos, entre otros. Aquí tienes un ejemplo:

```html
<p id="myParagraph">Hola, soy un párrafo.</p>
```

```javascript
let paragraph = document.getElementById("myParagraph"); // Obtener el párrafo por su ID
paragraph.textContent = "Hola, soy un nuevo párrafo."; // Cambiar el texto del párrafo
paragraph.classList.add("highlight"); // Agregar una clase CSS
paragraph.style.fontSize = "20px"; // Cambiar el tamaño de fuente
```

---
sidebar_position: 7
---

# Funciones avanzadas
## Cierres (closures) y ámbito (scope)
Un cierre (closure) es una función que tiene acceso a variables externas incluso después de que la función externa haya finalizado su ejecución. Esto permite crear funciones que "recuerdan" el ámbito en el que fueron creadas. El ámbito se refiere a la accesibilidad y visibilidad de variables en un determinado contexto. Los cierres son útiles para encapsular datos y crear funciones reutilizables. Aquí tienes un ejemplo:

```javascript
function outerFunction() {
  let outerVariable = "Hola, ";

  function innerFunction(name) {
    console.log(outerVariable + name);
  }

  return innerFunction;
}

let greeting = outerFunction();
greeting("Juan"); // Imprime "Hola, Juan"
```

## Funciones anónimas y funciones de flecha (arrow functions)
Las funciones anónimas no tienen nombre y se pueden utilizar en situaciones donde solo se necesita una función temporalmente. Las funciones de flecha son una forma más concisa de escribir funciones en JavaScript y tienen un comportamiento especial en relación con el ámbito (this). Aquí tienes ejemplos de ambas:

```javascript
// Función anónima
let anonymousFunction = function() {
  console.log("Soy una función anónima");
};

anonymousFunction();

// Función de flecha
let arrowFunction = () => {
  console.log("Soy una función de flecha");
};

arrowFunction();
```

## Recursividad
La recursividad es una técnica en la que una función se llama a sí misma. Se utiliza para resolver problemas que pueden descomponerse en casos más pequeños y similares. Un caso base es necesario para evitar una llamada infinita. Aquí tienes un ejemplo de una función recursiva que calcula el factorial de un número:

```javascript
function factorial(n) {
  if (n === 0) {
    return 1; // Caso base: factorial de 0 es 1
  } else {
    return n * factorial(n - 1); // Llamada recursiva
  }
}

console.log(factorial(5)); // Calcula el factorial de 5 (5! = 120)
```

## Funciones de orden superior (higher-order functions)
Las funciones de orden superior son funciones que pueden aceptar otras funciones como argumentos o devolver funciones como resultado. Esto permite crear abstracciones y escribir código más modular y flexible. Algunos ejemplos de funciones de orden superior en JavaScript son "map", "filter" y "reduce". Aquí tienes un ejemplo de uso de "map":

```javascript
let numbers = [1, 2, 3, 4, 5];

let doubledNumbers = numbers.map(function(number) {
  return number * 2;
});

console.log(doubledNumbers); // [2, 4, 6, 8, 10]
```

---
sidebar_position: 8
---

# Programación asincrónica:
## Callbacks
Un callback es una función que se pasa como argumento a otra función y se ejecuta después de que se complete una operación asincrónica. Los callbacks se utilizan para manejar la asincronía en JavaScript y garantizar que cierto código se ejecute en el momento adecuado. Aquí tienes un ejemplo de un callback en una función de temporizador:

```javascript
function delay(callback, milliseconds) {
  setTimeout(callback, milliseconds);
}

function sayHello() {
  console.log("Hola, mundo!");
}

delay(sayHello, 2000); // Llamar a sayHello después de 2 segundos
```

## Promesas
Las promesas son objetos que representan la eventual finalización (o falla) de una operación asincrónica y permiten escribir un código más legible y estructurado. Una promesa puede estar en uno de los tres estados: pendiente, cumplida o rechazada. Se utiliza el método "then" para manejar la resolución exitosa de una promesa y el método "catch" para manejar un error. Aquí tienes un ejemplo de una promesa que simula una solicitud HTTP:

```javascript
let promise = new Promise(function(resolve, reject) {
  setTimeout(function() {
    if (Math.random() < 0.5) {
      resolve("Éxito"); // La promesa se cumple
    } else {
      reject("Error"); // La promesa se rechaza
    }
  }, 2000);
});

promise.then(function(result) {
  console.log("La promesa se cumplió: " + result);
}).catch(function(error) {
  console.log("La promesa se rechazó: " + error);
});
```

## Async/await
El uso de async/await es una forma más moderna y legible de escribir código asincrónico en JavaScript. Permite escribir código que parece síncrono, pero en realidad es asincrónico. La palabra clave "async" se utiliza para declarar una función asincrónica, y "await" se utiliza para esperar a que una promesa se cumpla antes de continuar la ejecución del código. Aquí tienes un ejemplo de una función asincrónica que utiliza await:

```javascript
function delay(milliseconds) {
  return new Promise(function(resolve) {
    setTimeout(resolve, milliseconds);
  });
}

async function main() {
  console.log("Inicio");
  await delay(2000);
  console.log("Fin");
}

main();
```

---
sidebar_position: 9
---

# Manipulación del navegador:
## Manipulación del historial del navegador
JavaScript proporciona métodos para manipular el historial del navegador, como "history.back()" para retroceder a la página anterior, "history.forward()" para avanzar a la siguiente página y "history.pushState()" para agregar una entrada al historial sin recargar la página. Estos métodos permiten crear aplicaciones de una sola página (SPA) y navegar entre diferentes estados sin recargar la página completa.

## Almacenamiento local (localStorage, sessionStorage)
El almacenamiento local permite almacenar datos en el navegador web de forma persistente. JavaScript proporciona dos objetos para acceder al almacenamiento local: "localStorage" y "sessionStorage". "localStorage" almacena los datos de forma permanente, mientras que "sessionStorage" almacena los datos solo durante la sesión actual del navegador. Puedes utilizar los métodos "setItem", "getItem" y "removeItem" para almacenar, obtener y eliminar datos. Aquí tienes un ejemplo de uso de "localStorage":

```javascript
localStorage.setItem("username", "John");
let username = localStorage.getItem("username");
console.log(username); // John

localStorage.removeItem("username");
```

## Manipulación de cookies
Las cookies son pequeños archivos de texto que se almacenan en el navegador y se utilizan para almacenar información sobre el usuario. JavaScript permite crear, leer y eliminar cookies utilizando el objeto "document.cookie". Aquí tienes un ejemplo de creación de una cookie:

```javascript
document.cookie = "username=John; expires=Fri, 31 Dec 2023 23:59:59 GMT; path=/";
```

---
sidebar_position: 10
---

# AJAX y Fetch API:
## Introducción a AJAX
AJAX (Asynchronous JavaScript and XML) es una técnica que permite realizar solicitudes HTTP asíncronas desde JavaScript sin recargar la página completa. Con AJAX, puedes enviar y recibir datos en segundo plano, lo que permite crear aplicaciones web más rápidas y dinámicas. XMLHttpRequest es el objeto principal utilizado para realizar solicitudes AJAX en JavaScript.

## Uso de la Fetch API para realizar solicitudes HTTP
La Fetch API es una interfaz moderna de JavaScript para realizar solicitudes HTTP. Proporciona una sintaxis más sencilla y más flexible en comparación con XMLHttpRequest. Puedes utilizar la función fetch para realizar solicitudes GET, POST y otras solicitudes HTTP, y obtener la respuesta en forma de una promesa. Aquí tienes un ejemplo de uso de la Fetch API para obtener datos JSON:

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

## Manipulación de respuestas y manejo de errores
Al utilizar la Fetch API, puedes manipular y procesar la respuesta de la solicitud HTTP. Puedes obtener los datos de la respuesta utilizando los métodos "json()", "text()" o "blob()" según el tipo de datos esperado. Además, puedes manejar los errores utilizando el método "catch" en la cadena de promesas. Es importante manejar los errores adecuadamente para ofrecer una experiencia de usuario robusta.

---
sidebar_position: 11
---

# Pruebas y depuración
## Herramientas de depuración
Las herramientas de depuración son fundamentales para identificar y solucionar problemas en el código. Algunas de las herramientas comunes incluyen el uso de console.log para imprimir valores y mensajes en la consola del navegador, breakpoints (puntos de interrupción) para detener la ejecución del código en un punto específico y examinar los valores de las variables, y el uso de la herramienta de depuración del navegador, que proporciona funcionalidades más avanzadas como inspección de variables, seguimiento de llamadas de funciones, entre otros.

## Pruebas unitarias
Las pruebas unitarias son pruebas automatizadas que se centran en verificar que unidades individuales de código (como funciones, métodos o componentes) funcionen correctamente. Jest y Mocha son frameworks populares de pruebas unitarias en JavaScript. Estas herramientas permiten escribir casos de prueba para verificar que las unidades de código se comporten según lo esperado. Aquí tienes un ejemplo de prueba unitaria con Jest:

```javascript
function sum(a, b) {
  return a + b;
}

test('Suma correctamente dos números', () => {
  expect(sum(2, 3)).toBe(5);
});
```

## Depuración de errores comunes
Al desarrollar en JavaScript, es común encontrar errores en el código. Algunos errores comunes incluyen errores de sintaxis, referencias a variables inexistentes o mal escritas, problemas con el ámbito (scope), entre otros. La depuración de errores implica identificar, comprender y corregir estos errores. Las herramientas de depuración mencionadas anteriormente, como console.log y breakpoints, son útiles para depurar y encontrar la causa de los errores.

---
sidebar_position: 12
---

# Manipulación de datos en formato JSON
## Serialización y deserialización de objetos JSON
JavaScript Object Notation (JSON) es un formato de intercambio de datos ampliamente utilizado. La serialización se refiere a convertir un objeto JavaScript en una cadena JSON, mientras que la deserialización es el proceso inverso de convertir una cadena JSON en un objeto JavaScript. En JavaScript, se utilizan los métodos JSON.stringify() para serializar un objeto y JSON.parse() para deserializar una cadena JSON. Aquí tienes un ejemplo:

```javascript
let person = {
  name: "John",
  age: 30,
  city: "New York"
};

let jsonString = JSON.stringify(person);
console.log(jsonString); // {"name":"John","age":30,"city":"New York"}

let jsonObject = JSON.parse(jsonString);
console.log(jsonObject.name); // John
```

## Comunicación con servicios web en formato JSON
El formato JSON es ampliamente utilizado en la comunicación entre aplicaciones cliente y servicios web. JavaScript permite realizar solicitudes HTTP a servicios web y enviar y recibir datos en formato JSON. Puedes utilizar la Fetch API mencionada anteriormente para enviar datos JSON en el cuerpo de una solicitud POST y recibir respuestas en formato JSON. Aquí tienes un ejemplo de envío de datos JSON a un servicio web:

```javascript
let data = {
  name: "John",
  age: 30,
  city: "New York"
};

fetch('https://api.example.com/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
})
  .then(response => response.json())
  .then(responseData => {
    console.log(responseData);
  })
  .catch(error => {
    console.error(error);
  });
```
