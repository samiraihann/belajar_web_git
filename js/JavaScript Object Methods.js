// Example
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   id: 5566,
//   fullName: function() {
//     return this.firstName + " " + this.lastName;
//   }
// };
// In the example above, this refers to the person object:

// this.firstName means the firstName property of person.

// this.lastName means the lastName property of person.

// Accessing Object Methods
// You access an object method with the following syntax:

// objectName.methodName()
// If you invoke the fullName property with (), it will execute as a function:

// Example
// name = person.fullName();
// If you access the fullName property without (), it will return the function definition:

// Example
// name = person.fullName;
// ADVERTISEMENT

// Adding a Method to an Object
// Adding a new method to an object is easy:

// Example
// person.name = function () {
//   return this.firstName + " " + this.lastName;
// };
// Using JavaScript Methods
// This example uses the JavaScript toUpperCase() method to convert a text to uppercase:

// Example
// person.name = function () {
//   return (this.firstName + " " + this.lastName).toUpperCase();
// };


