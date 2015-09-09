/*
What number's bigger?

Write a function named greaterNum that:
- takes 2 arguments, both numbers.
- returns whichever number is the greater (higher) number.

Call that function 2 times with different number pairs,
and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").
*/

// write your solution here...
function greaterNum(num1, num2){
  if(num1 > num2){
    document.write('<h1>The greater number of ' + num1 + ' and ' + num2 + ' is ' + num1 + '.</h1>');
  }
  else if (num2 > num1) {
    document.write('<h1>The greater number of ' + num1 + ' and ' + num2 + ' is ' + num2 + '.</h1>');
  }
  else{
    document.write('<h1>' + num1 + ' and ' + num2 + ' are equal.</h1>');
  }
}

greaterNum(
  prompt('Give me a number'),
  prompt('Give me another number')
);
