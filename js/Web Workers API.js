// Web Workers API
// A web worker is a JavaScript running in the background, without affecting the performance of the page.

// What is a Web Worker?
// When executing scripts in an HTML page, the page becomes unresponsive until the script is finished.

// A web worker is a JavaScript that runs in the background, independently of other scripts, without affecting the performance of the page. You can continue to do whatever you want: clicking, selecting things, etc., while the web worker runs in the background.

// Browser Support
// The numbers in the table specify the first browser versions that fully support Web Workers:

// Chrome 4	IE 10	Firefox 3.5	Safari 4	Opera 11.5
// Jan 2010	Sep 2012	Jun 2009	Jun 2009	Jun 2011
// Web Workers Example
// The example below creates a simple web worker that count numbers in the background:

// Example
// Count numbers:
// Start Worker Stop Worker

// Check Web Worker Support
// Before creating a web worker, check whether the user's browser supports it:

// if (typeof(Worker) !== "undefined") {
//   // Yes! Web worker support!
//   // Some code.....
// } else {
//   // Sorry! No Web Worker support..
// }
// ADVERTISEMENT

// Create a Web Worker File
// Now, let's create our web worker in an external JavaScript.

// Here, we create a script that counts. The script is stored in the "demo_workers.js" file:

// let i = 0;

// function timedCount() {
//   i ++;
//   postMessage(i);
//   setTimeout("timedCount()",500);
// }

// timedCount();
// The important part of the code above is the postMessage() method - which is used to post a message back to the HTML page.

// Note: Normally web workers are not used for such simple scripts, but for more CPU intensive tasks.

// Create a Web Worker Object
// Now that we have the web worker file, we need to call it from an HTML page.

// The following lines checks if the worker already exists, if not - it creates a new web worker object and runs the code in "demo_workers.js":

// if (typeof(w) == "undefined") {
//   w = new Worker("demo_workers.js");
// }
// Then we can send and receive messages from the web worker.

// Add an "onmessage" event listener to the web worker.

// w.onmessage = function(event){
//   document.getElementById("result").innerHTML = event.data;
// };
// When the web worker posts a message, the code within the event listener is executed. The data from the web worker is stored in event.data.

// Terminate a Web Worker
// When a web worker object is created, it will continue to listen for messages (even after the external script is finished) until it is terminated.

// To terminate a web worker, and free browser/computer resources, use the terminate() method:

// w.terminate();
// Reuse the Web Worker
// If you set the worker variable to undefined, after it has been terminated, you can reuse the code:

// w = undefined;
// Full Web Worker Example Code
// We have already seen the Worker code in the .js file. Below is the code for the HTML page:

// Example
// <!DOCTYPE html>
// <html>
// <body>

// <p>Count numbers: <output id="result"></output></p>
// <button onclick="startWorker()">Start Worker</button>
// <button onclick="stopWorker()">Stop Worker</button>

// <script>
// let w;

// function startWorker() {
//   if (typeof(w) == "undefined") {
//     w = new Worker("demo_workers.js");
//   }
//   w.onmessage = function(event) {
//     document.getElementById("result").innerHTML = event.data;
//   };
// }

// function stopWorker() {
//   w.terminate();
//   w = undefined;
// }
// </script>

// </body>
// </html>
// Web Workers and the DOM
// Since web workers are in external files, they do not have access to the following JavaScript objects:

// The window object
// The document object
// The parent object
