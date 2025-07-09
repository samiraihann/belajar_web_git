// Block Scope
// Before ES6 (2015), JavaScript did not have Block Scope.

// JavaScript had Global Scope and Function Scope.

// ES6 introduced the two new JavaScript keywords: let and const.

// These two keywords provided Block Scope in JavaScript:

{
  let x = 2;
}
// x can NOT be used here


{
  var x = 2;
}
// x CAN be used here


// Cannot be Redeclared
// Variables defined with let can not be redeclared.

// You can not accidentally redeclare a variable declared with let.


let x = "John Doe";

let x = 0;


var x = "John Doe";

var x = 0;


// Redeclaring Variables
// Redeclaring a variable using the var keyword can impose problems.

// Redeclaring a variable inside a block will also redeclare the variable outside the block:


var x = 10;
// Here x is 10

{
var x = 2;
// Here x is 2
}

// Here x is 2

let x = 10;
// Here x is 10

{
let x = 2;
// Here x is 2
}

// Here x is 10


// Redeclaring
// Redeclaring a JavaScript variable with var is allowed anywhere in a program:


var x = 2;
// Now x is 2

var x = 3;
// Now x is 3

var x = 2;   // Allowed
let x = 3;   // Not allowed

{
let x = 2;   // Allowed
var x = 3;   // Not allowed
}


let x = 2;   // Allowed

{
let x = 3;   // Allowed
}

{
let x = 4;    // Allowed
}


// Let Hoisting
// Variables defined with var are hoisted to the top and can be initialized at any time.

// Meaning: You can use the variable before it is declared:


carName = "Volvo";
var carName;

carName = "Saab";
let carName = "Volvo";