# Week 1 — JavaScript Basics

This folder contains small practice exercises covering operators, control statements, and array methods.

## Files
- `ControlStatements.js`: hands-on examples for `if` / `else` / nested `if` and the ternary operator.
- `Operators.js`: simple billing example that defines and uses the functions `add`, `discount`, `gst`, and `printbill` to compute a running total.
- `ArrayOperations.js/Assignment1.js`: temperature array — uses `filter`, `map`, `reduce`, `find`, and `findIndex`.
- `ArrayOperations.js/Assignment2.js`: course array — uses `filter`, `map`, `find`, and `findIndex`.
- `ArrayOperations.js/Assignment3.js`: student marks — uses `filter`, `map`, `reduce`, `find`, and `findIndex`.
- `ArrayOperationAdv/Assignment1.js`: cart example — uses `filter`, `map`, `reduce`, `find`, and `findIndex`.
- `ArrayOperationAdv/Assignment2.js`: students array — demonstrates `filter`, `map` (adds grade), `reduce`, `find`, and `findIndex`.
- `ArrayOperationAdv/Assignment3.js`: employees payroll — `filter`, `map` (adds `netsalary`), `reduce`, `find`, and `findIndex`.
- `ArrayOperationAdv/Assignment4.js`: movies example — `filter`, `map`, `reduce`, `find`, and `findIndex`.
- `ArrayOperationAdv/Assignment5.js`: transactions example — `filter`, `map`, `reduce`, `find`, and `findIndex`.

## Methods / Functions used (definitions & examples)

### Array methods
- `filter(callback)` — returns a new array with all elements that pass the test implemented by `callback`.
  - Example: `arr.filter(x => x > 10)` returns elements greater than 10.
- `map(callback)` — returns a new array with the result of calling `callback` on every element.
  - Example: `arr.map(x => x * 2)` doubles each element.
- `reduce(callback, initial)` — executes `callback` for each element to reduce the array to a single value. `callback` receives `(accumulator, current)`.
  - Example: `arr.reduce((acc, x) => acc + x, 0)` sums numbers.
- `find(callback)` — returns the first element that satisfies `callback`, or `undefined` if none.
  - Example: `arr.find(x => x.id === 3)`.
- `findIndex(callback)` — returns the index of the first element that satisfies `callback`, or `-1` if none.
  - Example: `arr.findIndex(x => x === 42)`.

### Custom functions in `Operators.js`
- `add(amount)` — adds `amount` to the running `totalamount`.
- `discount(discountamount)` — subtracts `discountamount` from `totalamount`.
- `gst(gstamount)` — adds `gstamount` to `totalamount` (note: current code adds the raw argument — to apply percentage you must pass the computed value, e.g., `totalamount * 0.18`).
- `printbill()` — prints the current `totalamount` to the console.

Example (based on the file):

```js
let totalamount = 0;
add(500);        // totalamount += 500
gst(18);         // totalamount += 18  (current code adds 18 as absolute value)
discount(50);    // totalamount -= 50
printbill();     // logs final total
```

## Notes / Suggestions
- The `gst` function in `Operators.js` currently adds the raw value passed; if the intention is to apply a percentage (e.g., 18%), call it as `gst(totalamount * 0.18)` or update the function to accept a percentage and compute the amount internally.
- Array method examples across assignments demonstrate common patterns: filtering, transformation (`map`), aggregation (`reduce`), and quick lookup (`find` / `findIndex`).


