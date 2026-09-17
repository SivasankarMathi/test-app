# JavaScript Guide

## What is JavaScript?

JavaScript is a high-level, interpreted programming language that enables interactive web pages. It's one of the core technologies of the web, alongside HTML and CSS.

- **Created**: 1995 by Brendan Eich
- **Use cases**: Web development, server-side (Node.js), mobile apps, desktop apps, game development
- **Paradigm**: Multi-paradigm (event-driven, functional, imperative, object-oriented)

---

## 1. Variables and Constants

### Variable Declaration

```javascript
// var (old way, function-scoped)
var name = "John";

// let (block-scoped, can be reassigned)
let age = 25;
age = 26; // ✓ Valid

// const (block-scoped, cannot be reassigned)
const PI = 3.14159;
// PI = 3.14; // ✗ Error!
```

**Best Practice**: Use `const` by default, `let` when you need to reassign, avoid `var`.

---

## 2. Data Types

### Primitive Types

```javascript
// String
let firstName = "Alice";
let lastName = 'Smith';
let message = `Hello, ${firstName}!`; // Template literal

// Number
let integer = 42;
let float = 3.14;
let negative = -10;

// Boolean
let isActive = true;
let isCompleted = false;

// Undefined
let notDefined;
console.log(notDefined); // undefined

// Null
let emptyValue = null;

// Symbol (unique identifier)
let id = Symbol('id');

// BigInt (large integers)
let bigNumber = 9007199254740991n;
```

### Reference Types

```javascript
// Object
let person = {
    name: "John",
    age: 30,
    city: "New York"
};

// Array
let numbers = [1, 2, 3, 4, 5];
let mixed = [1, "two", true, null];

// Function
function greet() {
    return "Hello!";
}
```

---

## 3. Operators

### Arithmetic Operators

```javascript
let a = 10, b = 3;

console.log(a + b);  // 13 (Addition)
console.log(a - b);  // 7  (Subtraction)
console.log(a * b);  // 30 (Multiplication)
console.log(a / b);  // 3.333... (Division)
console.log(a % b);  // 1  (Modulus/Remainder)
console.log(a ** b); // 1000 (Exponentiation)
```

### Comparison Operators

```javascript
let x = 5;

console.log(x == "5");   // true (loose equality)
console.log(x === "5");  // false (strict equality)
console.log(x != "5");   // false
console.log(x !== "5");  // true
console.log(x > 3);      // true
console.log(x <= 5);     // true
```

### Logical Operators

```javascript
let isLoggedIn = true;
let isAdmin = false;

console.log(isLoggedIn && isAdmin); // false (AND)
console.log(isLoggedIn || isAdmin); // true (OR)
console.log(!isLoggedIn);           // false (NOT)
```

---

## 4. Control Structures

### If-Else Statement

```javascript
let age = 18;

if (age >= 18) {
    console.log("You are an adult");
} else if (age >= 13) {
    console.log("You are a teenager");
} else {
    console.log("You are a child");
}

// Ternary operator
let status = age >= 18 ? "adult" : "minor";
```

### Switch Statement

```javascript
let day = "Monday";

switch (day) {
    case "Monday":
        console.log("Start of the week");
        break;
    case "Friday":
        console.log("TGIF!");
        break;
    case "Saturday":
    case "Sunday":
        console.log("Weekend!");
        break;
    default:
        console.log("Midweek day");
}
```

### Loops

```javascript
// For loop
for (let i = 0; i < 5; i++) {
    console.log(i); // 0, 1, 2, 3, 4
}

// While loop
let count = 0;
while (count < 3) {
    console.log(count);
    count++;
}

// Do-While loop
let num = 0;
do {
    console.log(num);
    num++;
} while (num < 3);

// For...of (iterate over values)
let fruits = ["apple", "banana", "orange"];
for (let fruit of fruits) {
    console.log(fruit);
}

// For...in (iterate over keys)
let person = { name: "John", age: 30 };
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}
```

---

## 5. Functions

### Function Declaration

```javascript
function add(a, b) {
    return a + b;
}

console.log(add(5, 3)); // 8
```

### Function Expression

```javascript
const subtract = function(a, b) {
    return a - b;
};

console.log(subtract(10, 4)); // 6
```

### Arrow Functions (ES6)

