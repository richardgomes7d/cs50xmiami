/*
Multiplication Tables

Write a for loop that will iterate from 0 to 10.
- For each iteration of the for loop,
  it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").

- Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).
*/

// write your solution here...
var html = "<table border = 1 cellpadding = 10><tr><th></th>"

for(var j = 0; j < 10; j++)
  html += '<th>' + j + '</th>';

html += '</tr>';

for(var j = 0; j < 10; j++)
{
  html += '<tr>';
  for(var i = 0; i < 10; i++){
    if( i == 0)
      html += '<td><b>' + j + '</b></td>';
    html += '<td>' + i + ' * ' + j + ' = ' + (i*j) + '</td>';
  }
  html += '</tr>';
}

document.write(html);
