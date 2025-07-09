// JavaScript HTML DOM EventListener
// The addEventListener() method
// Example
// Add an event listener that fires when a user clicks a button:

// document.getElementById("myBtn").addEventListener("click", displayDate);
// The addEventListener() method attaches an event handler to the specified element.

// The addEventListener() method attaches an event handler to an element without overwriting existing event handlers.

// You can add many event handlers to one element.

// You can add many event handlers of the same type to one element, i.e two "click" events.

// You can add event listeners to any DOM object not only HTML elements. i.e the window object.

// The addEventListener() method makes it easier to control how the event reacts to bubbling.

// When using the addEventListener() method, the JavaScript is separated from the HTML markup, for better readability and allows you to add event listeners even when you do not control the HTML markup.

// You can easily remove an event listener by using the removeEventListener() method.

// Syntax
// element.addEventListener(event, function, useCapture);
// The first parameter is the type of the event (like "click" or "mousedown" or any other HTML DOM Event.)

// The second parameter is the function we want to call when the event occurs.

// The third parameter is a boolean value specifying whether to use event bubbling or event capturing. This parameter is optional.

// Note that you don't use the "on" prefix for the event; use "click" instead of "onclick".

// Add an Event Handler to an Element
// Example
// Alert "Hello World!" when the user clicks on an element:

// element.addEventListener("click", function(){ alert("Hello World!"); });
// You can also refer to an external "named" function:

// Example
// Alert "Hello World!" when the user clicks on an element:

// element.addEventListener("click", myFunction);

// function myFunction() {
//   alert ("Hello World!");
// }
