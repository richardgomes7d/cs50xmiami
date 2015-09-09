/*
The Temperature Converter

It's hot out! Let's make a converter based on the steps here:
http://www.mathsisfun.com/temperature-conversion.html

Create a function called celsiusToFahrenheit:
- Store a celsius temperature into a variable.
- Convert it to fahrenheit and output "NN°C is NN°F".

Create a function called fahrenheitToCelsius:
- Now store a fahrenheit temperature into a variable.
- Convert it to celsius and output "NN°F is NN°C."
*/

// write your solution here...

function celsiusToFahrenheit(celsius){
  document.write('<h1>' + celsius + '&degC is ' + (celsius * (9/5) + 32) + '&degF</h1>');
}


function fahrenheitToCelsius(fahrenheit){
  document.write('<h1>' + fahrenheit + '&degF is ' + ((fahrenheit - 32) * (5/9)) + '&degC</h1>');
}

celsiusToFahrenheit(prompt('Give me your celsius'));
fahrenheitToCelsius(prompt('Give me your fahrenheit'));
