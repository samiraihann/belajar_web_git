// JavaScript Date Objects let us work with dates:

// Tue Jul 08 2025 15:01:10 GMT+0700 (Western Indonesia Time)

     
// Examples
// const d = new Date();
// const d = new Date("2022-03-25");
// Note
// Date objects are static. The "clock" is not "running".

// The computer clock is ticking, date objects are not.

// JavaScript Date Output
// By default, JavaScript will use the browser's time zone and display a date as a full text string:

// Tue Jul 08 2025 15:01:10 GMT+0700 (Western Indonesia Time)

// You will learn much more about how to display dates, later in this tutorial.

// Creating Date Objects
// Date objects are created with the new Date() constructor.

// There are 9 ways to create a new date object:

// new Date()
// new Date(date string)

// new Date(year,month)
// new Date(year,month,day)
// new Date(year,month,day,hours)
// new Date(year,month,day,hours,minutes)
// new Date(year,month,day,hours,minutes,seconds)
// new Date(year,month,day,hours,minutes,seconds,ms)

// new Date(milliseconds)
// JavaScript new Date()
// new Date() creates a date object with the current date and time:

// Example
// const d = new Date();
// new Date(date string)
// new Date(date string) creates a date object from a date string:

// Examples
// const d = new Date("October 13, 2014 11:13:00");
// const d = new Date("2022-03-25");
// Date string formats are described in the next chapter.

// new Date(year, month, ...)
// new Date(year, month, ...) creates a date object with a specified date and time.

// 7 numbers specify year, month, day, hour, minute, second, and millisecond (in that order):

// Example
// const d = new Date(2018, 11, 24, 10, 33, 30, 0);
// Note
// JavaScript counts months from 0 to 11:

// January = 0.

// December = 11.

// Specifying a month higher than 11, will not result in an error but add the overflow to the next year:

// Specifying:

// const d = new Date(2018, 15, 24, 10, 33, 30);
// Is the same as:

// const d = new Date(2019, 3, 24, 10, 33, 30);
// Specifying a day higher than max, will not result in an error but add the overflow to the next month:

// Specifying:

// const d = new Date(2018, 5, 35, 10, 33, 30);
// Is the same as:

// const d = new Date(2018, 6, 5, 10, 33, 30);
// Using 6, 4, 3, or 2 Numbers
// 6 numbers specify year, month, day, hour, minute, second:

// Example
// const d = new Date(2018, 11, 24, 10, 33, 30);
// 5 numbers specify year, month, day, hour, and minute:

// Example
// const d = new Date(2018, 11, 24, 10, 33);
// 4 numbers specify year, month, day, and hour:

// Example
// const d = new Date(2018, 11, 24, 10);
// 3 numbers specify year, month, and day:

// Example
// const d = new Date(2018, 11, 24);
// 2 numbers specify year and month:

// Example
// const d = new Date(2018, 11);
// You cannot omit month. If you supply only one parameter it will be treated as milliseconds.

// Example
// const d = new Date(2018);
// Previous Century
// One and two digit years will be interpreted as 19xx:

// Example
// const d = new Date(99, 11, 24);
// Example
// const d = new Date(9, 11, 24);
// JavaScript Stores Dates as Milliseconds
// JavaScript stores dates as number of milliseconds since January 01, 1970.

// Zero time is January 01, 1970 00:00:00 UTC.

// One day (24 hours) is 86 400 000 milliseconds.

// Now the time is: 1751961670846 milliseconds past January 01, 1970

// new Date(milliseconds)
// new Date(milliseconds) creates a new date object as milliseconds plus zero time:

// Examples
// 01 January 1970 plus 100 000 000 000 milliseconds is:

// const d = new Date(100000000000);
// January 01 1970 minus 100 000 000 000 milliseconds is:

// const d = new Date(-100000000000);
// January 01 1970 plus 24 hours is:

// const d = new Date(24 * 60 * 60 * 1000);
// // or
// const d = new Date(86400000);
// 01 January 1970 plus 0 milliseconds is:

// const d = new Date(0);
// ADVERTISEMENT

// Date Methods
// When a date object is created, a number of methods allow you to operate on it.

// Date methods allow you to get and set the year, month, day, hour, minute, second, and millisecond of date objects, using either local time or UTC (universal, or GMT) time.

// Date methods and time zones are covered in the next chapters.

// Displaying Dates
// JavaScript will (by default) output dates using the toString() method. This is a string representation of the date, including the time zone. The format is specified in the ECMAScript specification:

// Example
// Tue Jul 08 2025 15:01:10 GMT+0700 (Western Indonesia Time)
// When you display a date object in HTML, it is automatically converted to a string, with the toString() method.

// Example
// const d = new Date();
// d.toString();
// The toDateString() method converts a date to a more readable format:

// Example
// const d = new Date();
// d.toDateString();
// The toUTCString() method converts a date to a string using the UTC standard:

// Example
// const d = new Date();
// d.toUTCString();
// The toISOString() method converts a date to a string using the ISO standard:

// Example
// const d = new Date();
// d.toISOString();
