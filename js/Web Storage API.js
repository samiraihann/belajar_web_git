// Web Storage API
// The Web Storage API is a simple syntax for storing and retrieving data in the browser. It is very easy to use:

// Example
// localStorage.setItem("name", "John Doe");
// localStorage.getItem("name");
// The Web Storage API is supported in all browsers:

// Chrome	IE/Edge	Firefox	Safari	Opera
// Yes	Yes	Yes	Yes	Yes
// The localStorage Object
// The localStorage object provides access to a local storage for a particular Web Site. It allows you to store, read, add, modify, and delete data items for that domain.

// The data is stored with no expiration date, and will not be deleted when the browser is closed.

// The data will be available for days, weeks, and years.

// The setItem() Method
// The localStorage.setItem() method stores a data item in a storage.

// It takes a name and a value as parameters:

// Example
// localStorage.setItem("name", "John Doe");
// The getItem() Method
// The localStorage.getItem() method retrieves a data item from the storage.

// It takes a name as parameter:

// Example
// localStorage.getItem("name");
// ADVERTISEMENT

// The sessionStorage Object
// The sessionStorage object is identical to the localStorage object.

// The difference is that the sessionStorage object stores data for one session.

// The data is deleted when the browser is closed.

// Example
// sessionStorage.getItem("name");
// The setItem() Method
// The sessionStorage.setItem() method stores a data item in a storage.

// It takes a name and a value as parameters:

// Example
// sessionStorage.setItem("name", "John Doe");
// The getItem() Method
// The sessionStorage.getItem() method retrieves a data item from the storage.

// It takes a name as parameter:

// Example
// sessionStorage.getItem("name");
// Storage Object Properties and Methods
// Property/Method	Description
// key(n)	Returns the name of the nth key in the storage
// length	Returns the number of data items stored in the Storage object
// getItem(keyname)	Returns the value of the specified key name
// setItem(keyname, value)	Adds a key to the storage, or updates a key value (if it already exists)
// removeItem(keyname)	Removes that key from the storage
// clear()	Empty all key out of the storage
// Related Pages for Web Storage API
// Property	Description
// window.localStorage	Allows to save key/value pairs in a web browser. Stores the data with no expiration date
// window.sessionStorage	Allows to save key/value pairs in a web browser. Stores the data for one session

 
// Track yo