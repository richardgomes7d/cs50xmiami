/*
The Geometrizer

Create 2 functions that calculate properties of a circle, using the definitions here:
http://math2.org/math/geometry/circles.htm

Create a function called calcCircumfrence:
- Pass the radius to the function.
- Calculate the circumference based on the radius, and output "The circumference is NN".

Create a function called calcArea:
- Pass the radius to the function.
- Calculate the area based on the radius, and output "The area is NN".
*/

// write your solution here...
function calcCircumference(radius){
  document.write('<h1>The circunference is ' + (radius * 2 * Math.PI) + '.</h1>');
}

function calcArea(radius){
  document.write('<h1>The area is ' + (Math.pow(radius,2) * Math.PI) + '.</h1>');
}

calcCircumference(prompt('Give me the radius'));
calcArea(prompt('Give me the radius'));