```javascript
// Concise syntax
const multiply = (a, b) => a * b;

// With block body
const divide = (a, b) => {
    if (b === 0) return "Cannot divide by zero";
    return a / b;
};

console.log(multiply(4, 5)); // 20
console.log(divide(10, 2));  // 5
```

### Default Parameters

```javascript
function greet(name = "Guest") {
    return `Hello, ${name}!`;
}

console.log(greet());        // "Hello, Guest!"
console.log(greet("Alice")); // "Hello, Alice!"
```

### Rest Parameters

```javascript
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); // 10
```

---

## 6. Arrays

### Array Methods

```javascript
let numbers = [1, 2, 3, 4, 5];

// map - transform each element
let doubled = numbers.map(n => n * 2);
// [2, 4, 6, 8, 10]

// filter - keep elements that match condition
let evens = numbers.filter(n => n % 2 === 0);
// [2, 4]

// reduce - reduce to single value
let sum = numbers.reduce((acc, n) => acc + n, 0);
// 15

// find - first element that matches
let found = numbers.find(n => n > 3);
// 4

// forEach - iterate over each element
numbers.forEach(n => console.log(n));

// push/pop - add/remove from end
numbers.push(6);    // [1, 2, 3, 4, 5, 6]
numbers.pop();      // [1, 2, 3, 4, 5]

// unshift/shift - add/remove from start
numbers.unshift(0); // [0, 1, 2, 3, 4, 5]
numbers.shift();    // [1, 2, 3, 4, 5]

// slice - extract portion (non-mutating)
let sliced = numbers.slice(1, 3); // [2, 3]

// splice - add/remove elements (mutating)
numbers.splice(2, 1, 99); // [1, 2, 99, 4, 5]
```

---

## 7. Objects

### Creating Objects

```javascript
// Object literal
let person = {
    name: "Alice",
    age: 28,
    greet: function() {
        return `Hi, I'm ${this.name}`;
    }
};

// Accessing properties
console.log(person.name);        // "Alice"
console.log(person["age"]);      // 28
console.log(person.greet());     // "Hi, I'm Alice"

// Adding/modifying properties
person.email = "alice@example.com";
person.age = 29;

// Deleting properties
delete person.age;
```

### Object Destructuring

```javascript
let user = { name: "Bob", age: 35, city: "NYC" };

// Extract properties
let { name, age } = user;
console.log(name); // "Bob"
console.log(age);  // 35

// With renaming
let { name: userName, city } = user;
console.log(userName); // "Bob"
```

### Spread Operator

```javascript
let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };

// Merge objects
let merged = { ...obj1, ...obj2 };
// { a: 1, b: 2, c: 3, d: 4 }

// Clone object
let clone = { ...obj1 };
```

---

## 8. Classes (ES6)

```javascript
class Animal {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
    
    speak() {
        return `${this.name} makes a sound`;
    }
    
    // Static method
    static info() {
        return "Animals are living organisms";
    }
}

// Inheritance
class Dog extends Animal {
    constructor(name, breed) {
        super(name, "Dog"); // Call parent constructor
        this.breed = breed;
    }
    
    speak() {
        return `${this.name} barks!`;
    }
}

let dog = new Dog("Buddy", "Golden Retriever");
console.log(dog.speak());      // "Buddy barks!"
console.log(Animal.info());    // "Animals are living organisms"
```

---

## 9. Asynchronous JavaScript

### Callbacks

```javascript
function fetchData(callback) {
    setTimeout(() => {
        callback("Data received");
    }, 1000);
}

fetchData((data) => {
    console.log(data); // "Data received" after 1 second
});
```

### Promises

```javascript
function fetchUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;
            if (success) {
                resolve({ id: 1, name: "John" });
            } else {
                reject("Error fetching user");
            }
        }, 1000);
    });
}

// Using promises
fetchUser()
    .then(user => console.log(user))
    .catch(error => console.error(error));
```

### Async/Await

```javascript
async function getUser() {
    try {
        const user = await fetchUser();
        console.log(user);
        return user;
    } catch (error) {
        console.error(error);
    }
}

getUser();
```

### Fetch API

```javascript
// GET request
async function getData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

// POST request
async function postData() {
    try {
        const response = await fetch('https://api.example.com/data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: 'John', age: 30 })
        });
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}
```

---

## 10. DOM Manipulation

### Selecting Elements

```javascript
// Select by ID
let header = document.getElementById('header');

// Select by class
let items = document.getElementsByClassName('item');

// Select by tag
let paragraphs = document.getElementsByTagName('p');

