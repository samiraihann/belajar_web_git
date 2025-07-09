// JavaScript Closures
// JavaScript variables can belong to:

// The local scope or The global scope

// Global variables can be made local (private) with closures.

// Closures makes it possible for a function to have "private" variables.

// Local Variables
// A local variable is a "private" variable defined inside a function.

// A function can access all variables in the local scope.

// Example
// a is a local variable defined inside the function:

// function myFunction() {
//   let a = 4;
//   return a * a;
// }
// Global Variables
// A global variable is a "public" variable defined outside a function.

// A function can access all variables in the global scope:

// Example
// a is global variable defined outside the function:

// let a = 4;
// function myFunction() {
//   return a * a;
// }
// In a web page, global variables belong to the page.

// Global variables can be used (or changed) by all scripts in the page.

// A local variable can only be used inside the function where it is defined. It is private and hidden from other functions and other scripting code.

// Global and local variables with the same name are different variables. Modifying one, does not modify the other.

// Note
// Undeclared variables (created without a keyword var, let, const), are always global, even if they are created inside a function.

// Example
// The variable a is a global variable because it is undeclared:

// function myFunction() {
//   a = 4;
// }
// ADVERTISEMENT

// Variable Lifetime
// Global variables live until the page is discarded, like when you navigate to another page or close the window.

// Local variables have short lives. They are created when the function is invoked, and deleted when the function is finished.

// A Counter Dilemma
// Suppose you want to use a variable for counting something, and you want this counter to be available to everyone (all functions).

// You could use a global variable, and a function to increase the counter:

// Example
// // Initiate counter
// let counter = 0;

// // Function to increment counter
// function add() {
//   counter += 1;
// }

// // Call add() 3 times
// add();
// add();
// add();

// // The counter should now be 3
// Warning !
// There is a problem with the solution above: Any code on the page can change the counter, without calling add().

// The counter should be local to the add() function, to prevent other code from changing it:

// Example
// // Initiate counter
// let counter = 0;

// // Function to increment counter
// function add() {
//   let counter = 0;
//   counter += 1;
// }

// // Call add() 3 times
// add();
// add();
// add();

// // The counter should now be 3. But it is 0
// It did not work because we display the global counter instead of the local counter.

// We can remove the global counter and access the local counter by letting the function return it:

// Example
// // Function to increment counter
// function add() {
//   let counter = 0;
//   counter += 1;
//   return counter;
// }

// let x= 0;
// // Call add() 3 times
// x = add();
// x = add();
// x = add();

// // The counter should now be 3. But it is 1.
// It did not work because we reset the local counter every time we call the function.

// Solution
//  A JavaScript inner function can solve this.

// JavaScript Nested Functions
// All functions have access to the global scope.  

// In fact, in JavaScript, all functions have access to the scope "above" them.

// JavaScript supports nested functions. Nested functions have access to the scope "above" them.

// Example
// The inner function plus() has access to the counter variable in the parent function:

// function add() {
//   let counter = 0;
//   function plus() {counter += 1;}
//   plus();   
//   return counter;
// }
// This could have solved the counter dilemma, if we could reach the plus() function from the outside.

// We also need to find a way to execute counter = 0 only once.

// Solution
// We need a closure.

// JavaScript Closures
// Example
// function myCounter() {
//   let counter = 0;
//   return function() {
//     counter++;
//     return counter;
//   };
// }
// const add = myCounter();
// add();
// add();
// add();

// // the counter is now 3
