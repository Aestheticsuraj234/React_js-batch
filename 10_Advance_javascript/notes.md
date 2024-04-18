**Math Object:**

The `Math` object in JavaScript provides mathematical constants and functions. It is not a constructor; all its properties and methods are static.

1. **Math.abs(x):**  
   Returns the absolute value of a number `x`.  
   Example: `Math.abs(-10)` returns `10`.

2. **Math.round(x):**  
   Returns the value of a number `x` rounded to the nearest integer.  
   Example: `Math.round(4.8)` returns `5`.

3. **Math.ceil(x):**  
   Returns the smallest integer greater than or equal to a number `x`.  
   Example: `Math.ceil(4.2)` returns `5`.

4. **Math.floor(x):**  
   Returns the largest integer less than or equal to a number `x`.  
   Example: `Math.floor(4.8)` returns `4`.

5. **Math.min(x1, x2, ..., xn):**  
   Returns the smallest of zero or more numbers.  
   Example: `Math.min(1, 2, 3, 4, 5)` returns `1`.

6. **Math.max(x1, x2, ..., xn):**  
   Returns the largest of zero or more numbers.  
   Example: `Math.max(1, 2, 3, 4, 5)` returns `5`.

7. **Math.random():**  
   Returns a pseudo-random floating-point number between 0 (inclusive) and 1 (exclusive).  
   Example: `Math.random()` returns a value between 0 and 1.

8. **Generating a random integer within a range:**  
   ```javascript
   const min = 10;
   const max = 20;
   const randomInteger = Math.floor(Math.random() * (max - min + 1)) + min;
   ```


**Number Object:**

**Number Object:**

The `Number` object in JavaScript is a wrapper object that allows working with numerical values. It provides various methods to perform operations and conversions with numbers.

1. **Number(value):**  
   Creates a new Number object with the specified value.

2. **Number.prototype.toString([radix]):**  
   Returns a string representing the specified Number object.  
   Example:
   ```javascript
   const num = 10;
   console.log(num.toString()); // "10"
   ```

3. **Number.prototype.toFixed(digits):**  
   Returns a string representing the Number object rounded to a specified number of digits after the decimal point.  
   Example:
   ```javascript
   const num = 3.14159;
   console.log(num.toFixed(2)); // "3.14"
   ```

4. **Number.prototype.toPrecision(precision):**  
   Returns a string representing the Number object to the specified precision.  
   Example:
   ```javascript
   const num = 123.456;
   console.log(num.toPrecision(4)); // "123.5"
   ```

5. **Number.prototype.toLocaleString([locales[, options]]):**  
   Returns a string representing the Number object using a locale-specific format.  
   Example:
   ```javascript
   const num = 1000000;
   console.log(num.toLocaleString('en-IN')); // "10,00,000"
   ```

6. **Number.prototype.valueOf():**  
   Returns the primitive value of the Number object.  
   Example:
   ```javascript
   const num = new Number(10);
   console.log(num.valueOf()); // 10
   ```

7. **Number.isNaN(value):**  
   Determines whether the passed value is NaN (Not-a-Number).  
   Example:
   ```javascript
   console.log(Number.isNaN(NaN)); // true
   ```

8. **Number.isFinite(value):**  
   Determines whether the passed value is a finite number.  
   Example:
   ```javascript
   console.log(Number.isFinite(10)); // true
   ```

9. **Number.isInteger(value):**  
   Determines whether the passed value is an integer.  
   Example:
   ```javascript
   console.log(Number.isInteger(10)); // true
   ```

10. **Number.parseFloat(string):**  
    Parses a string argument and returns a floating-point number.  
    Example:
    ```javascript
    console.log(Number.parseFloat('3.14')); // 3.14
    ```

11. **Number.parseInt(string, radix):**  
    Parses a string argument and returns an integer of the specified radix (base).  
    Example:
    ```javascript
    console.log(Number.parseInt('10', 2)); // 2
    ```