// Query selector (CSS selectors)
let firstItem = document.querySelector('.item');
let allItems = document.querySelectorAll('.item');
```

### Modifying Elements

```javascript
// Change content
element.textContent = "New text";
element.innerHTML = "<strong>Bold text</strong>";

// Change attributes
element.setAttribute('class', 'active');
element.getAttribute('class');
element.removeAttribute('class');

// Change styles
element.style.color = 'red';
element.style.backgroundColor = 'blue';

// Add/remove classes
element.classList.add('active');
element.classList.remove('hidden');
element.classList.toggle('visible');
```

### Event Listeners

```javascript
let button = document.querySelector('#myButton');

// Add event listener
button.addEventListener('click', function(event) {
    console.log('Button clicked!');
    event.preventDefault(); // Prevent default action
});

// Common events: click, dblclick, mouseenter, mouseleave,
// keydown, keyup, submit, change, input, focus, blur
```

### Creating Elements

```javascript
// Create new element
let newDiv = document.createElement('div');
newDiv.textContent = 'Hello World';
newDiv.className = 'box';

// Append to DOM
document.body.appendChild(newDiv);

// Insert before another element
let parent = document.querySelector('#parent');
let referenceNode = document.querySelector('#child1');
parent.insertBefore(newDiv, referenceNode);

// Remove element
newDiv.remove();
```

---

## 11. Modern JavaScript Features

### Template Literals

```javascript
let name = "Alice";
let age = 25;

let message = `Hello, my name is ${name} and I am ${age} years old.`;

// Multi-line strings
let multiLine = `
    This is a
    multi-line
    string
`;
```

### Optional Chaining

```javascript
let user = {
    name: "John",
    address: {
        city: "NYC"
    }
};

// Safely access nested properties
console.log(user?.address?.city);      // "NYC"
console.log(user?.contact?.phone);     // undefined (no error)
```

### Nullish Coalescing

```javascript
let value = null;
let defaultValue = value ?? "default"; // "default"

let zero = 0;
let result = zero ?? 100; // 0 (only null/undefined are replaced)
```

### Array/Object Destructuring

```javascript
// Array destructuring
let [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first);  // 1
console.log(rest);   // [3, 4, 5]

// Object destructuring
let { name, age, ...others } = { name: "Bob", age: 30, city: "LA" };
console.log(name);   // "Bob"
console.log(others); // { city: "LA" }
```

---

## 12. Common Patterns

### Immediately Invoked Function Expression (IIFE)

```javascript
(function() {
    console.log("This runs immediately");
})();
```

### Module Pattern

```javascript
const Calculator = (function() {
    // Private variable
    let result = 0;
    
    // Public methods
    return {
        add: function(x) {
            result += x;
            return this;
        },
        subtract: function(x) {
            result -= x;
            return this;
        },
        getResult: function() {
            return result;
        }
    };
})();

Calculator.add(5).subtract(2);
console.log(Calculator.getResult()); // 3
```

### Debouncing

```javascript
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

// Usage
let searchInput = document.querySelector('#search');
let search = debounce(function(e) {
    console.log('Searching:', e.target.value);
}, 500);

searchInput.addEventListener('input', search);
```

---

## 13. Error Handling

```javascript
try {
    // Code that might throw an error
    let result = riskyOperation();
    console.log(result);
} catch (error) {
    // Handle error
    console.error('An error occurred:', error.message);
} finally {
    // Always runs (cleanup code)
    console.log('Cleanup');
}

// Throwing custom errors
function validateAge(age) {
    if (age < 0) {
        throw new Error('Age cannot be negative');
    }
    return true;
}
```

---

## 14. Best Practices

1. **Use strict mode**: `"use strict";` at the top of files
2. **Use const/let**: Avoid `var`
3. **Use === instead of ==**: For strict equality
4. **Use arrow functions**: For concise syntax
5. **Use async/await**: Instead of promise chains
6. **Use destructuring**: For cleaner code
7. **Handle errors**: Always use try-catch for async operations
8. **Use meaningful names**: Variables and functions should be descriptive
9. **Keep functions small**: Each function should do one thing
10. **Comment complex logic**: But prefer self-documenting code

---

## 15. Resources

- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [JavaScript.info](https://javascript.info/)
- [Eloquent JavaScript](https://eloquentjavascript.net/)
- [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS)

---

**Happy Coding! 🚀**
