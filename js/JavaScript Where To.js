// The <script> Tag
// In HTML, JavaScript code is inserted between <script> and </script> tags.

<script>
document.getElementById("demo").innerHTML = "My First JavaScript";
</script>

// JavaScript Functions and Events
// A JavaScript function is a block of JavaScript code, that can be executed when "called" for.

// For example, a function can be called when an event occurs, like when the user clicks a button.

// JavaScript in <head> or <body>
// You can place any number of scripts in an HTML document.

// Scripts can be placed in the <body>, or in the <head> section of an HTML page, or in both.

// JavaScript in <head>
// In this example, a JavaScript function is placed in the <head> section of an HTML page.

// The function is invoked (called) when a button is clicked:

// <!DOCTYPE html>
// <html>
// <head>
// <script>
// function myFunction() {
//   document.getElementById("demo").innerHTML = "Paragraph changed.";
// }
// </script>
// </head>
// <body>
// <h2>Demo JavaScript in Head</h2>

// <p id="demo">A Paragraph</p>
// <button type="button" onclick="myFunction()">Try it</button>

// </body>
// </html>


function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}


<script src="https://www.w3schools.com/js/myScript.js"></script>


