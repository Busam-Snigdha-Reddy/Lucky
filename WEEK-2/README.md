# WEEK-2: Advanced JavaScript Concepts

Welcome to Week 2 of the MERN stack learning journey! This week covers essential JavaScript concepts for modern web development.

## Topics Covered

### 1. **Spread Operator & Object Copying**
- **Files**: `datacopy.js`, `datacopy2.js`
- **Concepts**:
  - Using the spread operator (`...`) to create copies of objects
  - Shallow vs deep copying behavior
  - Modifying nested properties in copied objects
  - Overriding properties during object spread

**Example**:
```javascript
let product = { productName: "LED TV", brand: "Sony", price: 100000 };
let discountProduct = { ...product, price: 40000, brand: "LG" };
```

---

### 2. **Error Handling**
- **File**: `errorhandling.js`
- **Concepts**:
  - Try-catch blocks for error handling
  - Error object properties: `name`, `message`, `stack`
  - Handling runtime errors gracefully
  - Program flow control with error handling

**Example**:
```javascript
try {
  console.log(x); // This will throw an error
} catch(error) {
  console.log(error.message);
}
```

---

### 3. **Fetch API & Async/Await**
- **File**: `fetchapi.js`
- **Concepts**:
  - Making HTTP requests with Fetch API
  - Promise-based approach with `.then()` and `.catch()`
  - Modern async/await syntax for cleaner code
  - Parsing JSON responses
  - Error handling in asynchronous operations

**Example**:
```javascript
// Using async/await
async function getData() {
  let res = await fetch('https://jsonplaceholder.typicode.com/posts');
  let data = await res.json();
  console.log(data);
}
```

---

### 4. **Optional Chaining**
- **File**: `optionaldemo.js`
- **Concepts**:
  - Safe property access with optional chaining (`?.`)
  - Nullish coalescing operator (`??`)
  - Preventing errors when accessing undefined properties
  - Default values for missing properties

**Example**:
```javascript
let student = { rollNo: 1, name: "Joe" };
console.log(student.city?.length ?? "property not existed");
```

---

## Files Structure

```
WEEK-2/
├── README.md                 # This file
├── datacopy.js               # Spread operator with nested objects
├── datacopy2.js              # Spread operator with property override
├── errorhandling.js          # Try-catch error handling
├── fetchapi.js               # Fetch API and async/await
└── optionaldemo.js           # Optional chaining and nullish coalescing
```

---

## How to Run These Examples

1. **Using Node.js**:
   ```bash
   node datacopy.js
   node errorhandling.js
   node fetchapi.js
   node optionaldemo.js
   ```

2. **In Browser Console**: Copy-paste the code into your browser console to see the results.

---

## Key Takeaways

✅ Master the spread operator for object/array manipulation  
✅ Handle errors gracefully with try-catch blocks  
✅ Use Fetch API and async/await for asynchronous operations  
✅ Write defensive code with optional chaining  


