# 🧮 Calculator

A simple browser-based calculator built with vanilla HTML, CSS, and JavaScript — no frameworks, no libraries.

---

## 🔴 Live Preview

🔗 Live Demo: https://alrayyan2157.github.io/calculator/

---

## 📁 Project Structure

```
calculator/
├── index.html      # Markup — calculator layout and structure
├── styles.css      # Styling — layout, buttons, display
└── script.js       # Logic — math operations, button creation, display updates
```

---

## ✨ Features

- **Basic operations** — addition, subtraction, multiplication, division
- **Dynamic button rendering** — number and operator buttons are created via JavaScript
- **Live display** — shows the full expression as you type (e.g. `12 + 5`)
- **Equals (`=`)** — evaluates the expression and shows the result
- **Clear (`C`)** — resets everything back to zero

## 🧠 How It Works

### Math Functions
Four pure functions handle each operation:
```js
add(x, y)       // x + y
subtract(x, y)  // x - y
multiply(x, y)  // x * y
divide(x, y)    // x / y
```

### `operate(operand1, operator, operand2)`
Routes to the correct math function based on the operator string.

### Input State (`flag`)
A `flag` variable tracks which part of the expression is being entered:
- `0` → entering first number
- `1` → entering operator
- `2` → entering second number

### Dynamic Button Creation
Buttons are not hardcoded in HTML. `createNumbers()` and `createOperators()` loop and append `<button>` elements to the DOM at runtime.

---

## 🐛 Known Limitations

- Does not support decimal numbers yet
- Chaining multiple operations (e.g. `1 + 2 + 3`) requires pressing `=` first
- Division by zero returns `Infinity` (no error handling yet)

---

## 🛠️ Built With

- HTML5
- CSS3 (Flexbox)
- Vanilla JavaScript (ES6)