/*
The Age Calculator

Forgot how old someone is? Calculate it!

- Store the current year in a variable.
- Store their birth year in a variable.
- Calculate their 2 possible ages based on the stored values.
- Output them to the screen like so: "They are either NN or NN", substituting the values.
*/

// write your solution here...
var current = 2015;
var birth = 1991;

// document.write('hello');
document.write('They are either ' + (current - birth) + ' or ' + (current - birth - 1) +' years old.');
