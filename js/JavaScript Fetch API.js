// JavaScript Fetch API
// The Fetch API interface allows web browser to make HTTP requests to web servers.

// 😀 No need for XMLHttpRequest anymore.

// Browser Support
// The numbers in the table specify the first browser versions that fully support Fetch API:


// Chrome 42	Edge 14	Firefox 40	Safari 10.1	Opera 29
// Apr 2015	Aug 2016	Aug 2015	Mar 2017	Apr 2015
// A Fetch API Example
// The example below fetches a file and displays the content:

// Example
// fetch(file)
// .then(x => x.text())
// .then(y => myDisplay(y));
// Since Fetch is based on async and await, the example above might be easier to understand like this:

// Example
// async function getText(file) {
//   let x = await fetch(file);
//   let y = await x.text();
//   myDisplay(y);
// }
// Or even better: Use understandable names instead of x and y:

// Example
// async function getText(file) {
//   let myObject = await fetch(file);
//   let myText = await myObject.text();
//   myDisplay(myText);
// }
