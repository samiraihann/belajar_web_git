// Basic Methods
// Basic number methods can be used on any number:

// toString()
// toExponential()
// toFixed()
// toPrecision()
// valueOf()
// Static Methods
// Static methods can only be used on Number:

// Number.isFinite()
// Number.isInteger()
// Number.isNan()
// Number.isSafeInteger()
// Number.parseInt()
// Number.parseFloat()
// See Also:
// Numbers Tutorial
// Number Properties
// Number Reference
// The toString() Method
// The toString() method returns a number as a string.

// All number methods can be used on any type of numbers (literals, variables, or expressions):

// Example
// let x = 123;
// x.toString();
// (123).toString();
// (100 + 23).toString();
// The toString() method can take an optional radix argument to convert the number to a different base:

// Example
// let x = 123;

// let text = x.toString(2);
// The toExponential() Method
// toExponential() returns a string, with a number rounded and written using exponential notation.

// A parameter defines the number of characters behind the decimal point:

// Example
// let x = 9.656;
// x.toExponential(2);
// x.toExponential(4);
// x.toExponential(6);
// The parameter is optional. If you don't specify it, JavaScript will not round the number.

// ADVERTISEMENT

// The toFixed() Method
// toFixed() returns a string, with the number written with a specified number of decimals:

// Example
// let x = 9.656;
// x.toFixed(0);
// x.toFixed(2);
// x.toFixed(4);
// x.toFixed(6);
// toFixed(2) is perfect for working with money.

// The toPrecision() Method
// toPrecision() returns a string, with a number written with a specified length:

// Example
// let x = 9.656;
// x.toPrecision();
// x.toPrecision(2);
// x.toPrecision(4);
// x.toPrecision(6);
// The valueOf() Method
// valueOf() returns a number as a number.

// Example
// let x = 123;
// x.valueOf();
// (123).valueOf();
// (100 + 23).valueOf();
// In JavaScript, a number can be a primitive value (typeof = number) or an object (typeof = object).

// The valueOf() method is used internally in JavaScript to convert Number objects to primitive values.

// There is no reason to use it in your code.

// All JavaScript data types have a valueOf() and a toString() method.

// Converting Variables to Numbers
// There are 3 JavaScript methods that can be used to convert a variable to a number:

// Method	Description
// Number()	Returns a number converted from its argument.
// parseFloat()	Parses its argument and returns a floating point number
// parseInt()	Parses its argument and returns a whole number
// The methods above are not number methods. They are global JavaScript methods.

// The Number() Method
// The Number() method can be used to convert JavaScript variables to numbers:

// Example
// Number(true);
// Number(false);
// Number("10");
// Number("  10");
// Number("10  ");
// Number(" 10  ");
// Number("10.33");
// Number("10,33");
// Number("10 33");
// Number("John");
// If the number cannot be converted, NaN (Not a Number) is returned.

// The Number() Method Used on Dates
// Number() can also convert a date to a number.

// Example
// Number(new Date("1970-01-01"))
// Note
// The Date() method returns the number of milliseconds since 1.1.1970.

// The number of milliseconds between 1970-01-02 and 1970-01-01 is 86400000:

// Example
// Number(new Date("1970-01-02"))
// Example
// Number(new Date("2017-09-30"))
// The parseInt() Method
// parseInt() parses a string and returns a whole number. Spaces are allowed. Only the first number is returned:

// Example
// parseInt("-10");
// parseInt("-10.33");
// parseInt("10");
// parseInt("10.33");
// parseInt("10 20 30");
// parseInt("10 years");
// parseInt("years 10");
// If the number cannot be converted, NaN (Not a Number) is returned.

// The parseFloat() Method
// parseFloat() parses a string and returns a number. Spaces are allowed. Only the first number is returned:

// Example
// parseFloat("10");
// parseFloat("10.33");
// parseFloat("10 20 30");
// parseFloat("10 years");
// parseFloat("years 10");
// If the number cannot be converted, NaN (Not a Number) is returned.

// Number Object Methods
// These object methods belong to the Number object:

// Method	Description
// Number.isInteger()	Returns true if the argument is an integer
// Number.isNaN()	Returns true if the argument is NaN
// Number.isFinite()	Returns true if the argument is not Infinity nor NaN
// Number.isSafeInteger()	Returns true if the argument is a safe integer
// Number.parseFloat()	Converts a string to a number
// Number.parseInt()	Converts a string to a whole number
// Number Methods Cannot be Used on Variables
// The number methods above belong to the JavaScript Number Object.

// These methods can only be accessed like Number.isInteger().

// Using X.isInteger() where X is a variable, will result in an error:

// TypeError X.isInteger is not a function.

// The Number.isInteger() Method
// The Number.isInteger() method returns true if the argument is an integer.

// Example
// Number.isInteger(10);
// Number.isInteger(10.5);
// The Number.isFinite() Method
// The Number.isFinite() method returns true if the argument is not Infinity, -iInfinity, nor Nan.

// Example
// Number.isFinite(123);
// The Number.isNaN() Method
// The Number.isNaN() method returns true if the argument is NaN (Not a Number).

// Example
// Number.isNaN(123);
// Note
// Number.isNaN() is the preferred way to check for equality with NaN. You cannot test for equality with NaN using == or ===.

// The Number.isSafeInteger() Method
// A safe integer is an integer that can be exactly represented as a double precision number.

// The Number.isSafeInteger() method returns true if the argument is a safe integer.

// Example
// Number.isSafeInteger(10);
// Number.isSafeInteger(12345678901234567890);
// Safe integers are all integers from -(253 - 1) to +(253 - 1).
// This is safe: 9007199254740991. This is not safe: 9007199254740992.

// The Number.parseFloat() Method
// Number.parseFloat() parses a string and returns a number.

// Spaces are allowed. Only the first number is returned:

// Example
// Number.parseFloat("10");
// Number.parseFloat("10.33");
// Number.parseFloat("10 20 30");
// Number.parseFloat("10 years");
// Number.parseFloat("years 10");
// If the number cannot be converted, NaN (Not a Number) is returned.

// Note
// The Number methods Number.parseInt() and Number.parseFloat()

// are the same as the

// Global methods parseInt() and parseFloat().

// The purpose is modularization of globals (to make it easier to use the same JavaScript code outside the browser).

// The Number.parseInt() Method
// Number.parseInt() parses a string and returns a whole number.

// Spaces are allowed. Only the first number is returned:

// Example
// Number.parseInt("-10");
// Number.parseInt("-10.33");
// Number.parseInt("10");
// Number.parseInt("10.33");
// Number.parseInt("10 20 30");
// Number.parseInt("10 years");
// Number.parseInt("years 10");
// If the number cannot be converted, NaN (Not a Number) is returned.

// Complete JavaScript Reference
// For a complete reference to all JavaScript properties and methods, with full descriptions and many examples, go to:

// W3Schools' Full JavaScript Reference.

// The reference inludes all JavaScript updates from 1999 to 2025.